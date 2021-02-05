import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, FontAwesome5, AntDesign } from '@expo/vector-icons';

import HomeScreen from './views/HomeScreen';
import DetailsScreen from './views/DetailsScreen';
import AddDishScreen from './views/AddDishScreen';
import AddIngredientScreen from './views/AddIngredientScreen';
import ModifyDishScreen from './views/ModifyDishScreen';
import ModifyIngredientScreen from './views/ModifyIngredientScreen';
import InFreezerScreen from './views/InFreezerScreen';
import ShoppingListScreen from './views/ShoppingListScreen';
import PhotoScreen from './views/PhotoScreen';
import PlannerScreen from './views/PlannerScreen';
import SettingsScreen from './views/SettingsScreen';
import SelectListScreen from './views/SelectListScreen';

import * as theme from './config/theme';
import { HeaderTitle } from 'react-navigation-stack';

export default function Navigation() {

    const Modal = createStackNavigator();
    const Stack = createStackNavigator();
    const Tab = createBottomTabNavigator();

    // Permet de faire un routing à l'intérieur du routing effectué pour les tabs
    const HomeStack = () => {
        return (
        <Modal.Navigator mode="modal">
            <Stack.Screen name="Accueil" component={HomeScreen} />
            <Stack.Screen name="Details" component={DetailsScreen} />
        </Modal.Navigator>
        )
    }

    const ShoppingListStack = () => {
        return (
        <Modal.Navigator mode="modal">
            <Stack.Screen name="ShoppingList" component={ShoppingListScreen} />
            <Stack.Screen name="DishSelection" component={SelectListScreen} />
        </Modal.Navigator>
        )
    }

    const PlannerStack = () => {
        return (
        <Modal.Navigator mode="modal">
            <Stack.Screen name="Planner" component={PlannerScreen} />
            <Stack.Screen name="PlannedDishesSelection" component={SelectListScreen} />
        </Modal.Navigator>
        )
    }

    const InFreezersStack = () => {
        return (
        <Modal.Navigator mode="modal">
            <Stack.Screen name="InFreezer" component={InFreezerScreen} />
            <Stack.Screen name="IngredientSelection" component={SelectListScreen} />
        </Modal.Navigator>
        )
    }

    const SettingsStack = () => {
        return (
        <Modal.Navigator mode="modal">
            <Stack.Screen name="Settings" component={SettingsScreen} />
            <Stack.Screen name="CreateDish" component={AddDishScreen} />
            <Stack.Screen name="CreateIngredient" component={AddIngredientScreen} />
            <Stack.Screen name="ModifyDish" component={ModifyDishScreen} />
            <Stack.Screen name="ModifyIngredient" component={ModifyIngredientScreen} />
            <Stack.Screen name="Photo" component={PhotoScreen} options={{headerShown: false}} />
        </Modal.Navigator>
        )
    }

    // Navigation Container permet d'effectuer de gérer le routing de l'application
    return (
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
                    tabBarIcon: (tabInfo) => <Ionicons name="home" size={24} color={tabInfo.color} />
                }}
            />

            <Stack.Screen
                name="ShoppingList" 
                component={ShoppingListStack}
                options={{
                    tabBarLabel: "Liste de course",
                    tabBarIcon: (tabInfo) => <FontAwesome5 name="shopping-cart" size={24} color={tabInfo.color} />
                }}
            />

            <Stack.Screen 
                name="Planner"
                component={PlannerStack}
                options={{
                    tabBarLabel: "Planning",
                    tabBarIcon: (tabInfo) => <Ionicons name='calendar' size={24} color={tabInfo.color} />
                }}
            />

            <Stack.Screen 
                name="Freezer"
                component={InFreezersStack}
                options={{
                    tabBarLabel: "Frigo",
                    tabBarIcon: (tabInfo) => <AntDesign name='database' size={24} color={tabInfo.color} />
                }}
            />

            <Stack.Screen 
                name="Settings"
                component={SettingsStack}
                options={{
                    tabBarLabel: "Paramètres",
                    tabBarIcon: (tabInfo) => <Ionicons name='settings-sharp' size={24} color={tabInfo.color} />
                }}
            />
                
            </Tab.Navigator>

        </NavigationContainer>
    )
}