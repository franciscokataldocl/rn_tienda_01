import React from 'react';
import { View, Text, Button } from 'react-native';
import { styles } from './styles';
import { colors } from '../../constants/themes/colors';

import { useSelector, useDispatch } from 'react-redux';
import { addItem } from '../../store/actions/cart.actions';

const ProductDetailScreen = () => {
  const dispatch = useDispatch();
  const product = useSelector(state => state.product.selected);

  const handleAddToCart = () => {
    dispatch(addItem(product));
  };

  return (
    <View style={styles.container}>
      <Text>id: {product.id}</Text>
      <Text>nombre: {product.title}</Text>
      <Text>descripcion: {product.description}</Text>
      <Text>peso: {product.weight}</Text>
      <Text>precio: {product.price}</Text>
      <Button
        color={colors.primary}
        title='Add to cart'
        onPress={() => handleAddToCart()}
      />
    </View>
  );
};

export default ProductDetailScreen;
