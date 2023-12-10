/* eslint-disable prettier/prettier */
import { View, Image } from 'react-native';
import React, { useEffect } from 'react';

const Splash = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Parent');
    }, 2000);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <View style={{ flex: 1, alignSelf: 'center', justifyContent: 'center' }}>
      <Image style={{width:200, height:200}} source={require('../../assets/images/logo.png')} />
    </View>
  );
};

export default Splash;
