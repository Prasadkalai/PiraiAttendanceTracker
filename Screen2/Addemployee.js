import React,{Component} from 'react';
import {
    View,
    Text,
    ImageBackground,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    ViewBase,
    Alert,
    StatusBar 
    } from 'react-native';
    import {Header,Avatar,Card,Icon} from 'react-native-elements'
import { Divider } from 'react-native-paper';
    class Addemployee extends Component{
        render(){
            return(
                <View>
                    <StatusBar backgroundColor="#101042" />
                    <Header
            containerStyle={{backgroundColor:'#42558d'}}
            
            centerComponent={{text: ' Add employee ', style: {color: 'white',fontSize:20}}}
            />
            <View style={{alignItems:'stretch',margin:10}}>
            <TextInput placeholder={'Employee name'} ></TextInput>
            </View>
            <Divider />
            <View style={{alignItems:'stretch',margin:10}}>
            <TextInput placeholder={'Employee Id'} ></TextInput>
            </View>
            <Divider />
            <View style={{alignItems:'stretch',margin:10}}>
            <TextInput placeholder={'Email'} ></TextInput>
            </View>
            <Divider />
            <View style={{alignItems:'stretch',margin:10}}>
            <TextInput placeholder={'Role'} ></TextInput>
            </View>
            <Divider />
            <View style={{marginLeft:100,marginRight:100,marginTop:30}}>
          <TouchableOpacity style={{backgroundColor:'#42558d',alignItems:'center',borderRadius:10,height:40}} onPress={() => Alert.alert('Added successfully ')}>
            <View style={{justifyContent:'center',alignItems:'center',paddingTop:10}}>
            <Text style={{fontSize:20,color:'white',alignItems:'center',justifyContent:'center'}}>
              Add Employee
              </Text>
              </View>
              </TouchableOpacity>
    </View> 
            </View>
                
            )
        }
    }

    export default Addemployee;