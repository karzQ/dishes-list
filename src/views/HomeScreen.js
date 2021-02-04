import React, {useState, useEffect, useLayoutEffect} from 'react';
import { SafeAreaView, StyleSheet, Pressable, View, Text, FlatList, Image, TouchableWithoutFeedback, TouchableHighlight, Modal } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { useDispatch, useSelector } from 'react-redux';

import {theme, width, height} from '../config/theme';

const HomeScreen = ({ navigation }) => {

    const [selectedDish, setSelectedDish] = useState({});

    // const dispatch = useDispatch();
    const dishes = useSelector(store => store.dishesStore.dishes);

    const HeaderComponent = () => {
        return (
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}>
                <Text style={{ fontSize: 24, padding: 20, paddingLeft: 0, paddingBottom: 35}}>Suggestions</Text>
            </View>
        )
    }

    const DishItem = ({dish}) => {
        return (
            <View>
                <TouchableHighlight
                    activeOpacity={0.8}
                    underlayColor="#CCCCCC"
                    onPress={() => navigation.navigate('Modale', { selectedDish: selectedDish})}>
                    
                    <View>
                        <View>
                            <Text >{dish.name}</Text>
                            <Text style={{color:'darkgray'}}>{dish.details}</Text>
                        </View>
                    </View>
                </TouchableHighlight>
            </View>
        )
    }

    return (
        <View style={{height: '100%', position: 'relative'}}>
            

            <SafeAreaView style={{flex: 1}}>
                <FlatList
                    data={dishes}
                    keyExtractor={item => `dish-${item.id}`}
                    renderItem={({item}) => <DishItem dish={item} />}
                    ListHeaderComponent={<HeaderComponent />}>
                </FlatList>
            </SafeAreaView>
        </View>
    )
}
export default HomeScreen;