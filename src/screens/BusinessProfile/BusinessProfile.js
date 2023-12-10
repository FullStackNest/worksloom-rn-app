/* eslint-disable prettier/prettier */
import { SafeAreaView, Text } from 'react-native';
import React from 'react';
import Header from '../../components/Header/Header';

const BusinessProfile = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
    <Header navigation={navigation}/>
      <Text>BusinessProfile</Text>
    </SafeAreaView>
  );
};

export default BusinessProfile;
