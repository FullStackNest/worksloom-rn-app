/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
// import ImageView from 'react-native-image-view';
// import ImageView from 'react-native-image-viewing';

const GalleryItem = ({ source }) => {
    const [isVisible, setIsVisible] = useState(true);
    console.log(source);
    const { id, uri } = source;
    // const images = [
    //     {
    //         source: {
    //             uri: uri,
    //         },
    //         title: 'Image',
    //         width: 806,
    //         height: 720,
    //         id: id,
    //     },
    // ];

    return (
        <View>
            <TouchableOpacity onPress={() => setIsVisible(true)}>
                <View style={styles.container}>
                    <Image style={styles.image} source={{ uri: uri }} />
                </View>
            </TouchableOpacity>
            {/* <ImageView
                images={source}
                imageIndex={0}
                isVisible={isVisible}
                onClose={() => setIsVisible(false)}
            /> */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 5,
        borderRadius: 10,
        overflow: 'hidden',
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
        width: 100,
        height: 100,
    },
});

export default GalleryItem;
