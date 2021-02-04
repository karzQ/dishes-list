import { StyleSheet, Dimensions } from 'react-native';
export const { width, height } = Dimensions.get('screen');

export const DEFAULT_COLOR = '#00202B';
export const TEXT_COLOR = 'white';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    button: {
      width: 50,
      height: 20
    },
    tabBar: {
      backgroundColor: '#0067B3',
      paddingTop: 5
    },
    tabBarLabel: {
      paddingVertical: 5,
      fontWeight: '700'
    },
    listTitle: {fontSize: 18, fontWeight: '700', marginBottom: 6}
})