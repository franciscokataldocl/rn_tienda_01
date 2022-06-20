import React from 'react';
import {View, Text, Button} from 'react-native';
import {styles} from './styles';

const ProductScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Product Screen</Text>
        <Button title="Categorías" onPress={() => navigation.navigate('Categories')}/>
    </View>
  )
}

export default ProductScreen;