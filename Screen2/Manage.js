import React,{Component} from 'react';
import {
    View,
    Text,
    ImageBackground,
    StyleSheet,
    TextInput,
    TouchableOpacity,StatusBar 
    } from 'react-native';
import {Header} from 'react-native-elements'
    class Manage extends Component{
        render(){
            return(
                <View>
                  <StatusBar backgroundColor="#101042" />
                         <Header
                containerStyle={{backgroundColor:'#42558d'}}
                centerComponent={{text: 'Manage employee ', style: {color: 'white',fontSize:20}}}
                />
                
            <View style={{marginTop:30,flexDirection:'row',justifyContent:'space-evenly',paddingTop:50}}>
          
          <TouchableOpacity style={{justifyContent:'center',backgroundColor:'#42558d',alignItems:'center',borderRadius:10,width:135,height:125}} onPress={()=>this.props.navigation.navigate('screenFive')}>
        <Text style={{fontSize:20,color:'white'}}>
          Add Employee
          </Text>
          </TouchableOpacity>


          <TouchableOpacity style={{justifyContent:'center',backgroundColor:'#42558d',alignItems:'center',borderRadius:10,width:135,height:125}} onPress={()=>this.props.navigation.navigate('screenSix')}>
        <Text style={{fontSize:20,color:'white'}}>
          Delete Employee
          </Text>
          </TouchableOpacity>
</View> 
                </View>
            )
        }
    }

    export default Manage;