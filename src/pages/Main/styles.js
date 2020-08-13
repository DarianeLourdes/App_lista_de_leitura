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
  itemsContainer: {
    flexDirection: 'row',
  },
  itemButton: {
    flex: 1,
  },
  itemText: {
    fontSize: 16,
  },
  itemRead: {
    textDecorationLine: 'line-through',
    color: '#95a5a6',
  },
  editButton: {},
  deleteButton: {},
})