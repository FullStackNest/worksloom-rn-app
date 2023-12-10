/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {View, Text, SafeAreaView, FlatList, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const CustomDrawer = ({navigation}) => {

  const handleNavigationToScreens = (id) => {
    navigation.closeDrawer();
    if (id === 1) {
      navigation.navigate('FreelancerSignup', {
        itemId: 86,
        otherParam: 'anything you want here',
      });
    } else if (id === 2) {
      navigation.navigate('BusinessSignup');
    } else if (id === 3) {
      navigation.navigate('ActiveContracts');
    } else if (id === 4) {
      navigation.navigate('YourPosts');
    } else if (id === 5) {
      navigation.navigate('Faqs');
    } else if (id === 6) {
      navigation.navigate('AboutUs');
    }
  };

  const handleNavigationToViewUserProfile = () => {
    navigation.closeDrawer();
    navigation.navigate('UserProfile');
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{height: 5, width: '100%', backgroundColor: 'blue'}} />
      <TouchableOpacity
        onPress={() => {
          handleNavigationToViewUserProfile();
        }}
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'flex-start',
          margin: 10,
        }}
      >
        <Image
          source={require('./../assets/icons/user.png')}
          style={{ alignSelf: 'center', width: 64, height: 64}}
        />
        <Text
          style={{
            fontSize: 16,
            fontWeight: '700',
            alignSelf: 'center',
            marginLeft: 10,
          }}>
          Bittu Thakur
        </Text>
      </TouchableOpacity>
      <View style={{marginTop: 50, width: '100%'}}>
        <FlatList
          data={[
            {icon: require('../assets/icons/freelancer.png'), title: 'Signup Freelancer', id: 1},
            {icon: require('../assets/icons/business.png'), title: 'Signup Business', id: 2},
            {icon: require('../assets/icons/agreement.png'), title: 'Active Contracts', id: 3},
            {icon: require('../assets/icons/post.png'), title: 'Your Posts', id: 4},
            {icon: require('../assets/icons/faq.png'), title: 'F.A.Q.S', id: 5},
            {icon: require('../assets/images/logo.png'), title: 'About WorksLoom', id: 6},
          ]}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                style={{
                  width: '100%',
                  flexDirection: 'row',
                  alignItems: 'center',
                  height: 50,
                }}
                onPress={() => {
                  handleNavigationToScreens(item.id);
                }}>
                <Image
                  source={item.icon}
                  style={{marginLeft: 15, width: 24, height: 24}}
                />
                <Text style={{fontSize: 16, color: '#000', marginLeft: 15}}>
                  {item.title}
                </Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>
      <View
        style={{
          position: 'absolute',
          bottom: 20,
          alignSelf: 'center',
        }}
      >
        <TouchableOpacity
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            margin: 10,
            justifyContent: 'center',
          }}
        >
        <Image
          source={require('./../assets/icons/logout.png')}
          style={{ alignSelf: 'center', width: 20, height: 20}}
        />
        <Text
          style={{
            fontSize: 12,
            fontWeight: '700',
            alignSelf: 'center',
            color: 'red',
            marginLeft: 10,
          }}>
          Log Out
        </Text>
        </TouchableOpacity>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            margin: 10,
          }}
        >
          <Text
            style={{
              fontSize: 12,
              fontWeight: '700',
              alignSelf: 'center',
              color: '#2e63b8',
            }}>
            Version 1.0.0
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CustomDrawer;
