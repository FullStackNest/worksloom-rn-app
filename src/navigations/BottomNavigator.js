/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import { Image} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home/Home';
import Businesses from '../screens/Businesses/Businesses'; // @Screen/Businesses/Businesses
import CreatePost from '../screens/CreatePost/CreatePost';
import Freelancers from '../screens/Freelancers/Freelancers';
import Offers from '../screens/Offers/Offers';
import { THEME_EXTRA_LIGHT_BLUE } from '../constants/constants';

const Bottom = createBottomTabNavigator();
const BottomNavigator = () => {
  return (
    <Bottom.Navigator
    screenOptions={({ route }) => ({
      tabBarActiveBackgroundColor: THEME_EXTRA_LIGHT_BLUE,
    })}
    >
      <Bottom.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: tabInfo => {
            return (
              <Image
                source={require('./../assets/icons/home.png')}
                style={{
                  width: 20,
                  height: 20,
                  opacity: tabInfo.focused ? 1 : 0.5,
                  // tintColor: tabInfo.focused ? '#2e63b8' : 'black',
                }}
              />
            );
          },
        }}
      />
      <Bottom.Screen
        name="Businesses"
        component={Businesses}
        options={{
          headerShown: false,
          tabBarIcon: tabInfo => {
            return (
              <Image
                source={require('./../assets/icons/business.png')}
                style={{
                  width: 20,
                  height: 20,
                  opacity: tabInfo.focused ? 1 : 0.5,
                }}
              />
            );
          },
        }}
      />
      <Bottom.Screen
        name="Post"
        component={CreatePost}
        initialParams={{ isModalOpen: true, prop2: 'value2' }}
        options={{
          headerShown: false,
          tabBarIcon: tabInfo => {
            return (
              <Image
                source={require('./../assets/icons/add.png')}
                style={{
                  width: 28,
                  height: 28,
                  opacity: tabInfo.focused ? 1 : 0.5,
                }}
              />
            );
          },
        }}
      />
      <Bottom.Screen
        name="Freelancers"
        component={Freelancers}
        options={{
          headerShown: false,
          tabBarIcon: tabInfo => {
            return (
              <Image
                source={require('./../assets/icons/freelancer.png')}
                style={{
                  width: 20,
                  height: 20,
                  opacity: tabInfo.focused ? 1 : 0.5,
                }}
              />
            );
          },
        }}
      />
      <Bottom.Screen
        name="Offers"
        component={Offers}
        options={{
          headerShown: false,
          tabBarIcon: tabInfo => {
            return (
              <Image
                source={require('./../assets/icons/discount.png')}
                style={{
                  width: 20,
                  height: 20,
                  opacity: tabInfo.focused ? 1 : 0.5,
                }}
              />
            );
          },
        }}
      />
    </Bottom.Navigator>
  );
};

export default BottomNavigator;
