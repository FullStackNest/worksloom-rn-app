/* eslint-disable prettier/prettier */
import { SafeAreaView, Text } from 'react-native';
import React from 'react';
import Header from '../../components/Header/Header';

const Messages = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
        <Header navigation={navigation}/>
      <Text>Messages</Text>
    </SafeAreaView>
  );
};

export default Messages;
