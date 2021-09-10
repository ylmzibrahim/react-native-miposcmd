import React from 'react'
import { View, Image, Text } from 'react-native'
import Color from '../theme/Colors'
import fonts from '../theme/Fonts'
import sizes from '../theme/Sizes'

const CardHeader = ({ icon, title, body }) => {

    return (
        <View style={{ flexDirection: 'row' }}>
            <Image 
                source={icon}
                resizeMode='cover'
                style={{
                    width: 25,
                    height: 25,
                    marginTop: 5,
                    tintColor: Color.black
                }}
            />
            <View style={{ marginLeft: sizes.base }}>
                <Text style={{ ...fonts.h3 }}>{ title }</Text>
                <Text style={{ color: Color.gray, ...fonts.body4 }}>{ body }</Text>
            </View>
        </View>
    )
}

export default CardHeader;