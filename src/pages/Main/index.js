import React from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';

export default function Main({navigation}) {
  const data = [
    {
      id: '1',
      title: 'Código Limpo',
      anotations: 'Livro muito bom!',
      read: false,
      photo: null,
    },
    {
      id: '2',
      title: 'C Completo e Total',
      anotations: 'Livro muito bom!',
      read: false,
      photo: null,
    },
    {
      id: '3',
      title: 'A biblia do PHP',
      anotations: 'Livro muito bom!',
      read: false,
      photo: null,
    },
  ]

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
        data={data}
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