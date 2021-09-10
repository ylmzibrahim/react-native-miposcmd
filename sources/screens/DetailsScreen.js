import React from 'react';
import { View, Text, SafeAreaView, StatusBar, Image } from 'react-native';
import styles from '../style/styles'
import Color from '../theme/Colors'
import HeaderBar from '../components/HeaderBar'
import Card from '../components/Card'
import fonts from '../theme/Fonts'
import sizes from '../theme/Sizes';
import { ScrollView } from 'react-native-gesture-handler';
import Chart from '../components/Chart';
import TextButton from '../components/TextButton';

//import VictoryThemeMaterial from '../style/VictoryThemeMaterial';

const DetailsScreen = ({ route }) => {

    const {title} = route.params;
    const {body} = route.params;
    const {icon} = route.params;
    const {data} = route.params;
    const {data1} = route.params;
    const {data2} = route.params;
    const {data3} = route.params;
    const {chartType} = route.params;
    const {chartNumber} = route.params;

    const [chartOptions, setChartOptions] = React.useState([
        { id: 'today', label: 'Bugün' },
        { id: 'yesterday', label: 'Dün' },
        { id: 'weekly', label: 'Haftalık' },
        { id: 'monthly', label: 'Aylık' },
        { id: 'for3months', label: '3 Aylık' },
        { id: 'yearly', label: 'Yıllık' },
    ]);
    const [selectedOption, setSelectedOption] = React.useState(chartOptions[0]);

    function optionOnClickHandler(option) {
        setSelectedOption(option)
    }

    function renderChart() {
        return (
            <View style={ styles.card }>
                {/* Header */}
                <View
                    style={ styles.card_header }
                >
                    <View style={{ flex: 1 }}>
                        <Card 
                            icon={icon}
                            title={title}
                            body={body}
                        />
                    </View>
                </View>

                {/* Chart */}
                <Chart
                    data={data}
                    data1={data1}
                    data2={data2}
                    data3={data3}
                    chartType={chartType}
                    chartNumber={chartNumber}
                />

                {/* Options */}
                <View style={ styles.card_options }>
                {
                    chartOptions.map((option) => {
                        return (
                            <TextButton 
                                key={`option-${option.id}`}
                                label={option.label}
                                customContainerStyle={{
                                    height: 30,
                                    width: 50,
                                    borderRadius: 15,
                                    backgroundColor: selectedOption.id == option.id ? Color.primary : Color.lightGray
                                }}
                                customLabelStyle={{
                                    color: selectedOption.id == option.id ? Color.white : Color.gray,
                                    ...fonts.body5
                                }}
                                onPress={() => optionOnClickHandler(option)}
                            />
                        )
                    })
                }
            </View>

                {/* Dots */}
                
            </View>
        )
    }

    return(
        <SafeAreaView style={{ flex: 1, backgroundColor: Color.appBackgroundColor }}>
                <StatusBar barStyle="dark-content"/>
                <HeaderBar left={true} right={true} text={"DETAY"} />
            <ScrollView>
                <View style={{ flex: 1, paddingBottom: sizes.padding }}>
                    { renderChart() }
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default DetailsScreen;