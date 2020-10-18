import * as React from 'react';
import { Image, StyleSheet, TouchableOpacity, TextInput, FlatList } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';


const Item = ({ name }) => (
    <View >
        <Text>{name}</Text>
    </View>
);

export default function TabOneScreen() {
  const [name, onChangeName] = React.useState('Ingrese nombre medico');
  const [speciality, onChangeSpeciality] = React.useState('Ingrese especialidad');
  const [medics, onChangeMedics] = React.useState('');

  const renderItem = ({ item }) => <Item title={item.name} />;

  return (
      <View style={styles.container}>
        <Text  style={styles.instructions} >
          Seccion nuevo medico
        </Text>
        <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            onChangeText={text => onChangeName(text)}
            value={name}
        />
        <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            onChangeText={text => onChangeSpeciality(text)}
            value={speciality}
        />

        <TouchableOpacity onPress={() => postMedic(name,speciality)} style={styles.button}>
          <Text style={styles.buttonText}>Guardar medico</Text>
        </TouchableOpacity>

        <Text  style={styles.instructions} >
          Seccion obtener medicos
        </Text>

        <TouchableOpacity onPress={() => getMedics()} style={styles.button}>
          <Text style={styles.buttonText}>Obtener medicos</Text>
        </TouchableOpacity>
        <FlatList data={getMedics()} renderItem={renderItem} keyExtractor={item => item._id} />

      </View>
  );
}

function getMedics(){
  return fetch('https://cartillalibre-back.herokuapp.com/medics', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }).then(response => response.json())


}

function postMedic(name: string, speciality: string){
  fetch('https://cartillalibre-back.herokuapp.com/medics', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: name,
      speciality: speciality,
    })
  })
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
  instructions: {
    color: '#888',
    fontSize: 18,
    marginHorizontal: 15,
  },
  button: {
    backgroundColor: "blue",
    padding: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
  },
});
