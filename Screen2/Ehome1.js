

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {createSwitchNavigator,createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Eaddattend from './Eaddattend';
import Eviewattend from './Eviewattend'
import Ehome from './Ehome'
import Addemployee from './Addemployee'
import Deleteemployee from './Deleteemployee'
import App from '../App'
class Ehome1 extends Component {
  render() {
    return <AppContainer />
      
  }
}

const appnav = createStackNavigator({
    screenOne: {
    screen: Ehome,
    navigationOptions:{
        header: null
    }
    
       
  },

  screenTwo: {
    screen: Eviewattend,
    
    navigationOptions:{
        header: null
    }
  },
  screenThree:{
    screen: Eaddattend ,
    
    navigationOptions:{
        header: null
    }
  },
  screenFour:{
    screen: Eaddattend ,
    
    navigationOptions:{
        header: null
    }
  },
  screenFive:{
    screen: Addemployee ,
    
    navigationOptions:{
        header: null
    }
  },
  screenSix:{
    screen: Deleteemployee ,
    
    navigationOptions:{
        header: null
    }
  },
  
},
{
    initialRouteName:'screenOne'
  }
);

const AppContainer =createAppContainer(appnav)

export default Ehome1;
 