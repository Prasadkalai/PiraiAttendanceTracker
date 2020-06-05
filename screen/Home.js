import React,{Component} from 'react';
import {
View,
Text,
ImageBackground,
StyleSheet,
TextInput,
TouchableOpacity,
Button,
StatusBar
} from 'react-native';
import {Icon,Header} from 'react-native-elements'
import {BarChart} from 'react-native-chart-kit'
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs'
import Profile from './Profile';
import Notification from './Notification';
import Viewattend from './Viewattend';
import Addattend from './Addattend';
 

class Home extends Component{
    render(){
        return(
            <View>
              <StatusBar backgroundColor="#101042" />
                <Header
            containerStyle={{backgroundColor:'#42558d'}}
            
            centerComponent={{text: 'Pirai Attendance Tracker ', style: {color: 'white',fontSize:20}}}
            />
            <View style={{marginTop:30,flexDirection:'row',justifyContent:'space-evenly',paddingTop:50}}>
          
              <TouchableOpacity style={{justifyContent:'center',backgroundColor:'#42558d',alignItems:'center',borderRadius:10,width:135,height:125}} onPress={()=>this.props.navigation.navigate('screenTwo')}>
            <Text style={{fontSize:20,color:'white'}}>
              View Attendance
              </Text>
              </TouchableOpacity>
    
    
              <TouchableOpacity style={{justifyContent:'center',backgroundColor:'#42558d',alignItems:'center',borderRadius:10,width:135,height:125}} onPress={()=>this.props.navigation.navigate('screenThree')}>
            <Text style={{fontSize:20,color:'white'}}>
              Add Attendance
              </Text>
              </TouchableOpacity>
    </View> 
    <View style={{marginTop:30,flexDirection:'row',justifyContent:'space-evenly'}}>
          
              <TouchableOpacity style={{justifyContent:'center',backgroundColor:'#42558d',alignItems:'center',borderRadius:10,width:135,height:125}} onPress={()=>this.props.navigation.navigate('screenFour')}>
            <Text style={{fontSize:20,color:'white'}}>
              E-leave
              </Text>
              </TouchableOpacity>
    
    
              <TouchableOpacity style={{justifyContent:'center',backgroundColor:'#42558d',alignItems:'center',borderRadius:10,width:135,height:125}} onPress={()=>this.props.navigation.navigate('screenFive')}>
            <Text style={{fontSize:20,color:'white'}}>
            Analtics
              </Text>
              </TouchableOpacity>
    </View> 
    
            </View>
        )
    }
}

const TabNavigator = createMaterialBottomTabNavigator({
  Home:{
    screen:Home,
    navigationOptions:{
      tabBarIcon: ({tintColor}) => (
        <View>
          <Icon iconStyle={{color:tintColor,}} name={'home'} size={25} />
        </View>
      ),
      tabBarLabel:'Home',
      activeColor: 'white',
      inactiveColor:'#19222b'
    }
  },
  Notification:{
    screen:Notification,
    navigationOptions:{
      tabBarIcon: ({tintColor}) => (
        <View>
          <Icon iconStyle={{color:tintColor}} name={'notifications'} size={25} />
        </View>
      ),
      tabBarLabel:'Notification',
      activeColor: 'white',
      inactiveColor:'#19222b'
    }
  },
  Profile:{
    screen:Profile,
    navigationOptions:{
      tabBarIcon: ({tintColor}) => (
        <View>
          <Icon iconStyle={{color:tintColor}} name={'person'} size={25} />
        </View>
      ),
      tabBarLabel:'Profile',
      activeColor: 'white',
      inactiveColor:'#19222b'
    }
  },
},
{
initialRouteName: 'Home',
barStyle:{backgroundColor:'#42558d'} 
}
);



export default createAppContainer(TabNavigator);

