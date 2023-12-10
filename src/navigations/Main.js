/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {
  StatusBar,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import BottomNavigator from './BottomNavigator';
import Header from '../components/Header/Header';
// import * as Animatable from 'react-native-animatable';

const Main = ({navigation}) => {

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar backgroundColor="#2e63b8" />
      <Header navigation={navigation}/>
      <BottomNavigator />
    </SafeAreaView>
  );
};

export default Main;
