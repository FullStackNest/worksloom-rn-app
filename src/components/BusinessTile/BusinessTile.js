/* eslint-disable prettier/prettier */
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import React from 'react';
import { Avatar } from '@rneui/themed';
import { APP_THEME_COLOR, THEME_BACKGROUND_GREY, THEME_DARK_TEXT_ONE, THEME_LIGHT_GREY, THEME_MEDIUM_GREY } from '../../constants/constants';


const BusinessTile = ({item}) => {
  return (
    <View style={styles.parentCover}>
        <View style={styles.profileContainer}>
            <Image
                source={{ uri: item.backgroundUrl }}
                style={styles.backgroundImage}
                resizeMode="cover"
            />
            <View style={styles.profileImageContainer}>
                <Avatar
                    size={64}
                    rounded
                    source={{ uri: item.photoUrl }}
                    title="BJ"
                    containerStyle={styles.profileImage}
                />
            </View>
        </View>
        <TouchableOpacity
            style={{position: 'absolute', top: 5, right: 5}}
        >
            <Image
                source={require('../../assets/icons/more.png')}
                style={{width: 12, height: 18, tintColor: THEME_DARK_TEXT_ONE}}
            />
        </TouchableOpacity>
        <View style={styles.cardCover}>
            <View style={styles.profileHeader}>
                <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                    <View style={{marginTop: 20}}>
                        <View style={{display: 'flex', flexDirection: 'row', alignContent: 'flex-start'}}>
                            <Text style={styles.title}>{item.name}</Text>
                            {item.isProMember && (
                                <Image
                                    source={require('../../assets/icons/verify.png')}
                                    style={{width: 20, height: 20, marginHorizontal: 5}}
                                />
                            )}
                            {item.isFollowing && (
                                <Text
                                    style={styles.following}
                                >
                                    {item.isFollowing && ': Following'}
                                </Text>
                            )}
                        </View>
                        <View style={{display: 'flex', flexDirection: 'row', alignContent: 'flex-start'}}>
                        <Image
                            source={require('../../assets/icons/picker.png')}
                            style={{width: 15, height: 16, marginRight: 1, marginLeft: -2,}}
                        />
                        <Text style={[styles.category, { marginRight: 5}]}>{item.location},</Text>
                        <Text style={styles.category}>{item.category}</Text>
                        </View>
                        <Text style={styles.category2}>{item.numberOfFollowers} Followers</Text>
                    </View>
                    <View style={{marginTop: 10}}>

                        {!item.isFollowing && (
                            <Text
                            style={[styles.followText]}
                            >
                            {!item.isFollowing && '+ Follow'}
                            </Text>
                        )}
                            {(item.isMessageAllowed && item.isFollowing) && (
                                <View style={styles.communication}>
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
                                </View>
                            )}
                    </View>
                </View>
            </View>
            <View style={{display: 'flex', flexDirection: 'column'}}>
                <Text>
                    {item.description}
                </Text>
            </View>
        </View>
    </View>
  );
};


const styles = StyleSheet.create({
    parentCover:{
        marginVertical: 10,
        width: '100%',
        borderRadius: 10,
        backgroundColor: THEME_BACKGROUND_GREY,
    },
    cardCover: {
        padding: 10,
    },
    profileContainer: {
        width: '100%',
        height: 80,
        overflow: 'visible',
        position: 'relative',
      },
      backgroundImage: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 50,
        width: '100%',
        height: '100%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
      },
      profileImageContainer: {
        position: 'absolute',
        bottom: -25,
        left: 20,
        right: 0,
        paddingBottom: 0,
      },
      profileImage: {
        width: 64,
        height: 64,
        borderRadius: 32,
        borderWidth: 2,
        borderColor: 'white',
        zIndex: 2,
      },
    followText: {
      paddingHorizontal: 10,
      fontWeight: 700,
      height: 30,
      width: 80,
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
      paddingLeft: 3,
      paddingTop: 3,
      fontWeight: 700,
      color: THEME_LIGHT_GREY,
      fontSize: 10,
    },
    communication: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-end',
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

export default BusinessTile;
