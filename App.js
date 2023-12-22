import React, {Component} from 'react'
import { StyleSheet } from 'react-native'

import StarMapScreen from './screens/StarMap';
import DailyPicScreen from './screens/DailyPic';
import SpaceCraftScreen from './screens/SpaceCraft';
import HomeScreen from './screens/HomeScreen'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator()

export default class App extends Component{
  render(){      
    return (
            <NavigationContainer>
              <Stack.Navigator initialRouteName="Home" screenOptions={{
                headerShown: false
                
              }}>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="SpaceCrafts" component={SpaceCraftScreen} />
                <Stack.Screen name="DailyPic" component={DailyPicScreen} />
                <Stack.Screen name="StarMap" component={StarMapScreen} />
              </Stack.Navigator>
            </NavigationContainer>
          );
        }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
