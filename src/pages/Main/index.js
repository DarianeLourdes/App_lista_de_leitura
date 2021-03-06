import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, AsyncStorage } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts, Caveat_700Bold, Caveat_400Regular } from '@expo-google-fonts/caveat';

import { Feather } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';

export default function Main({ navigation }) {
  const [books, setBooks] = useState([]);

  useEffect(() => {
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
    navigation.navigate('Book', { book: book, isEdit: true });
  };

  async function onBookDelete(bookId) {
    const newBooks = books.filter(item => item.id !== bookId);

    await AsyncStorage.setItem('books', JSON.stringify(newBooks));
    setBooks(newBooks);
  };

  async function onBookRead(bookId) {
    const newBooks = books.map(item => {
      if (item.id === bookId) {
        item.read = !item.read;
      }

      return item;
    });

    await AsyncStorage.setItem('books', JSON.stringify(newBooks));
    setBooks(newBooks);
  };

  let [fontsLoaded] = useFonts({
    Caveat_700Bold,
    Caveat_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {

    return (
      <View style={styles.container}>
        <View style={styles.toolbox}>
          <Text style={styles.title}>Lista de Leitura</Text>
          <TouchableOpacity
            style={styles.addButton}
            onPress={onNewBook}
          >
            <Text>
              <Icon name="add" size={35} color="#fff" />
            </Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={books}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <View style={styles.itemsContainer}>
              <TouchableOpacity
                style={styles.itemButton}
                onPress={() => onBookRead(item.id)}
              >
                <Text style={[styles.itemText, item.read ? styles.itemRead : '']}>{item.title}</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.editButton}
                onPress={() => onBookEdit(item.id)}
              >
                <Feather name="edit" size={25} color="#2ecc71" />
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.deleteButton}
                onPress={() => onBookDelete(item.id)}
              >
                <Feather name="trash" size={25} color="#e74c3c" />
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    )
  }
}