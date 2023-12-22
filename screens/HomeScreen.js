import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Platform, StatusBar, ImageBackground, Image, SafeAreaView } from 'react-native'


export default class HomeScreen extends Component {
  render() {
    return (
      <View style={{ 
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'}}>
        <ImageBackground source={require('../assets/stars.gif')} style={styles.backgroundImage}>
        <SafeAreaView style={styles.droidSafeArea}/>
        <Image source={require("../assets/main-icon.png")} style={styles.mainImage} />
          <View style={styles.titleBar}>
            <Text style={styles.titleText}>Steller App</Text>
          </View>
          <TouchableOpacity style={styles.routeCard1} onPress={()=> this.props.navigation.navigate("SpaceCrafts")}>
          <Image source={require("../assets/space_crafts.png")} style={styles.iconImage}/>
                <Text style={styles.routeText}>
                  Space Craft
                </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.routeCard} onPress={()=> this.props.navigation.navigate("StarMap")}>
            <Image source={require("../assets/star_map.png")} style={styles.iconImage}/>
                <Text style={styles.routeText}>
                  Star Map
                </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.routeCard} onPress={()=>this.props.navigation.navigate("DailyPic")}>
                <Image source={require("../assets/daily_pictures.png")} style={styles.iconImage}/>
                <Text style={styles.routeText}>
                  Daily Pictures
                </Text>
          </TouchableOpacity>
          </ImageBackground>
        </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
      flex: 1
  },
  droidSafeArea: {
      marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
  
  backgroundImage: {
      flex: 1,
      resizeMode: 'cover',
  },
  routeCard: {
    flex: 0.2,
    marginLeft: 40,
    marginRight: 50,
    marginTop: 30,
    borderRadius: 30,
    backgroundColor: 'white',
    width: 300,
    height: 20,
  },
  routeCard1: {
    flex: 0.2,
    marginLeft: 40,
    marginRight: 50,
    marginTop: 100,
    borderRadius: 30,
    backgroundColor: 'white',
    width: 300,
    height: 20,
  },
  
  titleText: {
      fontSize: 40,
      fontWeight: "bold",
      color: "white",
      paddingTop: 210,
      paddingLeft: 90
     },

  routeText: { 
    fontSize: 35,
    fontWeight: "bold",
    color: "black",
    marginTop: 22.5,
    paddingLeft: 20
  },
  iconImage: {
      position: "absolute",
      height: 80,
      width: 80,
      resizeMode: "contain",
      right: -20,
      top: -37
  },
  mainImage: {
    position: "absolute",
    width: 200,
    height: 170,
    resizeMode: 'contain',
    top: 70,
    right: 100
  },
});