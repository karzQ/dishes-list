import { StyleSheet, Dimensions } from 'react-native';
export const { width, height } = Dimensions.get('screen');

export const DEFAULT_COLOR = '#0067B3';
export const TEXT_COLOR = 'white';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    tabBar: {
      backgroundColor: '#0067B3',
      paddingTop: 5
    },
    tabBarLabel: {
      paddingVertical: 5,
      fontWeight: '700'
    },
    listTitle: {fontSize: 18, fontWeight: '700', marginBottom: 6},

    title1: {
      fontSize: 24,
      fontWeight: '500',
      marginBottom: 20
    },
    title2: {
      fontSize: 16,
      fontWeight: '500',
      marginBottom: 10
    },

    listDisplayArea: {
      backgroundColor: 'rgb(235, 235, 235)',
      padding: 15,
      marginBottom: 15
    },

    button: {
      padding: 15,
      backgroundColor: DEFAULT_COLOR,
      width: 'fit-content'
    }
})