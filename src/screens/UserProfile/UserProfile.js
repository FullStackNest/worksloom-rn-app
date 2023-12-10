/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
// import { Icon } from 'react-native-vector-icons';
import { Avatar, Button } from '@rneui/themed';
import {launchImageLibrary} from 'react-native-image-picker';
import Header from '../../components/Header/Header';
import Gallery from '../../components/Gallery/Gallery';
// import ImageView from "react-native-image-viewing";

const data = [
  {
    id: 1,
    uri: 'https://images.pexels.com/photos/7500307/pexels-photo-7500307.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load',
  },
  {
    id: 2,
    uri: 'https://images.pexels.com/photos/14726376/pexels-photo-14726376.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load',
  },
  {
    id: 3,
    uri: 'https://images.pexels.com/photos/13461077/pexels-photo-13461077.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load',
  },
  {
    id: 4,
    uri: 'https://images.pexels.com/photos/10313905/pexels-photo-10313905.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load',
  },
  {
    id: 5,
    uri: 'https://images.pexels.com/photos/7500307/pexels-photo-7500307.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load',
  },
  {
    id: 6,
    uri: 'https://images.pexels.com/photos/9074921/pexels-photo-9074921.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load',
  },
];

const UserProfile = ({navigation}) => {
  const [image, setImage] = useState(null);
  const [visible, setIsVisible] = useState(true);

  const chooseImage = async () => {
    let options = {
      saveToPhotos: true,
      mediaType: 'photo',
    };
    const res = await launchImageLibrary(options);
    setImage(res.assets[0].uri);
    };

  return (
    <ScrollView style={styles.container}>
        <Header navigation={navigation}/>
      <View style={styles.header}>
        <TouchableOpacity onPress={chooseImage}>
          <Avatar
            size="large"
            rounded
            source={
              // image ? { uri: image } : require('./assets/default_avatar.png')
              image ? { uri: image } : require('../../assets/icons/user.png')
            }
          />
        </TouchableOpacity>
        <View style={styles.userInfo}>
          <Text style={styles.username}>Krishna Kumar</Text>
          <Text style={styles.bio}>Interior Designer</Text>
          <Button title="Edit Profile" />
        </View>
      </View>
      <View style={styles.stats}>
        <View style={styles.stat}>
          <Text style={styles.statNumber}>5k</Text>
          <Text style={styles.statTitle}>Followers</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.statNumber}>10</Text>
          <Text style={styles.statTitle}>Skills</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.statNumber}>200</Text>
          <Text style={styles.statTitle}>Posts</Text>
        </View>
      </View>
      <View style={styles.feed}>
        {/* <ImageView
          images={data}
          imageIndex={0}
          visible={visible}
          onRequestClose={() => setIsVisible(false)}
        /> */}
        {data.length > 0 ? (
          <Gallery data={data} />
        ) : (
          <Text>Loading...</Text>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },
  userInfo: {
    marginLeft: 20,
  },
  username: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  bio: {
    fontSize: 16,
    color: '#999',
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 10,
  },
  stat: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  statTitle: {
    fontSize: 16,
    color: '#999',
  },
  feed: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
});

export default UserProfile;
