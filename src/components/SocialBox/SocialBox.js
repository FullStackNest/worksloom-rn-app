/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import { Text, ScrollView, Image, TouchableOpacity, Linking, Alert } from 'react-native';
import React from 'react';

const SocialBox = () => {

  const handleOpenUrl = async (url) => {
    const isSupported = await Linking.canOpenURL(url);
    if (isSupported) {
      await Linking.openURL(url);
    } else {
      Alert.alert('Url may be invalid or doesn\'t exists');
    }
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
      <TouchableOpacity
        onPress={() => {
          handleOpenUrl('https://www.youtube.com/VanillaScripts');
        }}
        style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            marginBottom:5,
          }}
      >
        <Image
          source={require('../../assets/icons/youtube.png')}
          style={{
            width: 20,
            height: 20,
            marginRight: 10,
          }}
        />
        <Text>Subscribe</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          alert('Insta')
        }}
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
          marginTop: 5,
          alignItems: 'center',
          marginBottom:5,
        }}
      >
        <Image
          source={require('../../assets/icons/instagram.png')}
          style={{
            width: 20,
            height: 20,
            marginRight: 10,
          }}
        />
        <Text>Follow</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          alert('facebook')
        }}
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
          marginTop: 5,
          alignItems: 'center',
          marginBottom:5,
        }}
      >
        <Image
          source={require('../../assets/icons/facebook.png')}
          style={{
            width: 20,
            height: 20,
            marginRight: 10,
          }}
        />
        <Text>Like</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          alert('linkedin')
        }}
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
          marginTop: 5,
          alignItems: 'center',
          marginBottom:5,
        }}
      >
        <Image
          source={require('../../assets/icons/linkedin.png')}
          style={{
            width: 20,
            height: 20,
            marginRight: 10,
          }}
        />
        <Text>Connect</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          alert('twitter')
        }}
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
          marginTop: 5,
          alignItems: 'center',
          marginBottom:5,
        }}
      >
        <Image
          source={require('../../assets/icons/twitter.png')}
          style={{
            width: 20,
            height: 20,
            marginRight: 10,
          }}
        />
        <Text>Tweet</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          alert('gmail')
        }}
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
          marginTop: 5,
          alignItems: 'center',
          marginBottom:5,
        }}
      >
        <Image
          source={require('../../assets/icons/gmail.png')}
          style={{
            width: 20,
            height: 20,
            marginRight: 10,
          }}
        />
        <Text>Query</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          alert('playstore')
        }}
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
          marginTop: 5,
          alignItems: 'center',
        }}
      >
        <Image
          source={require('../../assets/icons/playstore.png')}
          style={{
            width: 20,
            height: 20,
            marginRight: 10,
          }}
        />
        <Text>Feedback</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default SocialBox;
