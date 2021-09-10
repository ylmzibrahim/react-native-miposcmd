import React from "react";
import { View, Image, TouchableOpacity, StyleSheet } from "react-native";
import { createBottomTabNavigator, BottomTabBar } from "@react-navigation/bottom-tabs"
import Svg, { Path } from 'react-native-svg'
import SettingsScreen from "../screens/SettingsScreen"
import HomeScreen from "../screens/HomeScreen"
import ProfileScreen from "../screens/ProfileScreen"
import Color from '../theme/Colors'
import styles from '../style/styles'
import icons from '../theme/Icons'

const Tab = createBottomTabNavigator()

const TabBarCustomButton = ({ accessibilityLabel, accessibilityState, children, onPress }) => {

    var isSelected = accessibilityState.selected

    if (isSelected) {
        return (
            <View style={{ flex: 1, alignItems: 'center' }}>
                <View
                    style={{
                        flexDirection: 'row',
                        position: 'absolute',
                        top: 0
                    }}
                >
                    <View style={{ flex: 1, backgroundColor: Color.white }}></View>
                    <Svg
                        width={75}
                        height={61}
                        viewBox="0 0 75 61"
                    >
                        <Path
                            d="M75.2 0v61H0V0c4.1 0 7.4 3.1 7.9 7.1C10 21.7 22.5 33 37.7 33c15.2 0 27.7-11.3 29.7-25.9.5-4 3.9-7.1 7.9-7.1h-.1z"
                            fill={Color.white}
                        />
                    </Svg>
                    <View style={{ flex: 1, backgroundColor: Color.white }}></View>
                </View>

                <TouchableOpacity
                    style={{
                        top: -22.5,
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: 50,
                        height: 50,
                        borderRadius: 25,
                        backgroundColor: Color.primary,
                        ...styles.shadow
                    }}
                    onPress={onPress}
                >
                    {children}
                </TouchableOpacity>
            </View>
        )
    } else {
        return (
            <TouchableOpacity
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: 50,
                    height: 50,
                    backgroundColor: Color.white
                }}
                activeOpacity={1}
                onPress={onPress}
            >
                {children}
            </TouchableOpacity>
        )
    }
}

const CustomTabBar = (props) => {
    return (
        <BottomTabBar {...props.props} />
    )
}

const Tabs = () => {
    return (
        <Tab.Navigator
        initialRouteName={'HomeScreen'}
            tabBarOptions={{
                showLabel: false,
                
                style: {
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    backgroundColor: "transparent",
                    elevation: 0
                }
            }}
            tabBar={(props) => (
                <CustomTabBar
                    props={props}
                />
            )}
        >
            <Tab.Screen
                name="SettingsScreen"
                component={SettingsScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={icons.settings}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? Color.white : Color.black
                            }}
                        />
                    ),
                    tabBarButton: (props) => (
                        <TabBarCustomButton
                            {...props}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={icons.mipos_logo}
                            resizeMode="contain"
                            style={{
                                width: 70,
                                height: 70,
                                tintColor: focused ? Color.white : Color.black
                            }}
                        />
                    ),
                    tabBarButton: (props) => (
                        <TabBarCustomButton
                            {...props}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="ProfileScreen"
                component={ProfileScreen}
                options={{
                    tabBarBadge: 3,
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={icons.user}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? Color.white : Color.black
                            }}
                        />
                    ),
                    tabBarButton: (props) => (
                        <TabBarCustomButton
                            {...props}
                        />
                    )
                }}
            />
        </Tab.Navigator>
    )
}

export default Tabs;









// import React from 'react';
// import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
// import { createBottomTabNavigator, BottomTabBar } from '@react-navigation/bottom-tabs';
// import Svg, { Path } from 'react-native-svg';
// import HomeScreen from '../screens/HomeScreen';
// import ProfileScreen from '../screens/ProfileScreen';
// import EditProfileScreen from '../screens/EditProfileScreen';
// import Color from '../theme/Colors';
// import styles from '../style/styles';

// const Tab = createBottomTabNavigator()

// const TabBarCustomButton = ({ accessibilityLabel, accessibilityState, children, onPress }) => {
    
//     var isSelected = accessibilityState.selected 

