import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, AsyncStorage, Modal } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Photo from '../../components/Photo';
import Camera from '../../components/Camera';

import styles from './styles';

export default function Book({ navigation }) {
  const book = navigation.getParam("book", {
    title: '',
    description: '',
    read: false,
    photo: ''
  });

  const isEdit = navigation.getParam("isEdit", false);

  const [books, setBooks] = useState([])
  const [title, setTitle] = useState(book.title);
  const [description, setDescription] = useState(book.description);
  const [read, setRead] = useState(book.read);
  const [photo, setPhoto] = useState(book.photo);
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
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
    if (isValid()) {
      if (isEdit) {

        let newBooks = books;

        newBooks.map(item => {
          if(item.id === book.id) {
            item.title = title;
            item.description = description;
            item.read = read;
            item.photo = photo;
          }
          return item;
        });

        console.log('books', books);
        console.log('newBooks', newBooks);

        await AsyncStorage.setItem('books', JSON.stringify(newBooks));
      } else {
        const id = Math.random(5000).toString();
        const data = {
          id,
          title,
          description,
          photo,
        };

        books.push(data);
        await AsyncStorage.setItem('books', JSON.stringify(books));
      }


      navigation.navigate('Main');
    } else {
      console.log('Invalido!')
    }
  };

  const onCloseModal = () => setIsModalVisible(false); 

  const onChangePhoto = (newPhoto) => setPhoto(newPhoto);

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

      <TouchableOpacity 
        style={styles.cameraButton}
        onPress={() => {
          setIsModalVisible(true)
        }}
      >
        <Icon name="photo-camera" size={20} color="#fff" />
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.saveButton, (!isValid()) ? styles.saveButtonInvalid : '']}
        onPress={onSave}
      >
        <Text style={styles.saveButtonText}>{isEdit ? 'Atualizar' : 'Cadastrar'}</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.cancelButton}
        onPress={() => { navigation.navigate('Main') }}
      >
        <Text style={styles.cancelButtonText}>Cancelar</Text>
      </TouchableOpacity>

      <Modal
        animationType='slide'
        visible={isModalVisible}
      >
        {
          photo ? (
            <Photo 
              photo={photo} 
              onDeletePhoto={onChangePhoto}
              onClosePicture={onCloseModal}
            />
          ) : (
            <Camera onCloseCamera={onCloseModal} onTakePicture={onChangePhoto}/>
          )
        }

      </Modal>
    </View>
  );
}