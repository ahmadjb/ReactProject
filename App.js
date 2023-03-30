import  React from 'react';
import{StackNavigator}from 'react-navigation';
//import * as firebase from 'firebase';
import { StyleSheet, View,Text } from 'react-native';
import Login from './src/component/Login'; 

import Vehicle from './src/component/Vehicle';
import Station from './src/component/Station';
import Map from './src/component/Map';
//import CameraScreen from'./component/CameraScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import MainContianer from './navigation/mainContainer';

/*var config = {
    apiKey: "AIzaSyCP3foqdkk2hd_3qAyc6-_FyPchcVeT70M",
    authDomain: "graduation-app-41c23.firebaseapp.com",
    databaseURL: "https://graduation-app-41c23.firebaseio.com",
    projectId: "graduation-app-41c23",
    storageBucket: "graduation-app-41c23.appspot.com",
    messagingSenderId: "366943644461",
    appId: "1:366943644461:web:862a205cf7794490b4c1a4",
    measurementId: "G-NK1XHHN5QN"
  };
  firebase.initializeApp(config);*/
 
const MainNavigator = createStackNavigator({
  
  //Login: { screen: Login },
  Login: { screen: Login },
  
  Vehicle: { screen: MainContianer },
  Station: { screen: Station },
  Map: { screen: Map },
  //Adminmain: { screen: MainContianer },
  //CameraScreen:{screen: CameraScreen},
 });
 const AppContainer = createAppContainer(MainNavigator);
 export default AppContainer;