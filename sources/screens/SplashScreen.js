import React from 'react';
import { View, Text, TouchableOpacity, Dimensions, StyleSheet, StatusBar, Image } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { LinearGradient } from 'expo-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useTheme } from '@react-navigation/native';
import Color from '../theme/Colors'
import styles from '../style/styles'
import icons from '../theme/Icons'
import sizes from '../theme/Sizes'
import AppLoading from 'expo-app-loading';
import { useFonts, Inter_100Thin, Inter_200ExtraLight, Inter_300Light, Inter_400Regular, Inter_500Medium, Inter_600SemiBold, Inter_700Bold, Inter_800ExtraBold, Inter_900Black } from '@expo-google-fonts/inter';

const SplashScreen = ({ navigation }) => {

    let [fontsLoaded] = useFonts({
        Inter_100Thin,
        Inter_200ExtraLight,
        Inter_300Light,
        Inter_400Regular,
        Inter_500Medium,
        Inter_600SemiBold,
        Inter_700Bold,
        Inter_800ExtraBold,
        Inter_900Black,
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    }

    return (
        <View style={styles.containerSplashScreen}>
            <StatusBar barStyle="light-content"/>
            <View style={styles.header}>
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
            <Animatable.View style={styles.footer} animation="fadeInUpBig">
                <Text style={styles.title}>Finansal Hesaplarınızı Kontrol Edin</Text>
                <Text style={styles.text}>Hesabınız ile giriş yapın</Text>
                <View style={styles.button}>
                    <TouchableOpacity onPress={()=>navigation.navigate('SignInScreen')}>
                        <LinearGradient
                            colors={[Color.miposColor, Color.miposColorDark]}
                            style={styles.textBasla}
                        >
                        <Text style={styles.textSign}>Basla</Text>
                        <MaterialIcons 
                            name="navigate-next"
                            color="#fff"
                            size={20}
                        />
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </Animatable.View>
        </View>
    );
};

export default SplashScreen;