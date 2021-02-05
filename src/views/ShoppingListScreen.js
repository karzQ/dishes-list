import React, {useState, useEffect} from 'react';
import { SafeAreaView, View, FlatList, Text } from 'react-native';

import FlatListTitle from '../components/FlatListTitle';
import Loading from '../components/Loading';

import {useSelector, useDispatch} from 'react-redux';

import * as md5 from 'md5';
import * as theme from '../config/theme';

const ShoppingList = () => {
    const {cart} = useSelector(store => store.shoppingCartStore);
    const [cartIngredients, setCartIngredients] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const init = async () => {
        await setIsLoading(true);
        const ingredients = await getDishesIngredients(cart);
        await setCartIngredients([...ingredients]);
        await setIsLoading(false);
        console.log({cart});
        console.log({ingredients});
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
                    <Text style={{fontWeight: 700}}>{dish.name}</Text>
                </View>
                <Text>x{dish.quantity}</Text>
            </View>
        )
    }

    const FlatListIngredientItem = ({ingredient}) => {
        return (
            <View style={{width: '100%', flex:1, height: 50, flexDirection: "row", justifyContent: 'space-between', alignItems: 'center', marginTop: 10, marginBottom: 10 }}>
                <View style={{flexDirection: "row", justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text style={{fontWeight: 700}}>{ingredient.name}</Text>
                    {
                        ingredient.details !== '' && (
                            <Text style={{color:'lightgray'}}> - {ingredient.details}</Text>
                        )
                    }
                    </View>
                <Text>{ingredient.quantity}{ingredient.unit}</Text>
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
                    keyExtractor={item => md5(`dish-${item.id}-${item.name}`)}
                    renderItem={({item}) => <FlatListPlannedDishItem dish={item} />}
                    ListHeaderComponent={<FlatListTitle title="Plats prévus" />}/>
            </View>

            {
                !isLoading && cartIngredients.length > 0 && (
                    
                    <View style={theme.styles.listDisplayArea}>
                        <FlatList 
                            data={cartIngredients}
                            keyExtractor={item => md5(`ingredient-${item.id}-${item.name}`)}
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
            
        </SafeAreaView>
    )
}

export default ShoppingList;