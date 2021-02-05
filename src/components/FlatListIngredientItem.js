import React from 'react';
import { View, Text } from 'react-native';

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

export default FlatListIngredientItem;