import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { styles } from './styles';


const ProductItem = ({item, onSelected}) => {
  return (
    <View style={styles.container}>
        <TouchableOpacity
        style={{...styles.containerTouchable}}
        onPress={()=> onSelected(item)}
        > 
        <View>
            <Text style={styles.title}>{item.title}</Text>
        </View>
        <View>
            <Text style={styles.price}>Precio: {item.price}</Text>
        </View>
        <View>
            <Text style={styles.weight}>Peso: {item.weight}</Text>
        </View>
        </TouchableOpacity>
    </View>
  )
}

export default ProductItem