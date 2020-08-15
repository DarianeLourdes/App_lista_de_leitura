import React, { useState, useEffect } from 'react';
import { Alert, View, TouchableOpacity, Text } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { Camera as ExpoCamera }  from 'expo-camera';

import styles from './styles';

export default function Camera({ onCloseCamera, onTakePicture }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(ExpoCamera.Constants.Type.back);
  const [cameta, setCamera] = useState();

  useEffect(() => {
    (async () => {
      const { status } = await ExpoCamera.requestPermissionsAsync();
      setHasPermission(status === 'grated');
    })();
  }, []);

  const onFlipPress = () => {
    setType(
      type === ExpoCamera.Constants.Type.back
        ? ExpoCamera.Constants.Type.front
        : ExpoCamera.Constants.Type.back
    );
  }

  const onTakePicturePress = async () => {
    try {
      const { uri } = await camera.takePictureAsync({
        quality: 0.5
      });
      onTakePicture(uri);
    } catch (error) {
      console.log(error);
      Alert.alert("Erro", "Houve um erro ao tirar a foto.");
    }
  }

  return (
    <ExpoCamera
      style={styles.camera}
      type={type}
      ref={ref => setCamera(ref)}
    >
      <View style={styles.actionButtons}>
        <TouchableOpacity onPress={onFlipPress}>
          <Text style={styles.flipText}>
            Flip
          </Text>
        </TouchableOpacity>

        <Icon name="close" size={50} color='#fff' onPress={onCloseCamera}/>
      </View>

      <TouchableOpacity
        style={styles.takePictureButton}
        onPress={onTakePicturePress}
      >
        <Icon name="photo-camera" size={50} color='#fff' />
      </TouchableOpacity>
    </ExpoCamera>
  )
};