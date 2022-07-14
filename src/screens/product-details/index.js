import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { styles } from './styles';

import { useSelector, useDispatch } from 'react-redux';
import { addItem } from '../../store/actions/cart.actions';

const ProductDetailScreen = () => {
  const dispatch = useDispatch();
  const product = useSelector(state => state.product.selected);

  const handleAddToCart = () => {
    dispatch(addItem(product));
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
    <View style={styles.container}>
     <View style={styles.card}>
     <Text style={styles.title}>{product.title}</Text>
     <View style={styles.detailContainer}>
     <Text style={styles.description}>descripcion: {product.description}</Text>
      {/* <Text style={styles.weight}>peso: {product.weight}</Text> */}
      <Text style={styles.price}>precio: {product.price}</Text>
     </View>
      {/* <Button
      style={styles.btnRounded}
        color={colors.primary}
        title='COMPRAR'
        
      /> */}
      <TouchableOpacity 
      style={styles.btnRounded} 
      onPress={() => handleAddToCart()}>
        <Text style={styles.btnRoundedText}>COMPRAR</Text>
      </TouchableOpacity>
     </View>
    </View>
    </SafeAreaView>
  );
};

export default ProductDetailScreen;
