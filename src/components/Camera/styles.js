import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  camera: {
    flex: 1,
  },
  actionButtons: {
    paddingTop: Constants.statusBarHeight,
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 5,
    marginRight: 5,
    marginLeft: 5,
  },
  flipText: {
    fontSize: 18,
    color: '#fff',
  },
  takePictureButton: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 5,
  }
});