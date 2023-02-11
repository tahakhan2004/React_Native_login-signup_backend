import React from 'react'
import MapView, { Callout, Marker, PROVIDER_GOOGLE } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import { StyleSheet, View } from 'react-native';
const styles = StyleSheet.create({
 container: {
   ...StyleSheet.absoluteFillObject,
   height: "100%",
   width: 400,
   justifyContent: 'flex-end',
   alignItems: 'center',
 },
 map: {
   ...StyleSheet.absoluteFillObject,
 },
});

const Location = () => {
  return (
    <View style={styles.container}>
    <MapView
      provider={PROVIDER_GOOGLE} // remove if not using Google Maps
      style={styles.map}
      region={{
        latitude: 24.8797421,
        longitude: 67.0198973,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
      }}
    >
    <Marker
    title='Iqra Navinta'
    description='Shayans Building'
     coordinate={{
        latitude: 24.8797421,
        longitude: 67.0198973,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
      }}
    >
    {/* <Callout tooltip>
      <View>
        <Text>title</Text>
        <Text>Description</Text>
      </View>
    </Callout> */}
    </Marker>

    <Marker
    title='Shalimar Garden'
    description='Shayans old Building'
     coordinate={{
        latitude: 24.8783174,
        longitude: 67.0187488,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
      }}
    >
    {/* <Callout tooltip>
      <View>
        <Text>title</Text>
        <Text>Description</Text>
      </View>
    </Callout> */}
    </Marker>
    </MapView>

  </View> 
  )
}
export default Location


