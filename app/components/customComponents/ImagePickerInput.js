// MAIN IMPORTS
import React, { useRef } from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import RBSheet from 'react-native-raw-bottom-sheet';
import { MaterialCommunityIcons } from '@expo/vector-icons';

function ImagePickerInput({ imageUri, onChangeImage, style, image }) {
  // USEREF
  const refRBSheet = useRef();

  const openGallery = async () => {
    const { status } = await Permissions.askAsync(Permissions.MEDIA_LIBRARY);
    if (status !== 'granted') {
      alert('Necesitas permisos para acceder a tus imagenes.');
      return;
    }
    setTimeout(() => {
      selectImage();
    }, 300);
  };

  const openCamera = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    if (status !== 'granted') {
      alert('Necesitas permisos para acceder a tus imagenes.');
      return;
    }
    setTimeout(() => {
      takePicture();
    }, 300);
  };

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.1,
      });
      if (!result.cancelled) onChangeImage(result.uri);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  const takePicture = async () => {
    try {
      const result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.1,
      });
      if (!result.cancelled) onChangeImage(result.uri);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  return (
    <>
      <TouchableOpacity onPress={() => refRBSheet.current.open()}>
        <View style={[styles.container, style]}>
          {!imageUri && (
            <Image
              source={
                image ? image : require('../../assets/image.png')
              }
              style={image ? { width: 550, height: 550 } : {}}
            />
          )}
          {imageUri && (
            <Image source={{ uri: imageUri }} style={styles.image} />
          )}
        </View>
      </TouchableOpacity>

      <RBSheet ref={refRBSheet} height={150} openDuration={250}>
        <TouchableOpacity
          onPress={() => {
            refRBSheet.current.close();
            openCamera();
          }}
        >
          <View
            style={{
              paddingHorizontal: 20,
              height: 50,
              flexDirection: 'row',
              alignItems: 'center',
              borderBottomWidth: 1,
              borderBottomColor: 'lightgray',
            }}
          >
            <MaterialCommunityIcons name="camera" size={30} color={'#141414'} />
            <Text style={{ paddingLeft: 20 }}>Cámara</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            refRBSheet.current.close();
            openGallery();
          }}
        >
          <View
            style={{
              paddingHorizontal: 20,
              height: 50,
              flexDirection: 'row',
              alignItems: 'center',
              borderBottomWidth: 1,
              borderBottomColor: 'lightgray',
            }}
          >
            <MaterialCommunityIcons
              name="folder-image"
              size={30}
              color={'#141414'}
            />
            <Text style={{ paddingLeft: 20 }}>Galería</Text>
          </View>
        </TouchableOpacity>
      </RBSheet>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderRadius: 10,
    height: 100,
    justifyContent: 'center',
    overflow: 'hidden',
    width: 100,
  },
  image: {
    height: '100%',
    width: '100%',
  },
});

export default ImagePickerInput;
