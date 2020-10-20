import * as React from 'react';
import { StyleSheet, TouchableOpacity, TextInput, FlatList, RefreshControl} from 'react-native';

import { Text, View } from '../components/Themed';
import NewMedic from "../components/NewMedic";

export default function TabOneScreen() {

  return (
      <View style={styles.container}>
      <NewMedic/>
      </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  logo: {
    width: 305,
    height: 159,
    marginBottom: 10,
  },

  button: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
  },
});
