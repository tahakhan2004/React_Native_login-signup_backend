import React from 'react'
import {View , Text , } from "react-native"

const SingleProducts = ({navigation, route}) => {
  const {title, category} = route.params
  return (
    <>
     <View>
        {/* <Text>Product BALA HATUN</Text> */}
        <Text>{title}</Text>
        <Text>{category}</Text>

    </View> 
    </>
  )
}

export default SingleProducts 
