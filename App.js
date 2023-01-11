/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DetailScreen from './src/screens/DetailScreen';
import HomeScreen from './src/screens/HomeScreen';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome';

const HomeStack = createNativeStackNavigator();
const DetailStack = createNativeStackNavigator();

const HomeStackScreen = ({navigation}) => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#009387',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <HomeStack.Screen
        name="Homee"
        component={HomeScreen}
        options={{
          headerLeft: () => (
            <Icon.Button
              name="menu"   
              size={20}
              backgroundColor="#009387"
              onPress={() => navigation.openDrawer()}></Icon.Button>
          ),
        }}
      />
    </HomeStack.Navigator>
  );
};

const DetailStackScreen = ({navigation}) => {
  return (
    <DetailStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#009387',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <DetailStack.Screen name="Detailss" component={DetailScreen} />
    </DetailStack.Navigator>
  );
};
const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer>
        {/* <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#009387',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailScreen} />
      </Stack.Navigator> */}
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={HomeStackScreen} />
          <Drawer.Screen name="Details" component={DetailStackScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default App;
