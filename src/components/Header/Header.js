/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import SocialBox from '../SocialBox/SocialBox';
import {Overlay} from '@rneui/themed';

const Header = ({navigation}) => {
    const [socialBoxActive, setSocialBoxActive] = useState(false);

  const toggleOverlay = () => {
    setSocialBoxActive(!socialBoxActive);
  };

  return (
    // <View style={{flex: 1}}>
    <View
        style={{
          width: '100%',
          height: 50,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          elevation: 3,
          backgroundColor: '#2e63b8',
        }}>
        <View
          style={{
            width: '70%',
            height: 50,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            style={{marginLeft: 15}}
            onPress={() => {
              navigation.openDrawer();
            }}>
            <Image
              source={require('../../assets/icons/menu.png')}
              style={{width: 30, height: 30, tintColor: 'white'}}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={{marginRight: 10}}
          onPress={() => {
            navigation.navigate('Messages');
          }}>
          <Image
            source={require('../../assets/icons/chat.png')}
            style={{width: 25, height: 25, tintColor: 'white'}}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{marginRight: 10}}
          onPress={() => {
            navigation.navigate('Notifications');
          }}>
          <Image
            source={require('../../assets/icons/notification.png')}
            style={{width: 25, height: 25, tintColor: 'white'}}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={{marginRight: 10}}
          onPress={() => {
            toggleOverlay();
          }}>
          <Image
            source={require('../../assets/icons/more.png')}
            style={{width: 25, height: 25, tintColor: 'white'}}
          />
        </TouchableOpacity>
        <Overlay
            overlayStyle={styles.modalview}
            isVisible={socialBoxActive}
            onBackdropPress={toggleOverlay}>
            <SocialBox />
        </Overlay>
      </View>
  );
};


const styles = StyleSheet.create({
    modalview: {
      width: 130,
      height: 220,
      alignSelf: 'flex-end',
      position: 'absolute',
      top: 50,
    },
  });

export default Header;
