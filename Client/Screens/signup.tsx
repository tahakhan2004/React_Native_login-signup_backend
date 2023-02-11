import React, { useState } from "react"
import {View , Text , StyleSheet , Image, ImageBackground, TextInput, Button, TouchableOpacity, Alert} from "react-native"
// import { create } from "react-test-renderer"
import icon from "../Asstes/Logo.png"
import back from "../Asstes/background.jpg"
import grad from "../Asstes/gradba.jpg"
import icon2 from "../Asstes/logo2.png"
import back4 from "../Asstes/background2.jpg"
import back3 from "../Asstes/back3.jpg"
import { SocialIcon } from "@rneui/themed"
import faceb from "../Asstes/fb.png"
import git from "../Asstes/git.png"
import acc from "../Asstes/Acc.png"
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import { KeyboardAvoidingView } from "react-native/Libraries/Components/Keyboard/KeyboardAvoidingView"
import axios from "axios"
// import {SocialIcon} from '@rneui/themed';

function Signup3({navigation}){

  const [email, setemail] = useState()
  const [password, setpassword] = useState()
  const [phoneNum, setnumber] = useState()
  const [name, setname] = useState()
  const model = {
 name,
 email,
 password,
 phoneNum
  }
  // const loginn = ()=>{

  //   console.log(obj);
  //   navigation.navigate("Login")
  // }
  const createTwoButtonAlert = (error) =>
    Alert.alert('Error', `${error}`, [
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);


  const SignUpp = async ()=>{
    // auth().createUserWithEmailAndPassword(model.email, model.password)
    // .then((res)=>{
    //   console.log(res.user.uid);
    //   database().ref(`users/${res.user.uid}`).set(model)
    //   .then((res)=>{
    //    navigation.replace("Login") 
    //   }).catch((err)=>{
    //     console.log(err.message);
    //   })
      
    // }).catch((err)=>{
    //   console.log(err.message); 
    //   createTwoButtonAlert(err.message)
    // })
    await axios.post("https://dead-snaps-yak.cyclic.app/api/signup", model)
    .then((res)=>{
      console.log(res.data)
      navigation.replace("Login") 
    }).catch((err)=>{
      console.log(err)
    })
  }
function tologin(){
  navigation.replace("Login")
}
  return<>

  <ImageBackground style={{ height: "100%",width:"100%"}} source={grad}>
  <View style={{width:"100%", padding:10, marginTop:10}}>
    <View style={{alignItems: "center"}}>
    <Image source={acc} style={{width:100, height:100}}/>
    </View>
    <Text style={[styles.mainheading, {marginTop:8, color:"black", fontWeight:"bold"}]}>Register</Text>
    
    <View style={{alignItems:'center', padding:8, marginTop: 15  }}>
    <TextInput placeholder="UserName" onChangeText={(e)=>setname(e)} style={styles.inp} />
  </View>

    <View style={{alignItems:'center', padding:8, marginTop: 0  }}>
    <TextInput placeholder="Contact No" keyboardType="numeric" onChangeText={(e)=>setnumber(e)} style={styles.inp} />
  </View> 
  <View style={{alignItems:'center', padding:8, marginTop: 0  }}>
    <TextInput placeholder="Email Address" keyboardType="email-address" onChangeText={(e)=>setemail(e)} style={styles.inp} />
  </View>
  <View style={{alignItems:'center', padding:8}}>
    <TextInput placeholder="Password" secureTextEntry={true} onChangeText={(e)=>setpassword(e)} style={styles.inp} />
  </View>

  <View style={{flexDirection : "row", justifyContent:"space-between", marginHorizontal:15, marginTop:12 }}>
  <Text style={{color:"white"}}>forget password?</Text>
  <TouchableOpacity onPress={tologin}>
  <Text style={{color:"white"}}>Account Already Exist!</Text>
  </TouchableOpacity>
  </View>
  <View style={{alignItems:'center', padding:8}}>
    {/* <Button title="Login" style={styles.butn}/> */}
    <TouchableOpacity style={styles.butn} onPress={SignUpp}>
      <Text style={{color:"white", textAlign:"center", fontWeight:"900"}}>Signup</Text>
    </TouchableOpacity>
  </View>
  <Text style={{color:"white", textAlign:"center", fontWeight:"900", marginTop:15}}>Or Connect with</Text>

<View style={{ width:"100%", padding:5, marginTop:18, flexDirection:"row", marginTop:20, justifyContent:"space-evenly"}}>
  <TouchableOpacity style={{justifyContent:"center", alignItems:'center'}}>
    <Image source={faceb} style={{width:30, height:30}}/>
    <Text style={{color:"white", textAlign:"center", fontWeight:"900"}}>Facebook</Text>
    </TouchableOpacity>
    <TouchableOpacity style={{justifyContent:"center", alignItems:'center'}}>

    <Image source={git} style={{width:30, height:30}}/>
    <Text style={{color:"white", textAlign:"center", fontWeight:"900"}}>Github</Text>
    </TouchableOpacity>


    
    </View>
 
  </View>


  </ImageBackground>
  </>
}
export default Signup3



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