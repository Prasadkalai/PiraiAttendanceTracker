import React, { Component } from 'react';
import DateTimePicker from 'react-native-datepicker';
import {Header,Card,Icon, Avatar} from 'react-native-elements' 
import { View,Text,ScrollView,StatusBar } from 'react-native';

export default class App extends Component {
    constructor(props){
        super(props)
        this.state = {date:"2020-06-04"}
      }

  render() {

    return (
        <ScrollView>
        <View style={{backgroundColor:'white'}}>
        <StatusBar backgroundColor="#101042" />
                  <Header
        containerStyle={{backgroundColor:'#42558d'}}
        
        centerComponent={{text: 'View Attendance ', style: {color: 'white',fontSize:20}}}
        />
      <View style={{paddingLeft:20}}>
      <DateTimePicker 
      style={{width:300}}
      date={this.state.date}
      mode="date"
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
          marginLeft: 20
          
        },
        dateInput: {
          marginLeft: 36,
          borderColor:'white'
        }
        // ... You can check the source to find the other keys.
      }}
      onDateChange={(date) => {this.setState({date: date})}} />
      
      <View>
      <Card containerStyle={{}}>
              < View style={{flexDirection:'row',justifyContent:'flex-start'}} >
              <Avatar
              
              size={'large'}
              rounded
              width={25}
              height={25}
              //containerStyle={{flex: 0.37}}
              //imageProps={{resizeMode:'cover'}}
              source={require('../image/Admin.png')}
              activeOpacity={0.7}
              overlayContainerStyle={{backgroundColor: 'white'}}
            />
            <Text style={{paddingLeft:40,paddingTop:5}}>Employee 1</Text>
            
            <View style={{paddingLeft:120}}>
            <Icon  iconStyle={{color:'green',}} name={'check'} size={25} />
                          </View>
                          </ View>
          </Card>
          <Card containerStyle={{}}>
              < View style={{flexDirection:'row',justifyContent:'flex-start'}} >
              <Avatar
              
              size={'large'}
              rounded
              width={25}
              height={25}
              //containerStyle={{flex: 0.37}}
              //imageProps={{resizeMode:'cover'}}
              source={require('../image/Admin.png')}
              activeOpacity={0.7}
              overlayContainerStyle={{backgroundColor: 'white'}}
            />
            <Text style={{paddingLeft:40,paddingTop:5}}>Employee 2</Text>
            
            <View style={{paddingLeft:120}}>
            <Icon  iconStyle={{color:'red',}} name={'close'} size={25} />
                          </View>
                          </ View>
          </Card>
          <Card containerStyle={{}}>
              < View style={{flexDirection:'row',justifyContent:'flex-start'}} >
              <Avatar
              
              size={'large'}
              rounded
              width={25}
              height={25}
              //containerStyle={{flex: 0.37}}
              //imageProps={{resizeMode:'cover'}}
              source={require('../image/Admin.png')}
              activeOpacity={0.7}
              overlayContainerStyle={{backgroundColor: 'white'}}
            />
            <Text style={{paddingLeft:40,paddingTop:5}}>Employee 3</Text>
            
            <View style={{paddingLeft:120}}>
            <Icon  iconStyle={{color:'green',}} name={'check'} size={25} />
                          </View>
                          </ View>
          </Card><Card containerStyle={{}}>
              < View style={{flexDirection:'row',justifyContent:'flex-start'}} >
              <Avatar
              
              size={'large'}
              rounded
              width={25}
              height={25}
              //containerStyle={{flex: 0.37}}
              //imageProps={{resizeMode:'cover'}}
              source={require('../image/Admin.png')}
              activeOpacity={0.7}
              overlayContainerStyle={{backgroundColor: 'white'}}
            />
            <Text style={{paddingLeft:40,paddingTop:5}}>Employee 4</Text>
            
            <View style={{paddingLeft:120}}>
            <Icon  iconStyle={{color:'red',}} name={'close'} size={25} />
                          </View>
                          </ View>
          </Card><Card containerStyle={{}}>
              < View style={{flexDirection:'row',justifyContent:'flex-start'}} >
              <Avatar
              
              size={'large'}
              rounded
              width={25}
              height={25}
              //containerStyle={{flex: 0.37}}
              //imageProps={{resizeMode:'cover'}}
              source={require('../image/Admin.png')}
              activeOpacity={0.7}
              overlayContainerStyle={{backgroundColor: 'white'}}
            />
            <Text style={{paddingLeft:40,paddingTop:5}}>Employee 5</Text>
            
            <View style={{paddingLeft:120}}>
            <Icon  iconStyle={{color:'red',}} name={'close'} size={25} />
                          </View>
                          </ View>
          </Card><Card containerStyle={{}}>
              < View style={{flexDirection:'row',justifyContent:'flex-start'}} >
              <Avatar
              
              size={'large'}
              rounded
              width={25}
              height={25}
              //containerStyle={{flex: 0.37}}
              //imageProps={{resizeMode:'cover'}}
              source={require('../image/Admin.png')}
              activeOpacity={0.7}
              overlayContainerStyle={{backgroundColor: 'white'}}
            />
            <Text style={{paddingLeft:40,paddingTop:5}}>Employee 6</Text>
            
            <View style={{paddingLeft:120}}>
            <Icon  iconStyle={{color:'green',}} name={'check'} size={25} />
                          </View>
                          </ View>
          </Card><Card containerStyle={{}}>
              < View style={{flexDirection:'row',justifyContent:'flex-start'}} >
              <Avatar
              
              size={'large'}
              rounded
              width={25}
              height={25}
              //containerStyle={{flex: 0.37}}
              //imageProps={{resizeMode:'cover'}}
              source={require('../image/Admin.png')}
              activeOpacity={0.7}
              overlayContainerStyle={{backgroundColor: 'white'}}
            />
            <Text style={{paddingLeft:40,paddingTop:5}}>Employee 7</Text>
            
            <View style={{paddingLeft:120}}>
            <Icon  iconStyle={{color:'green',}} name={'check'} size={25} />
                          </View>
                          </ View>
          </Card><Card containerStyle={{}}>
              < View style={{flexDirection:'row',justifyContent:'flex-start'}} >
              <Avatar
              
              size={'large'}
              rounded
              width={25}
              height={25}
              //containerStyle={{flex: 0.37}}
              //imageProps={{resizeMode:'cover'}}
              source={require('../image/Admin.png')}
              activeOpacity={0.7}
              overlayContainerStyle={{backgroundColor: 'white'}}
            />
            <Text style={{paddingLeft:40,paddingTop:5}}>Employee 8</Text>
            
            <View style={{paddingLeft:120}}>
            <Icon  iconStyle={{color:'green',}} name={'check'} size={25} />
                          </View>
                          </ View>
          </Card>
          </View>

</View>
    </View>
    </ScrollView>
    );
  }
}