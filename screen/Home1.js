

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

import Addattend from './Addattend';
import Viewattend from './Viewattend'
import Home from './Home'
import Analtics from './Analtics'
import Eleave from './E-leave'

class Home1 extends Component {
  render() {
    return <AppContainer />
      
  }
}

const appnav = createStackNavigator({
    screenOne: {
    screen: Home,
    navigationOptions:{
        header: null
    }
    
       
  },

  screenTwo: {
    screen: Viewattend,
    
    navigationOptions:{
        header: null
    }
  },
  screenThree:{
    screen: Addattend ,
    
    navigationOptions:{
        header: null
    }
  },
  screenFour:{
    screen: Eleave,
    
    navigationOptions:{
        header: null
    }
  },
  screenFive:{
    screen: Analtics,
    
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

export default Home1;
 