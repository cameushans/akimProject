import { StatusBar } from 'expo-status-bar';
import React , {useEffect,useState} from 'react';
import { StyleSheet, Text, View,ImageBackground ,Button } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import MapView , { Marker } from "react-native-maps";
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";
import   MapScreen    from "./screen/MapScreen";


 function App ({ navigation }) {
  
  return (
    <View style={styles.container}>
          <Button title="Go To Map" onPress={()=> navigation.navigate("Map")} />
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





var stackNavigator = createStackNavigator({
Home:App,
Map:MapScreen
});


export default Navigation = createAppContainer(stackNavigator);