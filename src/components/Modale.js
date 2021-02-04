import React from 'react';
import { SafeAreaView, StyleSheet, Pressable, View, Text, FlatList, Image, TouchableWithoutFeedback, TouchableHighlight, Modal } from 'react-native';

function Modale({route}) {
    const {selectedDish} = route.params;

    return (
        <View>
            <Modal
                style={styles.modalContainer}
                animationThype='fade'
                transparent={true}>

                <Image source={{uri: "https://via.placeholder.com/468x60?text=Visit+Blogging.com+Now"}} />
                
                <Text>{selectedDish.name}</Text>
                <Text style={{textTransform: 'capitalize'}}>{selectedDish.category}</Text>
                <Text>{selectedDish.details}</Text>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    modalContainer: {
        position: 'absolute',
        width: '100%',
        height: '100px',
        backgroundColor: "#C4C4C4"
    }
});



export default Modale;