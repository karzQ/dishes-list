import React, {useState, useEffect} from 'react';
import { View, Text, SafeAreaView, FlatList, TouchableHighlight } from 'react-native';

import FlatListTitle from '../components/FlatListTitle';

import { useSelector } from 'react-redux';
import { idGenerator } from '../utils/commons';
import * as theme from '../config/theme';

import FlatListIngredientItem from '../components/FlatListIngredientItem';

const InFreezerScreen = () => {

    const {ingredientCategories} = useSelector(store => store.categoriesStore)
    const {ingredients} = useSelector(store => store.ingredientsStore);

    const [selectedCategory, setSelectedCategory] = useState(null);
    const [filteredIngredients, setFilteredIngredients] = useState([]);
    
    const FlatListCategoryItem = ({category}) => {
        return (
            <TouchableHighlight>
                <View>
                    <View></View>
                    <Text>{category.name}</Text>
                </View>
            </TouchableHighlight>
        )
    }

    const filterData = (arr) => {
        return arr.filter(item => item.category === selectedCategory.name);
    }

    useEffect(() => {
        console.log({ingredientCategories});
        console.log({ingredients});
    }, [])

    useEffect(() => {
        if (selectedCategory) {
            const data = filterData(ingredients);
            setFilteredIngredients([...data]);
        }
    }, [selectedCategory])

    return (
        <SafeAreaView>
            <View style={{padding: 20}}>
                <FlatList
                    data={ingredientCategories}
                    keyExtractor={item => `category-${item.id + idGenerator()}-${item.name}`}
                    renderItem={({item}) => <FlatListCategoryItem category={item} />}
                    ListHeaderComponent={<FlatListTitle title="Catégories" />} />
            </View>

            <View style={{padding: 20}}>
                {
                    filteredIngredients.length > 0 && (
                        <FlatList
                            data={filteredIngredients}
                            keyExtractor={item => `ingredient-${item.id + idGenerator()}-${item.name}`}
                            renderItem={({item}) => <FlatListIngredientItem ingredient={item} />}
                            ListHeaderComponent={<FlatListTitle title="Dans le frigo" />} />
                    )
                }

                {
                    filteredIngredients.length === 0 && (
                        <Text>Vous n'avez rien dans le réfrigérateur</Text>
                    )
                 }
                
            </View>

        </SafeAreaView>
    )
}

export default InFreezerScreen;