import React from 'react';
import { View, Text, StatusBar, ImageBackground, StyleSheet } from 'react-native';
import Color from '../theme/Colors'
import sizes from '../theme/Sizes'
import icons from '../theme/Icons'
import { Icon } from 'react-native-elements'

const AboutUsScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={icons.mipos_logo}
        style={styles.image}
        imageStyle={{ opacity: 0.3 }}
        resizeMode="center"
      />
      <View style={{ flex: 1, flexDirection: 'row', alignItems: 'flex-end', marginBottom: sizes.padding5 }}>
        <Icon
          raised
          reverse
          name='twitter'
          type='font-awesome'
          color='#1DA1F2'
          onPress={() => console.log('hello')}
        />
        <Icon
          raised
          reverse
          name='instagram'
          type='font-awesome'
          color='#fb3958'
          onPress={() => console.log('hello')}
        />
        <Icon
          raised
          reverse
          name='facebook'
          type='font-awesome'
          color='#4267B2'
          onPress={() => console.log('hello')}
        />
        <Icon
          raised
          reverse
          name='youtube'
          type='font-awesome'
          color='#FF0000'
          onPress={() => console.log('hello')}
        />
        <Icon
          raised
          reverse
          name='linkedin'
          type='font-awesome'
          color='#0072b1'
          onPress={() => console.log('hello')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    flex: 2,
    width: sizes.width + 100,
    height: sizes.width + 100,
  },
  text: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000a0"
  }
});

export default AboutUsScreen;