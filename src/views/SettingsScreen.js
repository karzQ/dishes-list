import React, {useState} from 'react';
import { SafeAreaView, View, Text, Button, Switch } from 'react-native';
// import RNPickerSelect from 'react-native-picker-select';

import * as theme from '../config/theme';

const SettingsScreen = ({navigation}) => {

    const [appLang, setAppLang] = useState('fr');

    const languages = [
        { label: 'Français', value: 'fr' },
        { label: 'Anglais', value: 'en' }
    ]    

    return (
        <SafeAreaView>
            <View style={{padding: 20}}>
                <Text style={theme.styles.title1}>Langue</Text>
                <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-start' }}>                    
                    {/* <RNPickerSelect
                        style={{ height: 20, paddingLeft: 10, border: "none" }}
                        placeholder="Choisir une langue"
                        onValueChange={(lang) => setAppLang(lang)}
                        items={languages}
                        useNativeAndroidPickerStyle={false}
                        value={appLang}/> */}
                </View>
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