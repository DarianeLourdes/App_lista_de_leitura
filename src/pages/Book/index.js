import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, AsyncStorage } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';

export default function Book({navigation}) {
  const [books, setBooks] = useState([])
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [photo, setPhoto] = useState();

  useEffect(()  => {
    AsyncStorage.getItem('books').then(data => {
      const book = JSON.parse(data);

      setBooks(book);
    });
    
  }, []);

  function isValid() {
    if ((title !== undefined) && (title !== '')) {
      return true;
    }

    return false;
  }

  async function onSave() {
    console.log(`Title ${title}`);
    console.log(`Description ${description}`);

    if (isValid()) {
      console.log('Valido!');

      const id = Math.random(5000).toString();
      const data = {
        id,
        title, 
        description,
        photo,
      };

      books.push(data);

      console.log(JSON.stringify(data));
      await AsyncStorage.setItem('books', JSON.stringify(books));

      navigation.navigate('Main');

    } else {
      console.log('Invalido!')
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Inclua seu novo livro...</Text>
      <TextInput 
        style={styles.input}
        placeholder="Titulo"
        value={title}
        onChangeText={(text) => {
          setTitle(text)
        }}
      />
      <TextInput
        style={styles.input}
        placeholder="Descrição"
        multiline={true}
        numberOfLines={4}
        value={description}
        onChangeText={(text) => {
          setDescription(text)
        }}
      />

      <TouchableOpacity style={styles.cameraButton}>
        <Icon name="photo-camera" size={20} color="#fff" />
      </TouchableOpacity>

      <TouchableOpacity 
        style={[styles.saveButton, (!isValid()) ? styles.saveButtonInvalid : '']}
        onPress={onSave}
      >
        <Text style={styles.saveButtonText}>Cadastrar</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.cancelButton}
        onPress={() => {navigation.navigate('Main')}}
      >
        <Text style={styles.cancelButtonText}>Cancelar</Text>
      </TouchableOpacity>
    </View>
  );
}