/* eslint-disable prettier/prettier */
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { Avatar } from '@rneui/themed';
import { APP_THEME_COLOR, THEME_DARK_TEXT_ONE, THEME_LIGHT_GREY, THEME_SLIGHT_BLUE } from '../../constants/constants';
import Modal from 'react-native-modal';

const PostTile = ({item}) => {
  const [openModal, setOpenModal] = useState(false);
  const toggleModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <View style={styles.cardCover}>
      <View style={styles.profileHeader}>
        <Avatar
          size={48}
          rounded
          source={{ uri: item.photoUrl }}
          title="BJ"
          containerStyle={styles.photoUrl}
        />
        <View>
          <Text style={styles.title}>{item.name}</Text>
          <Text style={styles.category}>{item.category}</Text>
          <Text style={styles.postedTime}>{item.postedTime}</Text>
        </View>
        <Text
          style={[styles.followText, [ item.isFollowing ? styles.following : styles.follow]]}
        >
          {item.isFollowing ? 'Following' : '+ Follow'}
        </Text>
          <TouchableOpacity
            style={{position: 'absolute', top: 0, right: 5}}
            onPress={toggleModal}
          >
            <Image
              source={require('../../assets/icons/more.png')}
              style={{width: 12, height: 18, tintColor: THEME_LIGHT_GREY}}
            />
          </TouchableOpacity>
      </View>
      <Text>{item.title}</Text>
      <FlatList
        data={item.images}
        horizontal
        // pagingEnabled
        showsHorizontalScrollIndicator={false}
        // eslint-disable-next-line no-shadow
        renderItem={({item, index}) => (
          <Image
            source={{
              uri: item.imgSrc,
            }}
            style={styles.image}
          />
        )}
      />
      <Modal
        animationInTiming={500}
        onBackButtonPress={() => {
          setOpenModal(false);
        }}
        onBackdropPress={() => {
          setOpenModal(false);
        }}
        style={{width: '100%', marginLeft: 0, marginBottom: 0, marginRight: 0}} isVisible={openModal}>
          <View style={{position:'absolute', bottom: 0, height: 200, backgroundColor: 'white', width: '100%'}}>
            <Text>{item.name}</Text>
            <Text>I am the modal content! where I am for {item.title}</Text>
          </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
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
    position: 'absolute',
    top: 0,
    right: 25,
  },
  following: {
    color: THEME_LIGHT_GREY,
    fontSize: 10,
  },
  follow: {
    color: APP_THEME_COLOR,
    fontSize: 12,
  },
  cardCover: {
    marginVertical: 5,
    width: '100%',
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#fcfcfc',
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
  postedTime: {
    color: THEME_SLIGHT_BLUE,
    fontSize: 10,
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


export default PostTile;
