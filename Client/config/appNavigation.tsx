// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Screens/home';
import Products from '../Screens/products';
import SingleProducts from '../Screens/SingleProduct';
import Signup3 from '../Screens/signup';
import Login3 from '../Screens/Login';
import DashBrad from '../Screens/DashBorad';
import Locate from '../Screens/location';
import Location from '../Screens/location';

// function HomeScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Taha beym</Text>
//     </View>
//   );
// }

const Stack = createNativeStackNavigator();

function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator   screenOptions={{
    headerShown: false
  }}>
      <Stack.Screen name="Signup" component={Signup3} />

      <Stack.Screen name="Login" component={Login3} />


      <Stack.Screen name="Products" component={Products}/>

      <Stack.Screen name="Map" component={Location} />
      <Stack.Screen name="Dashboard" component={DashBrad} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ProductDetail" component={SingleProducts} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;