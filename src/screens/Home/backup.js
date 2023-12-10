/* eslint-disable prettier/prettier */
import {View, Text, TouchableOpacity} from 'react-native';
import React, { useState } from 'react';
import Modal from 'react-native-modal';

const Home = () => {
  const [openModal, setOpenModal] = useState(false);
  const toggleModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home</Text>
      <TouchableOpacity onPress={toggleModal}>
        <Text>Open</Text>
      </TouchableOpacity>
      <Modal
        animationInTiming={500}
        onBackButtonPress={() => {
          setOpenModal(false);
        }}
        onBackdropPress={() => {
          setOpenModal(false);
        }}
        style={{width: '100%', marginLeft: 0, marginBottom: 0, marginRight: 0}} isVisible={openModal}>
        {/* <View style={{ flex: 1, position: 'absolute', top: 0, }}> */}
          <View style={{position:'absolute', bottom: 0, height: 200, backgroundColor: 'white', width: '100%'}}>
            <Text>I am the modal content!</Text>
          </View>
        {/* </View> */}
      </Modal>
    </View>
  );
};

export default Home;
