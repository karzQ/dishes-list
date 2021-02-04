import React, { useEffect, useState } from 'react'
import {ScrollView, StyleSheet, Text, View, Image, Dimensions} from 'react-native'
import { SharedElement } from 'react-navigation-shared-element'
import * as Animatable from 'react-native-animatable'
const { width, height } = Dimensions.get('screen')

import * as theme from '../config/theme'
import { NavigationHelpersContext } from '@react-navigation/native'

const DetailsScreen = ({ route }) => {

  return (
    <View style={theme.styles.container}>
      
    </View>
  )
}

/* DetailsScreen.sharedElements = (route) => {
  const { product } = route.params
  return [`element-${product.sortkey}-image`]
}
 */
export default DetailsScreen;