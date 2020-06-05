import React,{Component} from 'react';
import {
    View,
    Text,
    ImageBackground,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    ViewBase,
    ScrollView,
    Alert,
    StatusBar 
    } from 'react-native';
    import {Header,Avatar,Card,Icon} from 'react-native-elements'
import { Divider } from 'react-native-paper';
    class Deleteemployee extends Component{
        render(){
            return(
                <ScrollView>
                <View>
                <StatusBar backgroundColor="#101042" />
                       <Header
             containerStyle={{backgroundColor:'#42558d'}}
             
             centerComponent={{text: 'Delete Employee' , style: {color: 'white',fontSize:20}}}
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
             <View style={{flexDirection:'row'}}>
             <View style={{flexDirection:'column'}}>
             <Text style={{paddingLeft:20,paddingTop:5}}>Employee 1</Text>
             <Text style={{paddingLeft:20,paddingTop:5}}>Employee ID</Text>
             </View>
             <View style={{paddingLeft:120,flexDirection:'column',justifyContent:'space-between'}}>
            <Icon  iconStyle={{color:'red',}} name={'close'} size={50} onPress={() => Alert.alert('Deleted successfully')} />
                          </View>
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
             <View style={{flexDirection:'row'}}>
             <View style={{flexDirection:'column'}}>
             <Text style={{paddingLeft:20,paddingTop:5}}>Employee 2</Text>
             <Text style={{paddingLeft:20,paddingTop:5}}>Employee ID</Text>
             </View>
             <View style={{paddingLeft:120,flexDirection:'column',justifyContent:'space-between'}}>
            <Icon  iconStyle={{color:'red',}} name={'close'} size={50} onPress={() => Alert.alert('Deleted successfully')} />
                          </View>
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
             <View style={{flexDirection:'row'}}>
             <View style={{flexDirection:'column'}}>
             <Text style={{paddingLeft:20,paddingTop:5}}>Employee 3</Text>
             <Text style={{paddingLeft:20,paddingTop:5}}>Employee ID</Text>
             </View>
             <View style={{paddingLeft:120,flexDirection:'column',justifyContent:'space-between'}}>
            <Icon  iconStyle={{color:'red',}} name={'close'} size={50} onPress={() => Alert.alert('Deleted successfully')} />
                          </View>
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
             <View style={{flexDirection:'row'}}>
             <View style={{flexDirection:'column'}}>
             <Text style={{paddingLeft:20,paddingTop:5}}>Employee 4</Text>
             <Text style={{paddingLeft:20,paddingTop:5}}>Employee ID</Text>
             </View>
             <View style={{paddingLeft:120,flexDirection:'column',justifyContent:'space-between'}}>
            <Icon  iconStyle={{color:'red',}} name={'close'} size={50} onPress={() => Alert.alert('Deleted successfully')} />
                          </View>
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
             <View style={{flexDirection:'row'}}>
             <View style={{flexDirection:'column'}}>
             <Text style={{paddingLeft:20,paddingTop:5}}>Employee 5</Text>
             <Text style={{paddingLeft:20,paddingTop:5}}>Employee ID</Text>
             </View>
             <View style={{paddingLeft:120,flexDirection:'column',justifyContent:'space-between'}}>
            <Icon  iconStyle={{color:'red',}} name={'close'} size={50} onPress={() => Alert.alert('Deleted successfully')} />
                          </View>
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
             <View style={{flexDirection:'row'}}>
             <View style={{flexDirection:'column'}}>
             <Text style={{paddingLeft:20,paddingTop:5}}>Employee 6</Text>
             <Text style={{paddingLeft:20,paddingTop:5}}>Employee ID</Text>
             </View>
             <View style={{paddingLeft:120,flexDirection:'column',justifyContent:'space-between'}}>
            <Icon  iconStyle={{color:'red',}} name={'close'} size={50} onPress={() => Alert.alert('Deleted successfully')} />
                          </View>
             </View>
             
                           </ View>
           </Card>
           
           
           </View>
   </View>
   </ScrollView>
            )
        }
    }

    export default Deleteemployee;