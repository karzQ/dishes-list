import React from 'react';
import { SafeAreaView, View, Text, Button } from 'react-native';

import * as theme from '../config/theme';

const SettingsScreen = ({navigation}) => {
    return (
        <SafeAreaView>
            <View style={{padding: 20}}>
                <Text style={theme.styles.title1}>Langue</Text>
            </View>

            <View style={{padding: 20}}>
                <Text style={theme.styles.title1}>Ingrédients</Text>

                <Button style={{padding: 10}}
                    onPress={() => navigation.navigate('CreateIngredient')}
                    title="Créer un ingrédient" />
                
                <Button style={{marginBottom: 10}}
                    onPress={() => navigation.navigate('ModifyIngredient')}
                    title="Modifier un ingrédient" />
            </View>

            <View style={{padding: 20}}>
                <Text style={theme.styles.title1}>Plats</Text>

                <Button style={{marginBottom: 10, height: 20}}
                    onPress={() => navigation.navigate('CreateDish')}
                    title="Créer un plat" />
                
                <Button style={{marginBottom: 10}}
                    onPress={() => navigation.navigate('ModifyDish')}
                    title="Modifier un plat" />
            </View>

        </SafeAreaView>
    )
}

export default SettingsScreen;