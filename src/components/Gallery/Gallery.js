/* eslint-disable prettier/prettier */
import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import GalleryItem from '../GalleryItem/GalleryItem';

const Gallery = ({ data }) => {
  const renderItem = ({ item }) => {
    return <GalleryItem source={item} />;
  };

  return (
    <View style={styles.wrapper}>
        <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item}
            numColumns={3}
            contentContainerStyle={styles.container}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    flexGrow: 1,
    alignItems: 'center',
  },
});

export default Gallery;
