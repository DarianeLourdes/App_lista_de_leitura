import React from 'react';
import { ImageBackground, View } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';

export default function Photo({ photo, onDeletePhoto, onClosePicture }) {
  return (
    <ImageBackground 
      source={{uri: photo}}
      style={styles.imagePreview}
    >
      <View style={styles.actionButtons}>
        <Icon 
          name="delete" 
          size={50} 
          color='#fff'
          onPress={() => { onDeletePhoto(null)
          }}
        />

        <Icon 
          name="check" 
          size={50} 
          color="#fff"
          onPress={onClosePicture}
        /> 
      </View>
    </ImageBackground>
  )
};