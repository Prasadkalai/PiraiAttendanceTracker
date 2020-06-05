

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

import Home1 from './screen/Home1'
import Login from './screen/Login';
import First from './screen/First';
import Addattend from './screen/Addattend';
import Viewattend from './screen/Viewattend'
import Elogin from './Screen2/Elogin'
import Ehome1 from './Screen2/Ehome1'
 
class App extends Component {
  render() {
    return <AppContainer />
      
  }
}

const stacknav = createSwitchNavigator({
  STackscreenone: {
    screen: First,
  },

  STackscreenTwo: {
    screen: Login,
  },
  STackscreenThree:{
    screen: Home1 ,
  },
  STackscreenFour: {
    screen: Elogin,
  },
  STackscreenFive:{
    screen: Ehome1 ,
  },
},
{
  initialRouteName:'STackscreenone'
}
);

const AppContainer =createAppContainer(stacknav)

export default App;
 