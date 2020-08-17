import { StyleSheet } from 'react-native';
import Constants from 'expo-constants'

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingTop: Constants.statusBarHeight + 15,
    backgroundColor: '#feca57',
  },
  toolbox:{
    flexDirection: 'row',
    marginBottom: 10,
  },
  title: {
    flex: 1,
    fontSize: 35,
    color: '#3498db',

  },
  addButton: {
    backgroundColor: '#3498db',
    borderRadius: 50,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemsContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#7f8c8d',
  },
  itemButton: {
    flex: 1,
  },
  itemText: {
    fontSize: 26,
  },
  itemRead: {
    textDecorationLine: 'line-through',
    color: '#95a5a6',
  },
  editButton: {},
  deleteButton: {},
})