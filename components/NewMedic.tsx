import * as React from "react";
import {StyleSheet, TextInput, TouchableOpacity} from "react-native";
import {Text} from "./Themed";

const NewMedic = () => {

  const [name, setName] = React.useState('');
  const [speciality, setSpecialist] = React.useState('');

  return (
    <>
    <Text  style={styles.instructions} >
      Agregar nuevo médico
    </Text>
  <TextInput
    style={styles.cell}
    placeholder={'Ingrese nombre medico'}
    onChangeText={text => setName(text)}
    value={name}
  />
  <TextInput
    style={styles.cell}
    placeholder={'Ingrese especialidad'}
    onChangeText={text => setSpecialist(text)}
    value={speciality}
  />

  <TouchableOpacity onPress={() => postMedic(name,speciality)} style={styles.button}>
    <Text style={styles.buttonText}>Agregar médico</Text>
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
  instructions: {
    color: '#888',
    fontSize: 18,
    marginHorizontal: 15,
  },
  cell: {
    height: 40,
    width: 175,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    margin: 10
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
