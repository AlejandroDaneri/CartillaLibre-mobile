import { Component, useState } from "react";
import {ActivityIndicator, Alert, FlatList, RefreshControl, StyleSheet, TouchableOpacity} from "react-native";
import * as React from "react";
import {Text, View} from "./Themed";
import { DataTable } from 'react-native-paper'


const RefreshableList = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [medics, setMedics ] = useState()

    return (
      <>
      <TouchableOpacity onPress={() => {
        setRefreshing(true)
        getMedics().then(medics => setMedics(medics))
        setRefreshing(false)
        }
      }  style={styles.button}>
      <Text>Obtener medicos</Text>

      </TouchableOpacity>

        {medics?(
          <DataTable>
            <DataTable.Header>
              <DataTable.Title>Nombre</DataTable.Title>
              <DataTable.Title>Especialidad</DataTable.Title>
            </DataTable.Header>
            {
              medics.map(medic => {
                return (
                  <DataTable.Row
                    key={medic._id} // you need a unique key per item
                  >
                    <DataTable.Cell>
                      {medic.name}
                    </DataTable.Cell>
                    <DataTable.Cell>
                      {medic.speciality}
                    </DataTable.Cell>
                  </DataTable.Row>
                )})}
          </DataTable>):(<ActivityIndicator/>)}
</>
  );
}



const renderItem = ({ item }) =>
  <>
    <Text>{item.name}:{item.speciality}</Text>
  </>
;

function getMedics() {
  return fetch('https://cartillalibre-back.herokuapp.com/medics', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }).then(response => response.json())
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


export default RefreshableList
