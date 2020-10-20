import * as React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import RefreshableList from "../components/MedicsList";

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.instructions} >
        Lista de médicos
      </Text>
      <RefreshableList/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  instructions: {
    color: '#888',
    fontSize: 18,
    marginHorizontal: 15,
  },
});
