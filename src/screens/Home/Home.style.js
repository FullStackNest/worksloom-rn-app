/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';

export const HomeStyles = StyleSheet.create({
  modalview: {
    width: 200,
    height: 400,
    alignSelf: 'flex-end',
    position: 'absolute',
    bottom: 10,
  },
  inactive: {
    display: 'none',
  },
  active: {
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'flex-end',
    borderColor: 'blue',
  },
  container: {
    flex: 1,
  },
  imageView: {
    width: '100%',
    height: 200,
    borderRadius: 8,
  },
  flatStyle: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
    backgroundColor: '#FFFFFF',
    padding: 10,
    margin: 2,
  },
});
