/* eslint-disable prettier/prettier */
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import React from 'react';

import { APP_THEME_COLOR, THEME_BACKGROUND_GREY, THEME_DARK_TEXT_ONE, THEME_LIGHT_GREY, THEME_MEDIUM_GREY } from '../../constants/constants';

const IMG1 = require('../../assets/icons/bag.png');
const IMG2 = require('../../assets/icons/offer.png');
const IMG3 = require('../../assets/icons/best-offer.png');
const IMG4 = require('../../assets/icons/discount-badge.png');
const IMG5 = require('../../assets/icons/user.png');
const IMAGES_DATA = [IMG1, IMG2, IMG3, IMG4, IMG5];

const OffersTile = ({item}) => {
  return (
    <View style={styles.parentCover}>
        <View style={styles.tileCover}>
            <Image
                source={IMAGES_DATA[item.offerType]}
                style={styles.offerTypeImage}
                resizeMode="cover"
            />
            <View style={styles.offerData}>
                <Text style={styles.nameText}>{item.name}</Text>
                <View>
                <Text numberOfLines={3} ellipsizeMode="tail" style={styles.descriptionText}>{item.offerDescription}</Text>
                </View>
                {/*  */}
                <Text style={styles.validityText}>Validity: {item.startDate} to {item.endDate}</Text>
            </View>
        </View>
    </View>
  );
};

export default OffersTile;

const styles = StyleSheet.create({
    parentCover:{
        marginVertical: 10,
        width: '100%',
        maxWidth: 350,
        borderRadius: 10,
        backgroundColor: THEME_BACKGROUND_GREY,
    },
    tileCover: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        padding: 5,
    },
    offerTypeImage: {
        width: 64,
        height: 64,
        borderRadius: 50,
    },
    offerData: {
        paddingHorizontal: 10,
    },
    nameText: {
        color: APP_THEME_COLOR,
        fontSize: 14,
    },
    descriptionText: {
        color: THEME_MEDIUM_GREY,
        fontSize: 12,
        lineHeight: 18,
        textAlign: 'left',
        // flexShrink: 1,
        flexWrap: 'wrap',
    },
    validityText: {
        color: THEME_LIGHT_GREY,
        fontSize: 12,
    },
});

