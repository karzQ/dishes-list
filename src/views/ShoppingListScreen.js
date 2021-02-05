import React, {useState, useEffect} from 'react';
import { SafeAreaView, View, FlatList, Text, Pressable } from 'react-native';

import FlatListTitle from '../components/FlatListTitle';
import Loading from '../components/Loading';

import {useSelector } from 'react-redux';

import { idGenerator } from '../utils/commons';
import * as theme from '../config/theme';

import FlatListIngredientItem from '../components/FlatListIngredientItem';

const ShoppingList = () => {
    const {cart} = useSelector(store => store.shoppingCartStore);
    const [cartIngredients, setCartIngredients] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const init = async () => {
        await setIsLoading(true);
        const ingredients = await getDishesIngredients(cart);
        await setCartIngredients([...ingredients]);
        await setIsLoading(false);
    }

    const getDishesIngredients = (arr) => {

        const ingredientsArr = [];
    
        arr.forEach(dish => {
            dish.ingredients.forEach(ingredient => {
                const existInArr = ingredientsArr.find(el => el.name === ingredient.name);
                if (existInArr === undefined) {
                    ingredientsArr.push(ingredient);
                } else {
                    const newIngredient = {
                        ...ingredient,
                        quantity: ingredient.quantity + existInArr.quantity
                    }
                    ingredientsArr.push(newIngredient);
                }
            })
        })

        return ingredientsArr;
    }
    
    const FlatListPlannedDishItem = ({dish}) => {
        return (
            <View style={{width: '100%', flex:1, height: 50, flexDirection: "row", justifyContent: 'space-between', alignItems: 'center', marginTop: 10, marginBottom: 10 }}>
                <View style={{flexDirection: "row", justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text>{dish.name}</Text>
                </View>
                <Text>x{dish.quantity}</Text>
            </View>
        )
    }

    useEffect(() => {
        init();
    }, [])

    useEffect(() => {
        (async () => {
            await setIsLoading(true);
            const data = await getDishesIngredients(cart);
            setCartIngredients([...data]);
            await setIsLoading(false);
        })()
        
    }, [cart])

    
    
    return (
        <SafeAreaView style={{padding: 20}}>
            <View style={theme.styles.listDisplayArea}>
                <FlatList
                    data={cart}
                    keyExtractor={item => `dish-${item.id + idGenerator()}-${item.name}`}
                    renderItem={({item}) => <FlatListPlannedDishItem dish={item} />}
                    ListHeaderComponent={<FlatListTitle title="Plats prévus" />}/>
            </View>

            {
                !isLoading && cartIngredients.length > 0 && (
                    
                    <View style={theme.styles.listDisplayArea}>
                        <FlatList 
                            data={cartIngredients}
                            keyExtractor={item => `ingredient-${item.id + idGenerator()}-${item.name}`}
                            renderItem={({item}) => <FlatListIngredientItem ingredient={item} />}
                            ListHeaderComponent={<FlatListTitle title="Ingrédients nécessaires" />}/>
                    </View>
                )
            }
            
            {
                !isLoading && cartIngredients.length === 0 && (
                    <Text>Aucun plat de prévu</Text>
                )
            }

            {
                isLoading && cartIngredients.length === 0 && (
                    <Loading />
                )
            }

            <Pressable style={{backgrounColor: theme.DEFAULT_COLOR, postion: "absolute", bottom: 10, right: 10, padding: 20, borderRadius: "50%"}}>
                <Text style={{color: 'white', fontSize: 24}}>+</Text>
            </Pressable>
            
        </SafeAreaView>
    )
}

export default ShoppingList;