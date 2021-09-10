import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, StatusBar, SafeAreaView, Alert } from 'react-native';
import styles from '../style/styles'
import Color from '../theme/Colors'
import fonts from '../theme/Fonts'
import icons from '../theme/Icons'
import sizes from '../theme/Sizes'
import Card from '../components/Card'
import Chart from '../components/Chart';
import TextButton from '../components/TextButton';
import HeaderBar from '../components/HeaderBar'

const HomeScreen = ({ navigation }) => {


    const hasUnsavedChanges = Boolean(true);
    React.useEffect(
        () =>
          navigation.addListener('beforeRemove', (e) => {
            if (!hasUnsavedChanges) {
              // If we don't have unsaved changes, then we don't need to do anything
              return;
            }
    
            // Prevent default behavior of leaving the screen
            e.preventDefault();
    
            // Prompt the user before leaving the screen
            Alert.alert(
              'Hesabınızdan çıkış yapmak üzeresiniz',
              'Hesabınızdan çıkış yapmak istediğinize emin misiniz?',
              [
                { text: "İptal", style: 'cancel', onPress: () => {} },
                {
                  text: 'Çıkış Yap',
                  style: 'destructive',
                  // If the user confirmed, then we dispatch the action we blocked earlier
                  // This will continue the action that had triggered the removal of the screen
                  onPress: () => navigation.dispatch(e.data.action),
                },
              ]
            );
          }),
        [navigation, hasUnsavedChanges]
      );

      

    // Kategoriler - ilerde veritabanından çekilecek
    const [reviews, setReviews] = useState([

        { id: 'odemeler', key: 1, title: 'ÖDEMELER', body: '(Ödenen, Bekleyen, Geciken)', icon: icons.monetizing, chartType: 'VictoryBar', selectedOption: 'Bugün',
            data: [
                { x: 'Ödenen', y: 200 },
                { x: 'Bekleyen', y: 800 },
                { x: 'Geciken', y: 550 },
            ]
        },

        { id: 'tahsilatlar', key: 2, title: 'TAHSİLATLAR', body: '(Tahsil Edilen, Bekleyen, Geciken)', icon: icons.rating_stars, chartType: 'VictoryBar', selectedOption: 'Bugün',
            data: [
                { x: 'Ödenen', y: 1000 },
                { x: 'Bekleyen', y: 2000 },
                { x: 'Geciken', y: 2600 },
            ]
        },
        
        { id: 'varliklar', key: 3, title: 'VARLIKLAR', body: '(Kasa, Banka)', icon: icons.seo_tags, chartType: 'VictoryPie', selectedOption: 'Bugün',
            data: [
                { x: 'Kasa', y: 156500 },
                { x: 'Banka', y: 20000 },
            ]
        },
        
        { id: 'stoklar', key: 4, title: 'STOKLAR', body: '(Toplam Stok Değeri)', icon: icons.seo_tags, chartType: 'VictoryBar', selectedOption: 'Bugün',
            data: [
                { x: 'Toplam Stok', y: 4500 },
            ]
        },
        
        { id: 'mali_bilgiler', key: 5, title: 'MALİ BİLGİLER', body: '(Kar, Kazanç, KDV)', icon: icons.seo_tags, chartType: 'List', selectedOption: 'Bugün',
            data: [
                { x: 'Kar', y: 10 },
                { x: 'Kazanç', y: 10 },
                { x: 'KDV', y: 10 },
            ]
        },
        
        { id: 'satislar', key: 6, title: 'SATIŞLAR', body: '(Tutarsal, Miktarsal)', icon: icons.seo_tags, chartType: 'VictoryBar', selectedOption: 'Bugün',
            data: [
                { x: 'Tutarsal', y: 1500 },
                { x: 'Miktarsal', y: 200 },
            ]
        },
    ]);

    const [chartOptions, setChartOptions] = useState(
        [
            { id: 'today', label: 'Bugün' },
            { id: 'yesterday', label: 'Dün' },
            { id: 'weekly', label: 'Haftalık' },
            { id: 'monthly', label: 'Aylık' },
            { id: 'for3months', label: '3 Aylık' },
            { id: 'yearly', label: 'Yıllık' },
        ]
    );

    const [count, setCount] = useState(0);

    function optionOnClickHandler(label, itemIndex) {
        reviews[itemIndex].selectedOption = label
        setCount(count + 1)
    }

    return (
        <SafeAreaView 
            style={{
                flex: 1,
                backgroundColor: Color.appBackgroundColor,
                marginBottom: 50
            }}
        >
            <StatusBar barStyle="dark-content"/>
            <HeaderBar left={false} right={true} text={"CMD"} />
            <FlatList
                data={reviews}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <View style={ styles.card }>
                        
                        {/* Header */}
                        <View style={ styles.card_header }>
                            <View style={{ flex: 1 }}>
                                <TouchableOpacity onPress={() => navigation.navigate('DetailsScreen', item)}>
                                    <Card 
                                        icon={item.icon}
                                        title={item.title}
                                        body={item.body}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>

                        {/* Chart */}
                        <Chart
                            data={item.data}
                            data1={item.data1}
                            data2={item.data2}
                            data3={item.data3}
                            chartType={item.chartType}
                            reviews={reviews}
                        />

                        {/* Options */}
                        <View style={ styles.card_options }>
                            {chartOptions.map((option) => {
                                return (
                                    <View key={option.id}>
                                        <TextButton 
                                            key={`option-${option}-${item.id}`}
                                            label={option.label}
                                            customContainerStyle={{
                                                height: 30,
                                                width: (sizes.width - 70)/6,
                                                borderRadius: 15,
                                                backgroundColor: item.selectedOption == option.label ? Color.primary : Color.lightGray
                                            }}
                                            customLabelStyle={{
                                                color: item.selectedOption == option.label ? Color.white : Color.gray,
                                                ...fonts.body5
                                            }}
                                            onPress={() => optionOnClickHandler(option.label, item.key -1) && setReviews({...reviews})}
                                        />
                                    </View>
                                )
                            })}
                        </View>
                    </View>
                )}
            />
        </SafeAreaView>
    )
}

export default HomeScreen;