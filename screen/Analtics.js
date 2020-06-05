import React,{Component} from 'react';
import {
    View,
    Text,
    ImageBackground,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    StatusBar
    } from 'react-native';
    import {Header} from 'react-native-elements'
    import {BarChart,LineChart} from 'react-native-chart-kit'

    import DateTimePicker from 'react-native-datepicker';
    class Analtics extends Component{
        
        
    
        render(){
            return(
                <View>
                  <StatusBar backgroundColor="#101042" />
                      <Header
        containerStyle={{backgroundColor:'#42558d'}}
        
        centerComponent={{text: 'Analtics', style: {color: 'white',fontSize:20}}}
        />
  
                    <View>
  <LineChart
    data={{
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun",'jul','aug','sep','oct','nov','dec'],
      datasets: [
        {
          data:[0,20,45,50,67,87,90,56,98,99,45,67,87       ]
        }
      ]
    }}
    width={350} // from react-native
    height={220}
    yAxisInterval={1} // optional, defaults to 1
    chartConfig={{
      backgroundColor: "#42558d",
      backgroundGradientFrom: "#42558d",
      backgroundGradientTo: "#42558d",
      decimalPlaces: 2, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      style: {
        borderRadius: 16
      },
      propsForDots: {
        r: "6",
        strokeWidth: "2",
        stroke: "#ffa726"
      }
    }}
    bezier
    style={{
      marginVertical: 8,
      borderRadius: 16
    }}
  />
  </View>
                </View>
            )
        }
    }

    export default Analtics;