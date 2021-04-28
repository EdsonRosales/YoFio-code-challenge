import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainFormScreen from './app/screens/MainFormScreen';

export default function App() {
  return (
    <MainFormScreen />
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
