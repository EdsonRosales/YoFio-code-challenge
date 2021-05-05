import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainFormScreen from './app/screens/MainFormScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import * as ImagePicker from 'expo-image-picker';

export default function App() {
  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!granted) {
      alert("Necesitas habilitar los permisos");
    }
  };

  useEffect(() => {
    requestPermission();
  }, [])

  return (
    <SafeAreaProvider>
      <MainFormScreen />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
