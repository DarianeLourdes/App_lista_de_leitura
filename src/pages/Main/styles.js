import { StyleSheet } from 'react-native';
import Constants from 'expo-constants'

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingTop: Constants.statusBarHeight + 20,
    backgroundColor: '#dfe6e9',
    
  },
  toolbox:{
    flexDirection: 'row',
    marginBottom: 10,
  },
  title: {
    flex: 1,
    fontSize: 30,
    color: '#3498db',
    fontFamily: 'Caveat_700Bold', 
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
    borderBottomColor: '#b2bec3',
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