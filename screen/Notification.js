import React,{Component} from 'react';
import {
    View,
    Text,
    ImageBackground,
    StyleSheet,
    ScrollView,
    TextInput,
    TouchableOpacity,
Alert,    StatusBar
    } from 'react-native';
    import {Header,Card,Avatar,Icon} from 'react-native-elements';

    class Notification extends Component{
        render(){
            return(
               <ScrollView>
               <View>
               <StatusBar backgroundColor="#101042" />
                      <Header
            containerStyle={{backgroundColor:'#42558d'}}
            
            centerComponent={{text: 'Notification' , style: {color: 'white',fontSize:20}}}
            />
              
      <View>
      <Card containerStyle={{}}>
              < View style={{flexDirection:'row',justifyContent:'flex-start'}} >
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
            <View style={{flexDirection:'column'}}>
            <Text style={{paddingLeft:20,paddingTop:5}}>Employee 1</Text>
            <Text style={{paddingLeft:20,paddingTop:5}}>From:2020-06-04  To:2020-06-06</Text>
            <Text style={{paddingLeft:17,paddingTop:5}}> Reason</Text>
            </View>
            
                          </ View>
          </Card>
          <Card containerStyle={{}}>
              < View style={{flexDirection:'row',justifyContent:'flex-start'}} >
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
            <View style={{flexDirection:'column'}}>
            <Text style={{paddingLeft:20,paddingTop:5}}>Employee 2</Text>
            <Text style={{paddingLeft:20,paddingTop:5}}>From:2020-06-04  To:2020-06-06</Text>
            <Text style={{paddingLeft:17,paddingTop:5}}> Reason</Text>
            </View>
           
                          </ View>
          </Card><Card containerStyle={{}}>
              < View style={{flexDirection:'row',justifyContent:'flex-start'}} >
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
            <View style={{flexDirection:'column'}}>
            <Text style={{paddingLeft:20,paddingTop:5}}>Employee 3</Text>
            <Text style={{paddingLeft:20,paddingTop:5}}>From:2020-06-04  To:2020-06-06</Text>
            <Text style={{paddingLeft:17,paddingTop:5}}> Reason</Text>
            </View>
           
                          </ View>
          </Card><Card containerStyle={{}}>
              < View style={{flexDirection:'row',justifyContent:'flex-start'}} >
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
            <View style={{flexDirection:'column'}}>
            <Text style={{paddingLeft:20,paddingTop:5}}>Employee 4</Text>
            <Text style={{paddingLeft:20,paddingTop:5}}>From:2020-06-04  To:2020-06-06</Text>
            <Text style={{paddingLeft:17,paddingTop:5}}> Reason</Text>
            </View>
            
                          </ View>
          </Card><Card containerStyle={{}}>
              < View style={{flexDirection:'row',justifyContent:'flex-start'}} >
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
            <View style={{flexDirection:'column'}}>
            <Text style={{paddingLeft:20,paddingTop:5}}>Employee 4</Text>
            <Text style={{paddingLeft:20,paddingTop:5}}>From:2020-06-04  To:2020-06-06</Text>
            <Text style={{paddingLeft:17,paddingTop:5}}> Reason</Text>
            </View>
            
                          </ View>
          </Card><Card containerStyle={{}}>
              < View style={{flexDirection:'row',justifyContent:'flex-start'}} >
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
            <View style={{flexDirection:'column'}}>
            <Text style={{paddingLeft:20,paddingTop:5}}>Employee 5</Text>
            <Text style={{paddingLeft:20,paddingTop:5}}>From:2020-06-04  To:2020-06-06</Text>
            <Text style={{paddingLeft:17,paddingTop:5}}> Reason</Text>
            </View>
           
                          </ View>
          </Card>
         
          </View>
  </View>
  </ScrollView>
            )
        }
    }

    export default Notification;