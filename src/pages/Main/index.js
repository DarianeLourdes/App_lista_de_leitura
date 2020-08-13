import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, AsyncStorage } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';

export default function Main({navigation}) {
  const [books, setBooks] = useState([]);

  useEffect(()  => {
    AsyncStorage.getItem('books').then(data => {
      const book = JSON.parse(data);

      setBooks(book);
    });
  }, []);

  function onNewBook() {
    navigation.navigate('Book')
  }

  function onBookEdit(bookId) {
    const book = books.find(item => item.id === bookId)
    navigation.navigate('Book', {book: book, isEdit: true});
  };

  async function onBookDelete(bookId) {
    const newBooks = books.filter(item => item.id !== bookId);

    await AsyncStorage.setItem('books', newBooks);
    setBooks(newBooks);
  };


  return (
    <View style={styles.container}>
      <View style={styles.toolbox}>
        <Text style={styles.title}>Lista de Leitura</Text>
        <TouchableOpacity 
          style={styles.addButton}
          onPress={onNewBook}
        >
          <Text>
            <Icon name="add" size={22} color="#fff" />
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={books}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemsContainer}>
              <TouchableOpacity style={styles.itemButton}>
              <Text style={styles.itemText}>{item.title}</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.editButton}
              onPress={() => onBookEdit(item.id)}
            >
              <Icon name="create" size={22} color="#2ecc71" />
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.deleteButton}
              onPress={() => onBookDelete(item.id)}
            >
              <Icon name="delete" size={22} color="#e74c3c" />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  )
}