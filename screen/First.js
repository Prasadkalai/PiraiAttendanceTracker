import React ,{Component} from 'react';
import {View,StatusBar,Text, ImageBackground} from 'react-native';
import {Avatar,SearchBar} from 'react-native-elements'

class First extends Component{
    render(){
        return(
            
            <View style={{ backgroundColor:'#42558d',flex:1}}>
              <StatusBar backgroundColor="#101042" />  
           <View style={{alignItems:'center'}}>
             <View style={{paddingTop:100}}> 
           <ImageBackground style={{width:200,height:60}} source={require('../image/images.jpg')} />           
           </View>
             <Text style={{fontSize:40,fontWeight:'bold',color:'white',paddingTop:50}}>
               welcome!
             </Text>
             <Text style={{color:'white',paddingTop:20}}>select a user type</Text>
           </View>
           <View style={{ paddingTop:50,backgroundColor:'#42558d',flexDirection:'row',alignItems:'center',justifyContent: 'space-evenly'}}>             
           
           <Avatar
              
              size={'large'}
              rounded
              width={100}
              height={100}
              //containerStyle={{flex: 0.37}}
              //imageProps={{resizeMode:'cover'}}
              source={require('../image/Admin.png')}
              onPress={() => console.log("Works!")}
              activeOpacity={0.7}
              overlayContainerStyle={{backgroundColor: 'white'}}
              onPress={()=>this.props.navigation.navigate('STackscreenFour')}
            />
            <Avatar
              
              size={'large'}
              rounded
            width={100}
              //containerStyle={{flex: 0.37}}
              //imageProps={{resizeMode:'cover'}}
              source={require('../image/Employee.png')}
              onPress={() => console.log("Works!")}
              overlayContainerStyle={{backgroundColor: 'white'}}
              activeOpacity={0.7}
              onPress={()=>this.props.navigation.navigate('STackscreenTwo')}
            />
          </View>
          <View style={{flexDirection:'row',justifyContent:'space-around'}}>
            <Text style={{color:'white',paddingLeft:35}}>Admin</Text>
            <Text style={{color:'white',paddingRight:25}}>Employee</Text>
          </View>
 </View>
                
 
); 
    }
}

export default First;