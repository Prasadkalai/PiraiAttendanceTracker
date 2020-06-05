import React,{Component} from 'react';
import {
    View,
    Text,
    ImageBackground,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    StatusBar,
    Alert
    } from 'react-native';
    import {Header} from 'react-native-elements'

    import DateTimePicker from 'react-native-datepicker';
    class Eleave extends Component{
        
        constructor(props){
            super(props)
            this.state = {date:"2020-06-04"}
          }
    
        render(){
            return(
                <View>
                  <StatusBar backgroundColor="#101042" />
                    <Header
            containerStyle={{backgroundColor:'#42558d'}}
            
            centerComponent={{text: 'E-leave ', style: {color: 'white',fontSize:20}}}
            />
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
               <View style={{paddingTop:10}}>
                <Text>From:</Text>
</View>
<DateTimePicker 
      style={{width:300}}
      date={this.state.date}
      mode='date'
      placeholder="select date"
      format="YYYY-MM-DD"
      minDate="2000-01-01"
      maxDate="2040-01-01"
      confirmBtnText="Confirm"
      cancelBtnText="Cancel"
      customStyles={{
        dateIcon: {
          position: 'absolute',
          left: 0,
          top: 4,
          marginLeft: 20,
          
          
        },
        dateInput: {
          marginRight: 50,
          borderColor:'#42558d',
          borderRadius:5
        }
        // ... You can check the source to find the other keys.
      }}
      onDateChange={(date) => {this.setState({date: date})}} />
      </View>
      <View style={{flexDirection:'row',justifyContent:'space-between',paddingTop:10}}>
                <View style={{paddingTop:10}}><Text>To:</Text>
</View>
<DateTimePicker 
      style={{width:300}}
      date={this.state.date}
      mode='date'
      placeholder="select date"
      format="YYYY-MM-DD"
      minDate="2000-01-01"
      maxDate="2040-01-01"
      confirmBtnText="Confirm"
      cancelBtnText="Cancel"
      customStyles={{
        dateIcon: {
          position: 'absolute',
          left: 0,
          top: 4,
          marginLeft: 20,
          borderRadius:25
          
        },
        dateInput: {
          marginRight: 50,
          borderColor:'#42558d',
          borderRadius:5
          
        }
        // ... You can check the source to find the other keys.
      }}
      onDateChange={(date) => {this.setState({date: date})}} />
      </View>
      <View style={{padding:20}}>
      <TextInput  style={{borderColor:'#42558d',borderWidth:1,height:100,borderRadius:5}} placeholder={'reason'} />
            </View>
            <View style={{justifyContent:'center',alignItems:'center'}}>
            <TouchableOpacity style={{justifyContent:'center',backgroundColor:'#42558d',alignItems:'center',borderRadius:10,width:150,height:50}} onPress={()=>Alert.alert('leave applied')}>
                <Text style={{fontSize:20,color:'white'}}>
                  Apply leave
                  </Text>
                  </TouchableOpacity>
                </View>
                </View>
            )
        }
    }

    export default Eleave;