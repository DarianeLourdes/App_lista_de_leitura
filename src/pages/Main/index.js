import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, AsyncStorage } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';

export default function Main({navigation}) {
  const [books, setBooks] = useState([]);

  useEffect(()  => {
    AsyncStorage.getItem('books').then(data => {
      const book = JSON.parse(data);

      console.log("data", data)
      setBooks([book]);
    });
    
  }, []);


  return (
    <View style={styles.container}>
      <View style={styles.toolbox}>
        <Text style={styles.title}>Lista de Leitura</Text>
        <TouchableOpacity 
          style={styles.addButton}
          onPress={() => {navigation.navigate('Book')}}
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
          <TouchableOpacity style={styles.itemButton}>
            <Text style={styles.itemText}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}