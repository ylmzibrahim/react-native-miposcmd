import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../screens/SplashScreen';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import EditProfileScreen from '../screens/EditProfileScreen';
import BarkodeScannerScreen from '../screens/BarkodeScannerScreen';
import AboutUsScreen from '../screens/AboutUsScreen';

import testSQL from '../model/testSQL';

import Tabs from '../routes/Tabs';

const Stack = new createStackNavigator();

function RootStack() {
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name='SplashScreen' component={SplashScreen} />
                <Stack.Screen name='SignInScreen' component={SignInScreen} />
                <Stack.Screen name='SignUpScreen' component={SignUpScreen} />
                <Stack.Screen name='Tabs' component={Tabs} />
                <Stack.Screen name='DetailsScreen' component={DetailsScreen} />
                <Stack.Screen name='EditProfileScreen' component={EditProfileScreen} />
                <Stack.Screen name='BarkodeScannerScreen' component={BarkodeScannerScreen} />
                <Stack.Screen name='AboutUsScreen' component={AboutUsScreen} />
                <Stack.Screen name='testSQL' component={testSQL} />
            </Stack.Navigator> 
        </NavigationContainer>
    )
}

export default RootStack;