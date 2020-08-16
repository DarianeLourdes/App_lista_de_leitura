import { StyleSheet } from 'react-native';
import Contants from 'expo-constants';

export default StyleSheet.create({
  imagePreview: {
    width: '100%',
    height: '100%',
  },
  actionButtons: {
    paddingTop: Contants.statusBarHeight,
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginRight: 5,
    marginLeft: 5,
  },
});