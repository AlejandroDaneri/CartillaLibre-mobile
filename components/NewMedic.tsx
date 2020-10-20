import {useState} from "react";
import {ActivityIndicator, StyleSheet, TextInput, TouchableOpacity} from "react-native";
import {Text, View} from "./Themed";
import * as React from "react";
import RefreshableList from "./MedicsList";

const NewMedic = () => {

  const [name, setName] = React.useState('');
  const [speciality, setSpecialist] = React.useState('');

  return (
    <>
    <Text  style={styles.instructions} >
      Seccion nuevo medico
    </Text>
  <TextInput
    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
    placeholder={'Ingrese nombre medico'}
    onChangeText={text => setName(text)}
    value={name}
  />
  <TextInput
    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
    placeholder={'Ingrese especialidad'}
    onChangeText={text => setSpecialist(text)}
    value={speciality}
  />

  <TouchableOpacity onPress={() => postMedic(name,speciality)} style={styles.button}>
    <Text style={styles.buttonText}>Guardar medico</Text>
  </TouchableOpacity>
</>
  );
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

export default NewMedic
