import React, { useState } from "react"
import {View , Text , StatusBar} from "react-native"
import styles  from "./styling"
// import Icon from 'react-native-vector-icons/MaterialIcons';
import AppNavigation from "./config/appNavigation";

const App = () => {
  return (
    <>
<StatusBar
        backgroundColor="#973DA4"
        barStyle="light-content"
        
      />
    <AppNavigation/>

    {/* // <View style={[styles.h100, styles.flexCenter, styles.bgLight] }>
    //   <Text style={[styles.fs1, styles.textCenter, styles.textPrimary]}>Hello World</Text>
    //   <View style={[styles.bgPrimary, styles.w50,styles.p1, styles.btn, styles.mt1,]}>
    //     <Text style={[ styles.textLight, styles.textCenter]}>Taha<Icon name="double-arrow"  />
    //     <Icon name="favorite" size={15}/></Text>
    //   </View>
    //   <View style={[{marginTop:25, flexDirection:"row", }]}>
    //   <View style={[styles.shadow5,styles.bgWhite ,styles.p1, styles.rounded]}>
    //   <Text style={[ styles.textBlack, styles.textCenter]}>Taha</Text>
    //   </View>

    //   <View style={[styles.shadow5,styles.bgWhite , styles.p1, styles.rounded,]}>
    //   <Text style={[ styles.textBlack, styles.textCenter]}>Taha</Text>
    //   </View>
    //   </View>
    // </View> */}
    </>
  )

}

export default App
