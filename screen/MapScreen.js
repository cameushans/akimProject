import { StatusBar } from 'expo-status-bar';
import React , {useEffect,useState} from 'react';
import { StyleSheet, Text, View,ImageBackground } from 'react-native';
import MapView , { Marker } from "react-native-maps";
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";


function Map() {
  const [location,setLocation] = useState({latitude:0,longitude:0});


  useEffect(() => {
    const checkPerm = async () => {
      var { status } = await Permissions.askAsync(Permissions.LOCATION)
      if(status === "granted"){
              Location.watchPositionAsync({distanceInterval: 2},
             (location)=>{
                  setLocation({latitude:location.coords.latitude,longitude:location.coords.longitude})
          })
      }
    }
    checkPerm()
  }, [])

  return (

    <View style={styles.container}>
      <MapView style={styles.mapStyle} initialRegion={{
       latitude: 48.866667,
      longitude: 2.333333,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421}}>
        <Marker coordinate={{location}} description="Hello here"  title="me buddy"/>
        </MapView>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle:{
    width:"100%",
    height:"100%",
  }
});



