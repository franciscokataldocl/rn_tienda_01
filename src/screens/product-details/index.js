import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';
import { useSelector } from 'react-redux';


const ProductDetailScreen = () => {

  const product = useSelector((state) => state.product.selected)

// const product = products.find(product => product.id === productId);

  return (
    <View style={styles.container}>
        <Text>id: {product.id}</Text>
        <Text>nombre: {product.title}</Text>
        <Text>descripcion: {product.description}</Text>
        <Text>peso: {product.weight}</Text>
        <Text>precio: {product.price}</Text>
    </View>
  )
}

export default ProductDetailScreen;