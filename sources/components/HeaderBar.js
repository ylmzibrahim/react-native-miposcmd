import React from 'react';
import { View, Text, TouchableOpacity, Image, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import Color from '../theme/Colors'
import fonts from '../theme/Fonts'
import icons from '../theme/Icons'
import sizes from '../theme/Sizes'

const HeaderBar = ({ left, right, text }) => {

    const navigation = useNavigation();

    return (
        <View style={{ paddingHorizontal: sizes.padding5, paddingVertical: sizes.padding, flexDirection: 'row' }}>
                <View style={{ flex: 1, alignItems: 'flex-start' }}>
                    {left &&
                        <TouchableOpacity 
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center'
                            }}
                            onPress={() => navigation.goBack()}
                        >
                            <Image 
                                source={icons.back_arrow}
                                resizeMode='contain'
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: Color.gray
                                }}
                            />
                            <Text style={{ marginLeft: sizes.base, color: Color.gray, ...fonts.h3 }} >Geri</Text>
                        </TouchableOpacity>
                    }
                </View>

            <View style={{ flex: 1, alignItems: 'center' }}>
                <Text style={{ color: Color.darkgray, ...fonts.h3 }}>{ text }</Text>
            </View>

            
            <View style={{ flex: 1, alignItems: 'flex-end' }}>
                { right &&
                    <TouchableOpacity>
                        <Image 
                            source={icons.more}
                            resizeMode='contain'
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: Color.gray
                            }}
                        />
                    </TouchableOpacity>
                }
            </View>
        </View>
    )
}

export default HeaderBar;