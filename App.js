import React from 'react'
import { Image } from 'react-native'
import {
  createBottomTabNavigator,
  createStackNavigator,
  createAppContainer
} from 'react-navigation';

import HomeScreen from './src/views/Home'
import DetailScreem from './src/views/Detail'
import IntroductionScreen from './src/views/Introduction'
import AboutScreen from './src/views/About'

const defaultNavigationOptions = {
  headerStyle: {
    backgroundColor: '#2196f3',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
  headerBackTitle: '返回'
}

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    Detail: DetailScreem
  },
  {
    defaultNavigationOptions
  }
);

const IntroductionStack = createStackNavigator(
  {
    Introduction: IntroductionScreen
  },
  {
    defaultNavigationOptions
  }
);

const AboutStack = createStackNavigator(
  {
    About: AboutScreen
  },
  {
    defaultNavigationOptions
  }
);

export default createAppContainer(
  createBottomTabNavigator(
    {
      Home: {
        screen: HomeStack,
        navigationOptions: ({ navigation }) => ({
          tabBarLabel: '首页',
          tabBarIcon: ({ tintColor, focused }) => (
            focused ?
              <Image source={require('./src/assets/images/tabBar/home_active.png')} style={{ width: 22, height: 22 }} /> :
              <Image source={require('./src/assets/images/tabBar/home.png')} style={{ width: 22, height: 22 }} />
          )
        })
      },
      Introduction: {
        screen: IntroductionStack,
        navigationOptions: {
          tabBarLabel: '新手入门',
          tabBarIcon: ({ tintColor, focused }) => (
            focused ?
              <Image source={require('./src/assets/images/tabBar/introduction_active.png')} style={{ width: 22, height: 22 }} /> :
              <Image source={require('./src/assets/images/tabBar/introduction.png')} style={{ width: 22, height: 22 }} />
          )
        }
      },
      About: {
        screen: AboutStack,
        navigationOptions: {
          tabBarLabel: '关于',
          tabBarIcon: ({ tintColor, focused }) => (
            focused ?
              <Image source={require('./src/assets/images/tabBar/about_active.png')} style={{ width: 22, height: 22 }} /> :
              <Image source={require('./src/assets/images/tabBar/about.png')} style={{ width: 22, height: 22 }} />
          )
        }
      }
    },
    {
      tabBarOptions: {
        labelStyle: {
          fontSize: 12
        }
      }
    }
  )
);
