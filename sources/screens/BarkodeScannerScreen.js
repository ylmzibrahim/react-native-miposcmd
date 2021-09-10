import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, Image, Alert } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import icons from '../theme/Icons';
import sizes from '../theme/Sizes';

export default function App() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    Alert.alert(
      "QR Okuma Başarılı",
      data,
      [
        
        { 
          text: "Onayla", 
          onPress: () => setScanned(false),
          // onPress: () => console.log("Cancel Pressed"), // When this pressed, get datas from MySQL.
          style: "default" 
        },
        {
          text: "İptal",
          onPress: () => setScanned(false),
          style: "destructive"
        }
      ]
    );
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject, {flex: 1, width: sizes.width, height: sizes.height, alignItems: 'center', justifyContent: 'center'}}
      >
        <Image
          style={{ width: 250, height: 250, tintColor: 'rgba(127, 127, 127, 0.5)' }}
          source={icons.qr_scan}
        />
      </BarCodeScanner>
      {/* {scanned && <View style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)', borderRadius: 10 }}><Button color={'white'} title={'Tekrar okutmak için tıklayın'} onPress={() => setScanned(false)} /></View>} */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  barCodeView: {
    width: '100%', 
    height: '50%', 
    marginBottom: 40
  },
});