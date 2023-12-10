/* eslint-disable prettier/prettier */
import { View, Text, SafeAreaView } from 'react-native';
import React from 'react';
import Header from '../../components/Header/Header';

const FreelancerSignup = ({ route, navigation }) => {
    const { itemId, otherParam } = route.params;
    console.log( itemId, otherParam );
  return (
    <SafeAreaView style={{flex: 1}}>
      <Header navigation={navigation}/>
      <Text>FreelancerSignup</Text>
      <Text>itemId: {itemId}</Text>
      <Text>otherParam: {otherParam}</Text>
    </SafeAreaView>
  );
};

export default FreelancerSignup;
