import { StyleSheet } from 'react-native';
import Constants from 'expo-constants'

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: Constants.statusBarHeight + 20,
    backgroundColor: '#ecf0f1',
  },
  toolbox:{
    flexDirection: 'row',
    marginBottom: 30,
  },
  title: {
    flex: 1,
    fontSize: 40,
    color: '#3498db',
    fontFamily: 'Caveat_700Bold', 
  },
  addButton: {
    backgroundColor: '#3498db',
    borderRadius: 50,
    width: 42,
    height: 42,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemsContainer: {
    flexDirection: 'row',
  },
  itemButton: {
    flex: 1,
  },
  itemText: {
    fontSize: 24,
    fontFamily: 'Caveat_400Regular',

  },
  itemRead: {
    textDecorationLine: 'line-through',
    color: '#95a5a6',
  },
  editButton: {},
  deleteButton: {},
})