//     if(isSelected) {
//         return (
//             <View tyle={{flex: 1, alignItems: 'center'}}>
//                 <View style={{ flexDirection: 'row', position: 'absolute', top: 0 }} >
//                     <View style={{ flex: 1, backgroundColor: Color.whiteColor }}></View>
//                     <Svg
//                         width={75}
//                         height={61}
//                         viewBox='0 0 75 61'
//                     >
//                         <Path
//                             d="M75.2 0v61H0V0c4.1 0 7.4 3.1 7.9 7.1C10 21.7 22.5 33 37.7 33c15.2 0 27.7-11.3 29.7-25.9.5-4 3.9-7.1 7.9-7.1h-.1z"
//                             fill={Color.whiteColor}
//                         />
//                     </Svg>
//                     <View style={{ flex: 1, backgroundColor: Color.whiteColor }}></View>
//                 </View>

//                 <TouchableOpacity
//                     style={{
//                         top: -22.5,
//                         marginHorizontal: 43.5,
//                         justifyContent: 'center',
//                         alignItems: 'center',
//                         width: 50,
//                         height: 50,
//                         borderRadius: 25,
//                         backgroundColor: Color.primary,
//                         ...styles.shadow
//                     }}
//                     onPress={onPress}
//                 >
//                     {children}
//                 </TouchableOpacity>
//             </View>
//         )
//     }
//     else {
//         return (
//             <TouchableOpacity
//                 style={{
//                     flex: 1,
//                     justifyContent: 'center',
//                     alignItems: 'center',
//                     width: 50,
//                     height: 50,
//                     backgroundColor: Color.whiteColor
//                 }}
//                 activeOpacity={1}
//                 onPress={onPress}
//             >
//                 {children}
//             </TouchableOpacity>
//         )
//     }
// }

// const CustomTabBar = (props) => {
//     return (
//         <BottomTabBar {...props.props} /> 
//     )
// }

// const Tabs = () => {
//     return (
//         <Tab.Navigator
//             tabBarOptions={{
//                 showLabel: false,
//                 style: {
//                     position: 'absolute',
//                     bottom: 0,
//                     left: 0,
//                     right: 0,
//                     backgroundColor: 'transparent',
//                     elevation: 0    
//                 }
//             }}
//             tabBar={(props) => (
//                 <CustomTabBar 
//                     props={props}
//                 />
//             )}
//         >
//             <Tab.Screen 
//                 name='HomeScreen'
//                 component={HomeScreen}
//                 options={{
//                     tabBarIcon: ({ focused }) => (
//                         <Image 
//                             source={require('../assets/icons/mipos_logo.png')}
//                             resizeMode='contain'
//                             style={{
//                                 width: 25,
//                                 height: 25,
//                                 tintColor: focused ? Color.miposColor : Color.blackColor
//                             }}
//                         />
//                     ),
//                     tabBarButton: (props) => (
//                         <TabBarCustomButton
//                             {...props}
//                         />
//                     )
//                 }}
//             />
//             <Tab.Screen 
//                 name='ProfileScreen'
//                 component={ProfileScreen}
//                 options={{
//                     tabBarIcon: ({ focused }) => (
//                         <Image 
//                             source={require('../assets/icons/mipos_logo.png')}
//                             resizeMode='contain'
//                             style={{
//                                 width: 25,
//                                 height: 25,
//                                 tintColor: focused ? Color.miposColor : Color.blackColor
//                             }}
//                         />
//                     ),
//                     tabBarButton: (props) => (
//                         <TabBarCustomButton
//                             {...props}
//                         />
//                     )
//                 }}
//             />
//             <Tab.Screen 
//                 name='EditProfileScreen'
//                 component={EditProfileScreen}
//                 options={{
//                     tabBarIcon: ({ focused }) => (
//                         <Image 
//                             source={require('../assets/icons/mipos_logo.png')}
//                             resizeMode='contain'
//                             style={{
//                                 width: 25,
//                                 height: 25,
//                                 tintColor: focused ? Color.miposColor : Color.blackColor
//                             }}
//                         />
//                     ),
//                     tabBarButton: (props) => (
//                         <TabBarCustomButton
//                             {...props}
//                         />
//                     )
//                 }}
//             />
//         </Tab.Navigator>
//     )
// }

// export default Tabs;