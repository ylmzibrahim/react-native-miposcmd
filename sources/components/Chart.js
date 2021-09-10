import React from 'react';
import { Text, View, Image } from 'react-native';
import { VictoryChart, VictoryTheme, VictoryBar, VictoryLabel, VictoryGroup, VictoryStack, VictoryPie } from 'victory-native';
import Color from '../theme/Colors'
import sizes from '../theme/Sizes'
import icons from '../theme/Icons'
import Animated, { color } from 'react-native-reanimated';
import VictoryThemeMaterial from '../style/VictoryThemeMaterial';
import fonts from '../theme/Fonts';

const Chart = ({ data, chartType, data1, data2, data3, reviews }) => {

    const ScrollX = new Animated.Value(0);
    const numberOfCharts = ['Bugün', 'Dün', 'Haftalık', 'Aylık', '3 Aylık', 'Yıllık'];

    return (
        <Animated.ScrollView
            horizontal
            pagingEnabled
            scrollEventThrottle={16}
            snapToAlignment='center'
            snapToInterval={sizes.width - 40}
            showsHorizontalScrollIndicator={false}
            decelerationRate={0}
            onScroll={Animated.event([
                {
                    nativeEvent: {contentOffset: {x: ScrollX}}
                }
            ], {useNativeDriver: false})}
        >
            {
                numberOfCharts.map((item, index) => (
                    <View
                        key={`chart-${index}`}
                        style={{
                            marginLeft: index == 0 ? sizes.base : 0

                        }}
                    >
                        <View style={{ marginTop: -25 }}>
                            <View>
                                {chartType == 'VictoryBar' &&
                                    <VictoryChart
                                        theme={VictoryThemeMaterial}
                                        height={200}
                                        width={sizes.width - 40}
                                        minDomain={{ x: 0.5 }}
                                        maxDomain={{ x: 3.5 }}
                                    >
                                        <VictoryBar
                                            style={{ data: { fill: ({ datum }) => datum.x == 'Ödenen' ? Color.chart1 : datum.x == 'Bekleyen' ? Color.chart2 : datum.x == 'Geciken' ? Color.chart3 : datum.x == 'Toplam Stok' ? Color.chart6 : datum.x == 'Tutarsal' ? Color.chart7 : datum.x == 'Miktarsal' ? Color.chart8 : Color.gray, width: 40 } }}
                                            data={data}
                                            labels={({ datum }) => `${datum.y}`}
                                            cornerRadius={5}
                                        />
                                    </VictoryChart>
                                }

                                {chartType == 'VictoryPie' &&
                                    <View>
                                <View style={{ marginLeft: -30, marginTop: -30, marginBottom: 10 }}>
                                            <VictoryPie
                                                style={{ data: { fill: ({ datum }) => datum.x == 'Kasa' ? Color.chart4 : datum.x == 'Banka' ? Color.chart5 : Color.gray} }}
                                                startAngle={90}
                                                endAngle={450}
                                                radius={100}
                                                innerRadius={60}
                                                data={data}
                                            />
                                        </View>
                                        <View style={{ flex: 1, flexDirection: 'column', alignItems: 'flex-start', marginTop: -50, marginLeft: 20, marginBottom: 30 }}>
                                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                                <Image 
                                                    source={icons.dot}
                                                    resizeMode='cover'
                                                    style={{
                                                        width: 18,
                                                        height: 18,
                                                        marginTop: 5,
                                                        tintColor: Color.chart4
                                                    }}
                                                />
                                                <Text>  Kasa {`\t : ${data[0].y} ₺`}</Text>
                                            </View>
                                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                                <Image 
                                                    source={icons.dot}
                                                    resizeMode='cover'
                                                    style={{
                                                        width: 18,
                                                        height: 18,
                                                        marginTop: 5,
                                                        tintColor: Color.chart5
                                                    }}
                                                />
                                                <Text>  Banka {`\t : ${data[1].y} ₺`}</Text>
                                            </View>
                                        </View>
                                    </View>
                                }

                                {chartType == 'List' &&
                                    <View style={{ flex: 1, flexDirection: 'column', alignItems: 'flex-start', margin: 15, marginTop: 50, height: 100, width: sizes.width - 70  }}>
                                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                            <Image 
                                                source={icons.dot}
                                                resizeMode='cover'
                                                style={{
                                                    width: 18,
                                                    height: 18,
                                                    marginTop: 5,
                                                    tintColor: Color.kar
                                                }}
                                            />
                                            <Text style={{ ...fonts.h4 }}>  Kar</Text>
                                            <Text style={{ ...fonts.body2 }}>{`\t\t : ${data[0].y} ₺`}</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                            <Image 
                                                source={icons.dot}
                                                resizeMode='cover'
                                                style={{
                                                    width: 18,
                                                    height: 18,
                                                    marginTop: 5,
                                                    tintColor: Color.kazanc
                                                }}
                                            />
                                            <Text style={{ ...fonts.h4 }}>  Kazanç</Text>
                                            <Text style={{ ...fonts.body2 }}>{`\t : ${data[1].y} ₺`}</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                            <Image 
                                                source={icons.dot}
                                                resizeMode='cover'
                                                style={{
                                                    width: 18,
                                                    height: 18,
                                                    marginTop: 5,
                                                    tintColor: Color.kdv
                                                }}
                                            />
                                            <Text style={{ ...fonts.h4 }}>  KDV</Text>
                                            <Text style={{ ...fonts.body2 }}>{`\t\t : ${data[2].y} ₺`}</Text>
                                        </View>
                                    </View>
                                }

                                {/* {chartType == 'VictoryGroup' &&
                                    <VictoryChart
                                        theme={VictoryThemeMaterial}
                                        height={200}
                                        width={sizes.width - 40}
                                    >
                                        {<VictoryGroup offset={30}
                                            colorScale={"qualitative"}
                                        >
                                                <VictoryBar
                                                    data={data1}
                                                    //labels={({ datum }) => datum.y}
                                                    cornerRadius={5}
                                                />
                                                <VictoryBar
                                                    data={data2}
                                                    //labels={({ datum }) => datum.y}
                                                    cornerRadius={5}
                                                />
                                                <VictoryBar
                                                    data={data3}
                                                    //labels={({ datum }) => datum.y}
                                                    cornerRadius={5}
                                                />
                                        </VictoryGroup>}
                                    </VictoryChart>
                                }

                                {chartType == 'VictoryPortal' &&
                                    <VictoryChart
                                        theme={VictoryThemeMaterial}
                                        height={200}
                                        width={sizes.width - 40}
                                        minDomain={{ x: 0.5 }}
                                        maxDomain={{ x: 3.5 }}
                                    >
                                        <VictoryStack
                                            colorScale={'qualitative'}
                                            style={{
                                                data: { width: 50 },
                                                labels: { fill:Color.white, padding: -20 }
                                            }}
                                            labelComponent={
                                                //<VictoryPortal>
                                                <VictoryLabel/>
                                                //</VictoryPortal>
                                            }
                                        >
                                            <VictoryBar
                                                data={data1}
                                            />
                                            <VictoryBar
                                                data={data2}
                                            />
                                            <VictoryBar
                                                data={data3}
                                                cornerRadius={5}
                                            />
                                        </VictoryStack>
                                    </VictoryChart>
                                } */}
                            </View>
                        </View>
                    </View>
                ))
            }
        </Animated.ScrollView>
    )
}

export default Chart;