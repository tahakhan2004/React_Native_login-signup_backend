import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {View , Text, TouchableOpacity, ScrollView, ActivityIndicator, Image , } from "react-native"
import styles from '../styling'
import Icon from 'react-native-vector-icons/MaterialIcons';

const Home = ({navigation}) => {
  const [data, setdata] = useState([])
  const [loader, setloader] = useState(false)
  function getdata(){
    setloader(true)
    axios.get("https://fakestoreapi.com/products")
    .then((res)=>{
      // console.log(res.data)
      setdata([...res.data])
      setloader(false)
    })
    .catch((err)=>{
      console.log(err)
      setloader(false)

    })
  }
  useEffect(()=>{
    getdata()
  }, [])
  return (
    <>
    <View>
      <ScrollView>
        {
          loader ? <ActivityIndicator size={30}/> : data && data.length > 0 ? data.map((val, ind)=><TouchableOpacity key={ind} onPress={()=>{navigation.navigate("ProductDetail", val)}}>
          <View style={[styles.justifyContentCenter, styles.alignItemsCenter]}>
            <View style={[ styles.mt2, styles.w75, styles.bgWhite, styles.p1, styles.rounded, styles.shadow1]}>                
              <Image source={{uri: val.image}} style={{height:200 ,width:"100%", borderRadius:6}} resizeMode="cover" />
              <Text style={[styles.textCenter, styles.textBold, styles.textBlack, styles.mt1]}>{val.title}</Text>
              <View style={{flexDirection:"row"}}>
              <Text style={{marginTop:6}}><Icon name="star" size={20} color="#FFD700"/></Text>
              <Text style={{marginTop:6}}><Icon name="star" size={20} color="#FFD700"/></Text>
              <Text style={{marginTop:6}}><Icon name="star" size={20} color="#FFD700"/></Text>
              <Text style={{marginTop:6}}><Icon name="star-half" size={20} color="#FFD700"/></Text>

              </View>
              <View style={{flexDirection:"row", justifyContent:"space-between", marginTop:7}}>
              <Text>{val.category}</Text>
              <Text style={[styles.textBlack, styles.fs5]}>${val.price}</Text>
              </View>
            </View>
            </View>

          </TouchableOpacity>) : <Text>No Data Found</Text>
        }
      </ScrollView>
    </View>
     {/* <View style={[styles.h100, styles.justifyContentCenter, styles.alignItemsCenter]}>
        <Text>Erturul Beym</Text>
        <TouchableOpacity onPress={moveProduct}>
            <Text style={[styles.btn, styles.w50, styles.textCenter, styles.mt1]}>Products</Text>
        </TouchableOpacity>
    </View>  */}
    </>
  )
}

export default Home
