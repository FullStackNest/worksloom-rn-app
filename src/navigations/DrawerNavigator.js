/* eslint-disable prettier/prettier */
import {View, Text} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Main from './Main';
import CustomDrawer from './CustomDrawer';
import FreelancerSignup from '../screens/FreelancerSignup/FreelancerSignup';
import Faqs from '../screens/Faqs/Faqs';
import UserProfile from '../screens/UserProfile/UserProfile';
import Messages from '../screens/Messages/Messages';
import Notifications from '../screens/Notifications/Notifications';
import AboutUs from '../screens/AboutUs/AboutUs';
import BusinessSignup from '../screens/BusinessSignup/BusinessSignup';
import BusinessProfile from '../screens/BusinessProfile/BusinessProfile';
import ActiveContracts from '../screens/ActiveContracts/ActiveContracts';
import YourPosts from '../screens/YourPosts/YourPosts';

const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen
        name="Main"
        component={Main}
        options={{headerShown: false}}
      />
      <Drawer.Screen
          name="UserProfile"
          component={UserProfile}
          options={{headerShown: false}}
        />
        <Drawer.Screen
          name="FreelancerSignup"
          component={FreelancerSignup}
          options={{headerShown: false}}
        />
        <Drawer.Screen
          name="Faqs"
          component={Faqs}
          options={{headerShown: false}}
        />
        <Drawer.Screen
          name="Messages"
          component={Messages}
          options={{headerShown: false}}
        />
        <Drawer.Screen
          name="Notifications"
          component={Notifications}
          options={{headerShown: false}}
        />
        <Drawer.Screen
          name="AboutUs"
          component={AboutUs}
          options={{headerShown: false}}
        />
        <Drawer.Screen
          name="BusinessSignup"
          component={BusinessSignup}
          options={{headerShown: false}}
        />
        <Drawer.Screen
          name="BusinessProfile"
          component={BusinessProfile}
          options={{headerShown: false}}
        />
        <Drawer.Screen
          name="ActiveContracts"
          component={ActiveContracts}
          options={{headerShown: false}}
        />
        <Drawer.Screen
          name="YourPosts"
          component={YourPosts}
          options={{headerShown: false}}
        />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
