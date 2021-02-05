import React, {useEffect} from 'react'
import {SafeAreaView, Text, View, Image, FlatList, TouchableHighlight} from 'react-native'

import * as theme from '../config/theme'

import {useDispatch} from 'react-redux';

const DetailsScreen = ({route}) => {
  const {selectedDish} = route.params;
  const dispatch = useDispatch();    

  const FlatListItem = ({ingredient}) => {
    return (
      <View style={{width: '100%', flex:1, height: 50, flexDirection: "row", justifyContent: 'space-between', alignItems: 'center', marginTop: 10, marginBottom: 10 }}>
        <View style={{flexDirection: "row", justifyContent: 'space-between', alignItems: 'center' }}>
          <Text>{ingredient.name}</Text>
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
  
  return (
    <SafeAreaView style={theme.styles.container}>
      

      <View style={{zIndex: 50, position: 'absolute', right: 0, bottom: 0, paddingBottom: 15, paddingRight: 15}}>
        <TouchableHighlight style={{padding: 10, borderRadius: 5, backgroundColor: theme.DEFAULT_COLOR, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}
            onPress={() => dispatch({ type:'ADD_DISH_TO_CART', payload: {...selectedDish}})}>
            <Text style={{color: 'white', fontSize: 16}}>Ajouter à la liste</Text>
        </TouchableHighlight>
      </View>

      <View style={{padding: 20}}>
        <View style={{marginBottom: 20}}>
          <View style={{position: "relative", width: '100%', height: 200,backgroundColor: 'lightgray', marginBottom: 20}}>
            {/* <Image style={{height: '100%', width:'auto'}} source={{uri: '#'}} /> */}
            <Text style={{backgroundColor: 'rgba(200,200,200,0.5)', textTransform: 'capitalize', position: 'absolute', left: 0, bottom: 0, paddingTop: 20, paddingBottom: 20, paddingLeft: 40, paddingRight: 40}}>
              {selectedDish.category}</Text>
          </View>
          <View style={{width: '100%', height: 1, backgroundColor: 'lightgray', marginBottom: 15}} />
          
          <Text style={theme.styles.listTitle}>{selectedDish.name}</Text>
        <Text>{selectedDish.details}</Text>

        </View>

        <Text style={theme.styles.title2}>Liste des ingredients</Text>
        <View style={theme.styles.listDisplayArea}>
          <FlatList
            style={{maxHeight: 340}}
            data={selectedDish.ingredients}
            renderItem={({item}) => <FlatListItem ingredient={item}/>}
            keyExtractor={item => `${selectedDish.name}-${item.name}-${item.id}`}/>
        </View>
      </View>
    </SafeAreaView>
  )
}

/* DetailsScreen.sharedElements = (route) => {
  const { product } = route.params
  return [`element-${product.sortkey}-image`]
}
 */
export default DetailsScreen;