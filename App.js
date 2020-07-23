import React from 'react'
import {View, Text} from 'react-native'
import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'
import HomeScreenClass from './src/Screens/HomeScreenClass'
import HomeScreenFunction from './src/Screens/HomeScreenFunction'
import MainScreen from './src/Screens/MainScreen'
const navigator = createStackNavigator(
  {
      HomeClass:HomeScreenClass,
      HomeFunction:HomeScreenFunction,
      Main:MainScreen,

  },
  {
      initialRouteName:'Main',
      defaultNavigationOptions:{
        title:"imgprops",
      }
  }

)

export default createAppContainer(navigator)