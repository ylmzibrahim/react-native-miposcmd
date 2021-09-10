import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import Color from '../theme/Colors'
import fonts from '../theme/Fonts'
import sizes from '../theme/Sizes'

const TextButton = ({ label, customContainerStyle, customLabelStyle, onPress }) => {
    return (
        <TouchableOpacity
            style={{
                height: 45,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: sizes.radius,
                backgroundColor: Color.green,
                ...customContainerStyle
            }}
            onPress={onPress}
        >
            <Text style={{ color: Color.white, ...fonts.h3, ...customLabelStyle }}>{ label }</Text>
        </TouchableOpacity>
    )
}

export default TextButton;