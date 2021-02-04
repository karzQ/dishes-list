import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider as StoreProvider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';

import { store, persistor } from './src/config/reduxConfig';
import { PersistGate } from 'redux-persist/integration/react';

import HomeScreen from './src/views/HomeScreen';
import DetailsScreen from './src/views/DetailsScreen';
import AddDishScreen from './src/views/AddDishScreen';
import AddIngredientScreen from './src/views/AddIngredientScreen';
import InFreezerScreen from './src/views/InFreezerScreen';
import ShoppingListScreen from './src/views/ShoppingListScreen';
import PhotoScreen from './src/views/PhotoScreen';
import PlannerScreen from './src/views/PlannerScreen';
import SettingsScreen from './src/views/SettingsScreen';
import Modale from './src/components/Modale';

// import Loading from './src/components/Loading';

import * as theme from './src/config/theme';

const Modal = createStackNavigator();
const Stack = createStackNavigator();
const StackShared = createSharedElementStackNavigator();
const Tab = createBottomTabNavigator();


const App = () => {

  const screenFade = ({current}) => ({
    cardStyle: {
        opacity: current.progress
    }
  });

  /* const HomeStack = () => {
    return (
      <StackShared.Navigator>
        <StackShared.Screen 
          name="Home"
          component={HomeScreen}
          options={{ cardStyleInterpolator: screenFade }}
        />

        <StackShared.Screen
          name="Details"
          component={DetailsScreen}
          options={{ cardStyleInterpolator: screenFade }}
        />

      </StackShared.Navigator>
    )
  } */

  const HomeStack = () => {
    return (
      <Modal.Navigator mode="modal">
        <Stack.Screen name="Accueil" component={HomeScreen} />        
        <Stack.Screen name="Modale" component={Modale} />        
      </Modal.Navigator>
    )
  }

  const Loading = () => {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    )
  }
  
  return (
    <StoreProvider store={store}>
      <PersistGate loading={<Loading />} persistor={persistor}>
      <NavigationContainer>

        <Tab.Navigator
          initialRouteName="Home"
          tabBarOptions={{
            tabStyle: theme.styles.tabBar,
            labelStyle: theme.styles.tabBarLabel,
            activeTintColor: 'white',
            inactiveTintColor: 'black'
          }}>

          <Stack.Screen
            name="Home"
            component={HomeStack} 
            options={{
              tabBarLabel: "Accueil",
              tabarIcon: (tabInfo) => <Ionicons name="home" size={24} color={tabInfo.color} />
            }}
          />

          <Stack.Screen
            name="ShoppingList" 
            component={ShoppingListScreen}
            options={{
              tabBarLabel: "Liste de course",
              tabBarIcon: (tabInfo) => <FontAwesome5 name="shopping-cart" size={24} color={tabInfo.color} />
            }}
          />

          <Stack.Screen 
            name="Planner"
            component={PlannerScreen}
            options={{
              tabBarLabel: "Planning",
              tabBarIcon: (tabInfo) => <Ionicons name='calendar' size={24} color={tabInfo.color} />
            }}
          />

          <Stack.Screen 
            name="Freezer"
            component={InFreezerScreen}
            options={{
              tabBarLabel: "Frigo",
              tabBarIcon: (tabInfo) => <Ionicons name='heart' size={24} color={tabInfo.color} />
            }}
          />

          <Stack.Screen 
            name="Settings"
            component={SettingsScreen}
            options={{
              tabBarLabel: "Paramètres",
              tabBarIcon: (tabInfo) => <Ionicons name='heart' size={24} color={tabInfo.color} />
            }}
          />
            
        </Tab.Navigator>

      </NavigationContainer>
      </PersistGate>
    </StoreProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default App;