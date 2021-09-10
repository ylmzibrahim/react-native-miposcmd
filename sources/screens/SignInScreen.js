import React from 'react';
import { View, Text, TouchableOpacity, TextInput, Platform, StyleSheet, StatusBar, Alert, ScrollView } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { LinearGradient } from 'expo-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { AuthContext } from '../components/context';
import Users from '../model/users';
import Color from '../theme/Colors';
import styles from '../style/styles'
import icons from '../theme/Icons'
import sizes from '../theme/Sizes'

const SignInScreen = ({navigation}) => {

    const [data, setData] = React.useState({
        email: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        isValidUser: true,
        isValidPassword: true,
    });

    const signIn = React.useContext(AuthContext);

    const textInputChange = (val) => {
        if( val.trim().length >= 4 ) {
            setData({
                ...data,
                email: val,
                check_textInputChange: true,
                isValidUser: true
            });
        } else {
            setData({
                ...data,
                email: val,
                check_textInputChange: false,
                isValidUser: false
            });
        }
    }

    const handlePasswordChange = (val) => {
        if( val.trim().length >= 8 ) {
            setData({
                ...data,
                password: val,
                isValidPassword: true
            });
        } else {
            setData({
                ...data,
                password: val,
                isValidPassword: false
            });
        }
    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }

    const handleValidUser = (val) => {
        if( val.trim().length >= 4 ) {
            setData({
                ...data,
                isValidUser: true
            });
        } else {
            setData({
                ...data,
                isValidUser: false
            });
        }
    }

    const loginHandle = async (userName, password) => {

        if ( data.email.length == 0 || data.email.length == 0 ) {
            Alert.alert('Wrong Input!', 'Username or password field cannot be empty.', [
                {text: 'Okay'}
            ]);
            return;
        }

        let client_token = await getClientToken();
        console.log(client_token);

        if(!client_token){
            const clientTokenResponse = await fetchClientToken();
            if(!clientTokenResponse) return Alert.alert('Error', 'Couldnt communicate with server. Try again later.');
            await saveClientToken(clientTokenResponse.access_token);
        }

        client_token = await getClientToken();

        const response = await sendLoginRequest(data.email, data.password, client_token);
        console.log(response);

        if(response == 401){
            //client_token expired. Get a new one.
            await deleteClientToken();
            const clientTokenResponse = await fetchClientToken();
            if(!clientTokenResponse) return Alert.alert('Error', 'Couldnt communicate with server. Try again later.');
            await saveClientToken(clientTokenResponse.access_token);
            //try to login again
            client_token = await getClientToken();
            const lastRequestTry = await sendLoginRequest(data.email, data.password, client_token);
            if(lastRequestTry == 409){
                return Alert.alert('Invalid User!', 'Username or password is incorrect.', [
                    {text: 'Okay'}
                ]);
            }
            if(lastRequestTry == 401){
                return Alert.alert('An error happened', 'Please try again later.', [
                    {text: 'Okay'}
                ]);
            }
        }

        if(response == 409){
            return Alert.alert('Invalid User!', 'Username or password is incorrect.', [
                {text: 'Okay'}
            ]);
        }

        await deleteUserToken();
        await saveUserToken(response.access_token);

        // Successfully Signed In
        //Alert.alert('Successfully Signed In!', 'Giriş başarılı, Mipos CMD'ye hoşgeldiniz.', [
        //    {text: 'Okay'}
        //]);

        navigation.navigate('Tabs');
    }

    return (
      <View style={styles.containerSplashScreen}>
        <StatusBar backgroundColor={Color.statusBarSplashScreen} barStyle="light-content"/>
        <View style={styles.headerSignIn}>
            <Animatable.Image 
                width={sizes.width + 150}
                height={sizes.width + 150}
                animation="bounceIn"
                duraton="1500"
                source={icons.mipos_logo}
                style={styles.logoWhite}
                resizeMode="center"
            />
        </View>
        <Animatable.View animation="fadeInUpBig" style={styles.footerKaydol}>
            <ScrollView>
                <Text style={[styles.text_footer, {
                    color: Color.black
                }]}>Kullanıcı Adı</Text>
                <View style={styles.action}>
                    <FontAwesome 
                        name="user-o"
                        color={Color.black}
                        size={20}
                    />
                    <TextInput 
                        placeholder="Kullanıcı Adınız"
                        style={[styles.textInput, {
                            color: Color.black
                        }]}
                        autoCapitalize="none"
                        onChangeText={(val) => textInputChange(val)}
                        onEndEditing={(e)=>handleValidUser(e.nativeEvent.text)}
                    />
                    {data.check_textInputChange ? 
                    <Animatable.View
                        animation="bounceIn"
                    >
                        <Feather 
                            name="check-circle"
                            color="green"
                            size={20}
                        />
                    </Animatable.View>
                    : null}
                </View>
            
                { data.isValidUser ? null : 
                <Animatable.View animation="fadeInLeft" duration={500}>
                <Text style={styles.errorMsg}>Kullanıcı Adı en az 4 karakter uzunluğunda olmalıdır.</Text>
                </Animatable.View>
                }
                
                <Text style={[styles.text_footer, {
                    color: Color.black,
                    marginTop: 35
                }]}>Şifre</Text>
                <View style={styles.action}>
                    <Feather 
                        name="lock"
                        color={Color.black}
                        size={20}
                    />
                    <TextInput 
                        placeholder="Şifreniz"
                        secureTextEntry={data.secureTextEntry ? true : false}
                        style={[styles.textInput, {
                            color: Color.black
                        }]}
                        autoCapitalize="none"
                        onChangeText={(val) => handlePasswordChange(val)}
                    />
                    <TouchableOpacity
                        onPress={updateSecureTextEntry}
                    >
                        {data.secureTextEntry ? 
                        <Feather 
                            name="eye-off"
                            color="grey"
                            size={20}
                        />
                        :
                        <Feather 
                            name="eye"
                            color="grey"
                            size={20}
                        />
                        }
                    </TouchableOpacity>
                </View>

                { data.isValidPassword ? null : 
                <Animatable.View animation="fadeInLeft" duration={500}>
                <Text style={styles.errorMsg}>Şifreniz en az 8 karakter uzunluğunda olmalıdır.</Text>
                </Animatable.View>
                }
                
                <TouchableOpacity>
                    <Text style={{color: Color.mangoColor, marginTop:15}}>Şifremi unuttum</Text>
                </TouchableOpacity>
                <View style={styles.buttonGirisYap}>
                    <TouchableOpacity
                        style={styles.touchableGirisYap}
                        //onPress={() => {loginHandle( data.email, data.password )}}
                        onPress={() => navigation.navigate('Tabs')}
                    >
                    <LinearGradient
                        colors={[Color.miposColor, Color.miposColorDark]}
                        style={styles.touchableGirisYap}
                    >
                        <Text style={[styles.textGirisYap, {
                            color:Color.white
                        }]}>Giriş Yap</Text>
                    </LinearGradient>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => navigation.navigate('SignUpScreen')}
                        style={[styles.touchableGirisYap, {
                            borderColor: Color.miposColorDark,
                            borderWidth: 1,
                            marginTop: 15
                        }]}
                    >
                        <Text style={[styles.textGirisYap, {
                            color: Color.miposColorDark
                        }]}>Kaydol</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </Animatable.View>
      </View>
    );
};

export default SignInScreen;