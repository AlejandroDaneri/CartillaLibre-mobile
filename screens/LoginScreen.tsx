import * as React from 'react';
import {StyleSheet, TextInput, TouchableOpacity, Image} from 'react-native';

import {Text, View} from '../components/Themed';
import logo from '../assets/images/icon.png';
import {useState} from "react";

export default function TabOneScreen() {
  const [email, setEmail ] = useState()
  const [pass, setPass ] = useState()

  return (
    <View style={styles.container}>
      <Image source={logo} style={{ width: 140, height: 120, margin:20 }} />
      <View style={styles.inputView} >
        <TextInput
          style={styles.inputText}
          placeholder="Email"
          placeholderTextColor="white"
          autoCompleteType={"email"}
          onChangeText={text => setEmail(text)}/>
      </View>
      <View style={styles.inputView} >
        <TextInput
          secureTextEntry
          style={styles.inputText}
          placeholder="Contraseña"
          placeholderTextColor="white"
          autoCompleteType={"password"}
          onChangeText={text => setPass(text)}/>
      </View>
      <TouchableOpacity>
        <Text style={styles.forgot}>¿Olvido su contraseña?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>Iniciar Sesión</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.loginText}>Registrarse</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    fontWeight:"bold",
    fontSize:50,
    color:"#fb5b5a",
    marginBottom:40
  },
  inputView:{
    width:"80%",
    backgroundColor:"grey",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  inputText:{
    height:50,
    color:"white"
  },
  forgot:{
    color:"black",
    fontSize:11
  },
  loginBtn:{
    width:"80%",
    backgroundColor:"blue",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },
  loginText:{
    color:"black"
  }
});
