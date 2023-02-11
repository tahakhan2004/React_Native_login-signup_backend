import React, { useState } from "react"
import {View , Text , StyleSheet , Image, ImageBackground, TextInput, Button, TouchableOpacity,Alert ,StatusBar} from "react-native"
import { create } from "react-test-renderer"
import icon from "./Asstes/Logo.png"
import back from "../Asstes/background.jpg"
import grad from "../Asstes/gradba.jpg"
import icon2 from "../Asstes/logo2.png"
import back4 from "../Asstes/background2.jpg"
import back3 from "../Asstes/back3.jpg"
// import { SocialIcon } from "@rneui/themed"
import faceb from "../Asstes/fb.png"
import git from "../Asstes/git.png"
import acc from "../Asstes/Acc.png"
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

import {SocialIcon} from '@rneui/themed';
import { KeyboardAvoidingView } from "react-native/Libraries/Components/Keyboard/KeyboardAvoidingView"
import axios from "axios"
import AsyncStorage from "@react-native-async-storage/async-storage"


function Login3({navigation}){
  const [email, setemail] = useState()
  const [password, setpassword] = useState()

  // const loginn = ()=>{
 
  //   console.log(obj);
  //   navigation.navigate("Home")

  // }

  const model = {
    email,
    password
  }
  
  const alerting = () =>
  Alert.alert('User Credentials', "Invalid Email or Password", [
    {text: 'OK', onPress: () => console.log('OK Pressed')},
  ]);

const loginn =  () =>{
  // auth().signInWithEmailAndPassword(model.email, model.password)
  // .then((res)=>{
  //   navigation.replace("Dashboard", res.user)
  // }).catch((err)=>{
  //   console.log(err);
  //   alerting()
  // })

  axios.post("https://dead-snaps-yak.cyclic.app/api/login", model)
  .then(async(res)=>{
    console.log(res.data)
    try{
      const tokenn = res.data.token
      await AsyncStorage.setItem("token", tokenn)
    }catch(err){
      console.log(err)
    }
    navigation.navigate("Products") 
  }).catch((err)=>{
    console.log(err)
  })

}

  return<>

  <ImageBackground style={{ height: "100%",width:"100%"}} source={grad}>
  
  <View style={{width:"100%", padding:10, marginTop:50}}>
    <View style={{alignItems: "center"}}>
    <Image source={acc} style={{width:100, height:100}}/>
    </View>
    <Text style={[styles.mainheading, {marginTop:8, color:"black", fontWeight:"bold"}]}>LogIn</Text>
    
  <View style={{alignItems:'center', padding:8, marginTop: 20  }}>
    <TextInput placeholder="Email Address" keyboardType="email-address" onChangeText={(e)=>setemail(e)} style={styles.inp} />
  </View>
  <View style={{alignItems:'center', padding:8}}>
    <TextInput placeholder="Password" secureTextEntry={true} onChangeText={(e)=>setpassword(e)} style={styles.inp} />
  </View>

  <View style={{alignItems:'center', padding:8}}>
    {/* <Button title="Login" style={styles.butn}/> */}
    <TouchableOpacity style={styles.butn} onPress={loginn}>
      <Text style={{color:"white", textAlign:"center", fontWeight:"900"}}>Login</Text>
    </TouchableOpacity>
  </View>
  <TouchableOpacity style={{justifyContent:"center", alignItems:'center'}} onPress={()=>{navigation.navigate("Signup")}}>
  <Text style={{color:"white", textAlign:"center", fontWeight:"900", marginTop:15}}>Or Register Asap</Text>
  </TouchableOpacity>

<View style={{ width:"100%", padding:5, marginTop:18}}>
 
    <Text></Text>

    
    </View>
  <View style={{position:"absolute", top:565, left:110}}>
  <Text style={{color:"#faf0e6"}}>Powered by Taha Khan</Text>
  </View>
  </View>


  </ImageBackground>

  </>
}
export default Login3



const styles = StyleSheet.create({
    mainheading : {
      fontSize: 30,
      color: "#23395d",
      textAlign: "center",
    },
    mainContainer : {
      justifyContent: "center",
      alignItems: "center",
    },
    inp:{
      width: "90%",
      backgroundColor: "#faf0e6",
      padding: 5,
      fontSize:18,
      color:"#002648",
      borderRadius:100,
      textAlign:"center",
    //   borderBottomWidth: 1,
    //   borderBottomColor:"white"
    },
    butn:{
      backgroundColor:"#002648",
      borderRadius: 10,
      padding:8,
      width:"30%",
      marginTop:8
    },
   shadow:{  
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.23,
shadowRadius: 2.62,

elevation: 4,
  }
})