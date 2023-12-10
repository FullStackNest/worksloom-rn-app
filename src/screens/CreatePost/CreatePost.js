/* eslint-disable prettier/prettier */
import { View, Text, StyleSheet, SafeAreaView, Image } from 'react-native';
import React, { useState } from 'react';
import Modal from 'react-native-modal';
import { Avatar, Chip, Divider  } from '@rneui/themed';
import { THEME_MEDIUM_GREY } from '../../constants/constants';

const DATA = [
  {icon: require('../../assets/icons/freelancer.png'), title: 'Add Photo', id: 1},
  {icon: require('../../assets/icons/business.png'), title: 'Add Video', id: 2},
  {icon: require('../../assets/icons/agreement.png'), title: 'Looking for services', id: 3},
  {icon: require('../../assets/icons/post.png'), title: 'Share Celebrations', id: 4},
  {icon: require('../../assets/icons/faq.png'), title: 'Your feelings & mood', id: 5},
  {icon: require('../../assets/images/logo.png'), title: 'Create Poll', id: 6},
];

const CreatePost = ({ route }) => {
  const { isModalOpen } =  route.params;
  const [openModal, setOpenModal] = useState(isModalOpen);

  console.log(openModal, isModalOpen);
  const toggleModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <SafeAreaView
      style={styles.container}
    >
      <View style={styles.profileHeader}>
        <Avatar
          size={48}
          rounded
          source={{ uri: 'https://images.pexels.com/photos/984858/pexels-photo-984858.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' }}
          title="BJ"
          containerStyle={styles.photoUrl}
        />
        <View>
          <Text style={styles.title}>Satyaprakash Sahoo</Text>
          {/* <Text style={styles.category}>{item.category}</Text>
          <Text style={styles.postedTime}>{item.postedTime}</Text> */}
        </View>
        <View>
          <Chip
            title="Create Post"
            type="outline"
            containerStyle={{ marginVertical: 15 }}
            onPress={toggleModal}
          />
        </View>
      </View>
      <Modal
        animationInTiming={500}
        onBackButtonPress={() => {
          setOpenModal(false);
        }}
        onBackdropPress={() => {
          setOpenModal(false);
        }}
        style={styles.bottomModal} isVisible={openModal}>
          <View style={styles.bottomModalItems}>
          <Divider inset={true}  width={5} color={THEME_MEDIUM_GREY} style={{width: 100, marginTop: 10, borderRadius: 5, alignSelf: 'center'}} insetType="middle" />
            {DATA.map((item, index) => (
              <View key={index} style={{display: 'flex', flexDirection: 'row', height: 30, marginTop: 10}}>
                <Image
                  source={item.icon}
                  style={{marginLeft: 15, width: 24, height: 24}}
                />
                <Text style={{fontSize: 16, color: THEME_MEDIUM_GREY, marginLeft: 15}}>
                  {item.title}
                </Text>
              </View>
            ))

            }
          </View>
      </Modal>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // marginBottom: 5,
  },
  profileHeader: {
    display: 'flex',
    flexDirection: 'row',
  },
  photoUrl: {
    backgroundColor: 'grey',
    marginRight: 10,
  },
  bottomModal: {
    width: '100%',
    marginLeft: 0,
    marginBottom: 0,
    marginRight: 0,
  },
  bottomModalItems: {
    position:'absolute',
    bottom: 0,
    height: 300,
    backgroundColor: 'white',
    width: '100%',
  },
});



export default CreatePost;
