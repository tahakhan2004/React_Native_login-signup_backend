import { firebase } from '@react-native-firebase/auth';
import {View , Text, TouchableOpacity, ScrollView, ActivityIndicator, Image , } from "react-native"
import React, { useEffect, useState } from 'react'
import database from '@react-native-firebase/database';
import { LogBox } from 'react-native';

const DashBrad = ({navigation, route}) => {
    const {uid} = route.params
    const [data, setdata] = useState({})

  const getData = ()=>{
    database()
    .ref(`/users/${uid}`)
    .on('value', snapshot => {
      setdata(snapshot.val());
    });
  } 
   
  useEffect(()=>{
    getData()
  }, [])

  LogBox.ignoreLogs([
    'Non-serializable values were found in the navigation state',
  ]);

  return (
    <>
  <View>
    <Text>{data.email}</Text>
    <Text>{data.name}</Text>
  </View>
    </>
  )
}

export default DashBrad
