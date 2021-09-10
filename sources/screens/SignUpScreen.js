import React from 'react';
import { View, Text, Button, TouchableOpacity, Dimensions, TextInput, Platform, StyleSheet, ScrollView, StatusBar, ColorPropType } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { LinearGradient } from 'expo-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Color from '../theme/Colors';
import styles from '../style/styles';
import icons from '../theme/Icons';
import sizes from '../theme/Sizes';

const SignInScreen = ({navigation}) => {

    const [data, setData] = React.useState({
        username: '',
        password: '',
        confirm_password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        confirm_secureTextEntry: true,
        isValidUser: true,
        isValidPassword: true,
        isValidConfirmPassword: true,
    });

    const textInputChange = (val) => {
        if( val.length >= 4 ) {
            setData({
                ...data,
                username: val,
                check_textInputChange: true,
                isValidUser: true,
            });
        } else {
            setData({
                ...data,
                username: val,
                check_textInputChange: false,
                isValidUser: false,
            });
        }
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

    const handleConfirmPasswordChange = (val) => {
        if( val === data.password ) {
            setData({
                ...data,
                isValidConfirmPassword: true
            });
        } else {
            setData({
                ...data,
                isValidConfirmPassword: false
            });
        }
    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }

    const updateConfirmSecureTextEntry = () => {
        setData({
            ...data,
            confirm_secureTextEntry: !data.confirm_secureTextEntry
        });
    }

    return (
        <View style={styles.containerSplashScreen}>
            <StatusBar backgroundColor={Color.statusBarSplashScreen} barStyle="light-content"/>
            {/* <View style={styles.headerKaydol}>
                <Text style={styles.text_headerKaydol}>Register Now!</Text>
            </View> */}
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
            <Animatable.View 
                animation="fadeInUpBig"
                style={styles.footerKaydol}
            >
                <ScrollView>

                    <Text style={styles.text_footer}>Kullanıcı Adı</Text>
                    <View style={styles.action}>
                        <FontAwesome 
                            name="user-o"
                            color={Color.black}
                            size={20}
                        />
                        <TextInput 
                            placeholder="Kullanıcı Adınız"
                            style={styles.textInput}
                            autoCapitalize="none"
                            onChangeText={(val) => textInputChange(val)}
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
                            style={styles.textInput}
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

                    <Text style={[styles.text_footer, {
                        marginTop: 35
                    }]}>Şifreyi Onayla</Text>
                    <View style={styles.action}>
                        <Feather 
                            name="lock"
                            color={Color.black}
                            size={20}
                        />
                        <TextInput 
                            placeholder="Şifreyi Onaylayınız"
                            secureTextEntry={data.confirm_secureTextEntry ? true : false}
                            style={styles.textInput}
                            autoCapitalize="none"
                            onChangeText={(val) => handleConfirmPasswordChange(val)}
                        />
                        <TouchableOpacity
                            onPress={updateConfirmSecureTextEntry}
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

                    { data.isValidConfirmPassword ? null : 
                    <Animatable.View animation="fadeInLeft" duration={500}>
                    <Text style={styles.errorMsg}>Şifreniz uyuşmuyor.</Text>
                    </Animatable.View>
                    }

                    <View style={styles.textPrivate}>
                        <Text style={styles.color_textPrivate}>
                            Kayıt olarak 
                        </Text>
                        <Text style={[styles.color_textPrivate, {fontWeight: 'bold'}]}>{" "}Kullanım şartlarını</Text>
                        <Text style={styles.color_textPrivate}>{" "}ve</Text>
                        <Text style={[styles.color_textPrivate, {fontWeight: 'bold'}]}>{" "}Gizlilik politikasını</Text>
                        <Text style={styles.color_textPrivate}>{" "}onaylamış olursunuz.</Text>
                    </View>
                    <View style={styles.buttonGirisYap}>
                        <TouchableOpacity
                            style={styles.touchableGirisYap}
                            onPress={() => {}}
                        >
                        <LinearGradient
                            colors={[Color.miposColor, Color.miposColorDark]}
                            style={styles.touchableGirisYap}
                        >
                            <Text style={[styles.textGirisYap, {
                                color: Color.white
                            }]}>Kaydol</Text>
                        </LinearGradient>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => navigation.goBack()}
                            style={[styles.touchableGirisYap, {
                                borderColor: Color.miposColorDark,
                                borderWidth: 1,
                                marginTop: 15
                            }]}
                        >
                            <Text style={[styles.textGirisYap, {
                                color: Color.miposColorDark
                            }]}>Giriş Yap</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </Animatable.View>
        </View>
    );
};

export default SignInScreen;
