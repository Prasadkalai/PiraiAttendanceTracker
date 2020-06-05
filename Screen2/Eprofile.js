import React,{Component} from 'react';
import {
    View,
    Text,
    ImageBackground,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    ViewBase,StatusBar 
    } from 'react-native';
    import {Header,Avatar,Card,Icon} from 'react-native-elements'
import { Divider } from 'react-native-paper';
    class Eprofile extends Component{
        render(){
            return(
                <View>
                  <StatusBar backgroundColor="#101042" />
                    <Header
            containerStyle={{backgroundColor:'#42558d'}}
            
            centerComponent={{text: 'Profile ', style: {color: 'white',fontSize:20}}}
            />
             <Card  containerStyle={{borderRadius:8}} >
              <View style={{flexDirection:'row',justifyContent:'center',paddingLeft:20}}>
              < View style={{flexDirection:'row',justifyContent:'flex-start'}} >
              <View style={{justifyContent:'center',alignItems:'center'}}>
              <Avatar
              
              size={'large'}
              rounded
              width={55}
              height={60}
              //containerStyle={{flex: 0.37}}
              //imageProps={{resizeMode:'cover'}}
              source={require('../image/Admin.png')}
              activeOpacity={0.7}
              overlayContainerStyle={{backgroundColor: 'white'}}
            />
            </View>
            <View style={{flexDirection:'column',alignItems:'center',paddingTop:13,paddingLeft:10}}>
            <Text style={{}}>Employee 1</Text>
            <Text style={{}}>Employee Id</Text>
          
            </View>
            
                          </ View>
                          <View style={{paddingLeft:130}}>
                              <Icon  iconStyle={{color:'#42558d',}} name={'edit'} size={25}  />
          
                              </View>
                              </View>
          </Card>
          
            <View style={{flexDirection:'row',paddingTop:40,paddingleft:60,marginLeft:60}}>
          <Icon  iconStyle={{color:'#42558d',}} name={'email'} size={25}  />
            <View style={{paddingLeft:25}}>
            <Text style={{fontSize:17}}> employee1@gmail.com </Text>
            </View>
            </View>
            <View style={{flexDirection:'row',paddingTop:40,paddingleft:60,marginLeft:60}}>
          <Icon  iconStyle={{color:'#42558d',}} name={'phone'} size={25}  />
            <View style={{paddingLeft:25}}>
            <Text style={{fontSize:17}}> 9999999999 </Text>
            </View>
            </View><View style={{flexDirection:'row',paddingTop:40,paddingleft:50,marginLeft:60}}>
          <Icon  iconStyle={{color:'#42558d',}} name={'person'} size={25} />
            <View style={{paddingLeft:25}}>
            <Text style={{fontSize:17}}> Role </Text>
            </View>
            </View>
            <View style={{justifyContent:'center',alignItems:'center',paddingTop:40}}>
            <TouchableOpacity style={{justifyContent:'center',backgroundColor:'#42558d',alignItems:'center',borderRadius:10,width:150,height:50}} onPress={()=>this.props.navigation.navigate('STackscreenone')}>
                <Text style={{fontSize:20,color:'white'}}>
                  Log out
                  </Text>
                  </TouchableOpacity>
                </View>
     
                </View>
            )
        }
    }

    export default Eprofile;