/* eslint-disable prettier/prettier */
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import React from 'react';
import { Avatar } from '@rneui/themed';
import { APP_THEME_COLOR, THEME_DARK_TEXT_ONE, THEME_LIGHT_GREY, THEME_MEDIUM_GREY } from '../../constants/constants';


const FreelancerTile = ({item}) => {
  return (
    <View style={styles.cardCover}>
      <View style={styles.profileHeader}>
        <Avatar
            size={64}
            rounded
            source={{ uri: item.photoUrl }}
            title="BJ"
            containerStyle={styles.photoUrl}
        />
        <View>
            <View style={{display: 'flex', flexDirection: 'row', alignContent: 'flex-start'}}>
              <Text style={styles.title}>{item.name}</Text>
              {
                item.isProMember && <Image
                  source={require('../../assets/icons/verify.png')}
                  style={{width: 20, height: 20, marginHorizontal: 5}}
                />
              }
            </View>
            <View style={{display: 'flex', flexDirection: 'row', alignContent: 'flex-start'}}>
              <Image
                  source={require('../../assets/icons/picker.png')}
                  style={{width: 15, height: 16, marginRight: 1,}}
              />
              <Text style={[styles.category, { marginRight: 5, }]}>{item.location},</Text>
              <Text style={styles.category}>{item.category}</Text>
            </View>
            <Text style={styles.category2}>{item.numberOfFollowers} Followers</Text>
        </View>
        <Text
            style={styles.following}
        >
        {item.isFollowing && 'Following'}
        </Text>
        <TouchableOpacity
            style={{position: 'absolute', top: 0, right: 5}}
        >
            <Image
                source={require('../../assets/icons/more.png')}
                style={{width: 12, height: 18, tintColor: THEME_LIGHT_GREY}}
            />
        </TouchableOpacity>
      </View>
      <View style={{display: 'flex', flexDirection: 'column'}}>
        <Text>
            {item.description}
        </Text>
        <View style={styles.communication}>
          {item.isMessageAllowed && (
            <View style={styles.message}>
              <Image
                  source={require('../../assets/icons/comments.png')}
                  style={{width: 18, height: 18, marginHorizontal: 5,}}
              />
              <Text
                style={[styles.category2]}
              >
              Message
              </Text>
            </View>
          )}
          <View style={styles.message}>
            <Image
                source={require('../../assets/icons/businessman.png')}
                style={{width: 18, height: 18, marginHorizontal: 5,}}
            />
            <Text
              style={[styles.category2]}
            >
            Hire
            </Text>
          </View>
          {!item.isFollowing && (
            <Text
              style={[styles.followText]}
            >
            {!item.isFollowing && '+ Follow'}
            </Text>
          )}
        </View>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  cardCover: {
    marginVertical: 5,
    width: '100%',
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#fcfcfc',
  },
    profileHeader: {
      display: 'flex',
      flexDirection: 'row',
    },
    photoUrl: {
      backgroundColor: 'grey',
      marginRight: 10,
    },
    followText: {
      paddingHorizontal: 10,
      fontWeight: 700,
      height: 30,
      width: 80,
      marginTop: 5,
      display: 'flex',
      alignSelf: 'flex-end',
      color: APP_THEME_COLOR,
      fontSize: 14,
      borderWidth: 1,
      paddingTop: 5,
      borderColor: APP_THEME_COLOR,
      borderRadius: 20,
    },
    following: {
      paddingHorizontal: 10,
      fontWeight: 700,
      height: 30,
      position: 'absolute',
      top: 0,
      right: 25,
      color: THEME_LIGHT_GREY,
      fontSize: 10,
    },
    communication: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-end',
      // alignContent: 'flex-end',
      // backgroundColor: 'red',
    },
    message: {
      display: 'flex',
      flexDirection: 'row',
      height: 30,
      alignItems: 'center',
      marginHorizontal: 5,
      paddingHorizontal: 5,
      borderWidth: 1,
      // paddingTop: 5,
      borderColor: THEME_LIGHT_GREY,
      borderRadius: 20,
    },
    title: {
      fontSize: 14,
      color: THEME_DARK_TEXT_ONE,
      fontWeight: 600,
    },
    category: {
      color: THEME_LIGHT_GREY,
      fontSize: 12,
    },
    category2: {
        color: THEME_MEDIUM_GREY,
        fontSize: 12,
      },
    image: {
      width: 320,
      height: 400,
      marginRight: 5,
      marginTop: 5,
      alignSelf: 'center',
      borderRadius: 10,
    },
  });

export default FreelancerTile;
