import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: Constants.statusBarHeight + 20,
    backgroundColor: '#ecf0f1',
  },
  pageTitle: {
    textAlign: 'center',
    fontSize: 25,
    marginBottom: 30,
    color: '#3498db',
    fontFamily: 'Caveat_700Bold',
  },
  input: {
    fontSize: 16,
    borderBottomColor: '#95a5a6',
    borderBottomWidth: 1,
    marginBottom: 40,
  },
  cameraButton: {
    backgroundColor: '#95a5a6',
    borderRadius: 50,
    width: 55,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 20,
  },
  saveButton: {
    marginTop: 20,
    height: 50,
    marginHorizontal: 30,
    backgroundColor: '#3498db',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8, 
    marginBottom: 25,
  },
  saveButtonInvalid: {
    opacity: 0.5,
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  cancelButton: {
    alignSelf: 'center',
  },
  cancelButtonText: {
    color: '#95a5a6',
    fontSize: 18,
  },
})