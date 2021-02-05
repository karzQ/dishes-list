import React, {useState} from 'react';
import { SafeAreaView, View, Text, FlatList, Image, TouchableHighlight } from 'react-native';
import { useSelector } from 'react-redux';

import * as theme from '../config/theme';

const HomeScreen = ({ navigation }) => {

    const dishes = useSelector(store => store.dishesStore.dishes);

    const HeaderComponent = () => {
        return (
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', padding: 20}}>
                <Text style={theme.styles.title1}>Suggestions</Text>
            </View>
        )
    }

    const handlePress = (item) => {
        navigation.navigate('Details', { selectedDish: item})
    }

    const DishItem = ({dish}) => {

        dish.imagePath = 'https://via.placeholder.com/728x90.png';

        return (
            <View style={{position: 'relative', height: 50}}>
                <TouchableHighlight
                	style={{position: 'relative', paddingLeft: 20, height: '100%', flexDirection: 'column', justifyContent: 'center'}}
                    activeOpacity={0.6}
                    underlayColor="#CCCCCC"
                    onPress={() => handlePress(dish)}>

                    <View style={{position: 'relative', alignItems: 'start', flexDirection: 'row', height: '100%'}}>
                        <View style={{height: '100%', width: 'auto', backgroundColor: "lightgrey"}} />
                        
                        <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start'}}>
                            <Text >{dish.name}</Text>
                            <Text style={{color:'darkgray'}}>{dish.details}</Text>
                        </View>
                    </View>
                </TouchableHighlight>
            </View>
        )
    }

    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={{height: '100%', position: 'relative'}}>
                <FlatList
                    data={dishes}
                    keyExtractor={item => `dish-${item.id}`}
                    renderItem={({item}) => <DishItem dish={item} />}
                    ListHeaderComponent={<HeaderComponent />}>
                </FlatList>
            </View>
        </SafeAreaView>
    )
}
export default HomeScreen;