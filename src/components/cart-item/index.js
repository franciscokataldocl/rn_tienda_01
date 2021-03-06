import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { styles } from './styles';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../constants/themes/colors';



const CartItem = ({ item, onDelete }) => {
console.log(item)
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>{item.name} {item.title}</Text>
      </View>
      <View style={styles.containerDetail}>
        <Text style={styles.quantity}>Cantidad: {item.quantity}</Text>
        <Text style={styles.price}>$ {item.price}</Text>

      </View>
      <TouchableOpacity
      onPress={()=> onDelete(item.id)}>
        < Ionicons
        name="trash"
        size={22}
        color={colors.highlight}/>
      </TouchableOpacity>
    </View>
  );
};

export default CartItem;
