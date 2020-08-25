import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: Constants.statusBarHeight + 20,
    backgroundColor: '#dfe6e9',
  },
  pageTitle: {
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 20,
    color: '#3498db',
    fontWeight: 'bold',
  },
  input: {
    fontSize: 16,
    borderBottomColor: '#fdcb6e',
    borderBottomWidth: 1,
    marginBottom: 40,
  },
  cameraButton: {
    backgroundColor: '#f39c12',
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
    backgroundColor: '#f39c12',
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