import React,{Component} from 'react';
import {
    View,
    Text,
    ImageBackground,
    StyleSheet,
    TextInput,
    Alert,
    TouchableOpacity,StatusBar
    } from 'react-native';
import {Header,Card,Icon,Avatar} from 'react-native-elements'

    class Addattend extends Component{
        render(){
            return(
                <View>
                  <StatusBar backgroundColor="#101042" />
                <Header
        containerStyle={{backgroundColor:'#42558d'}}
        
        centerComponent={{text: 'Add Attendance ', style: {color: 'white',fontSize:20}}}
        />
        <Card containerStyle={{}}>
              < View style={{flexDirection:'row',justifyContent:'flex-start'}} >
              <Avatar
              
              size={'large'}
              rounded
              width={50}
              height={50}
              //containerStyle={{flex: 0.37}}
              //imageProps={{resizeMode:'cover'}}
              source={require('../image/Admin.png')}
              activeOpacity={0.7}
              overlayContainerStyle={{backgroundColor: 'white'}}
            />
            <View style={{flexDirection:'column'}}>
            <Text style={{paddingLeft:40,paddingTop:5}}>Employee 2</Text>
            <Text style={{paddingLeft:40,paddingTop:5}}>Employee2@gmail.com</Text>
            </View>
            </ View>
          </Card>
          <View style={{marginTop:30,flexDirection:'row',justifyContent:'space-evenly',paddingTop:50}}>
          
          <TouchableOpacity style={{justifyContent:'center',backgroundColor:'#42558d',alignItems:'center',borderRadius:10,width:135,height:125}} onPress={() => Alert.alert('sucessfully Added')}>
        <Text style={{fontSize:20,color:'white'}}>
          Punch In
          </Text>
          </TouchableOpacity>


          <TouchableOpacity style={{justifyContent:'center',backgroundColor:'#42558d',alignItems:'center',borderRadius:10,width:135,height:125}} onPress={() => Alert.alert('sucessfully Added')}>
        <Text style={{fontSize:20,color:'white'}}>
          Punch Out
          </Text>
          </TouchableOpacity>
</View>
                </View>
            )
        }
    }

    export default Addattend;