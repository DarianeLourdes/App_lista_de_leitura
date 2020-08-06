import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  toolbox:{
    flexDirection: 'row',
    marginBottom: 10,
  },
  title: {
    flex: 1,
    fontSize: 22,
    color: '#3498db',

  },
  addButton: {
    backgroundColor: '#3498db',
    borderRadius: 50,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemButton: {

  },
  itemText: {
    fontSize: 16,
  },
})