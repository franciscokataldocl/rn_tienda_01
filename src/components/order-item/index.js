import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import { styles } from './styles';
import { colors } from '../../constants/themes/colors';




const formatDate = time =>{
  const date =  new Date(time);
  return date.toLocaleDateString();
}



const OrderItem = ({item, onDelete}) => {

console.log(item)

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Fecha: {formatDate(item.date)}</Text>
      </View>
      <View style={styles.containerDetail}>
      <View style={styles.detail}>
        <Text style={styles.detailTotal}>Total: {item.total}</Text>
      </View>
      <View style={styles.delete}>
      <TouchableOpacity onPress={() => onDelete(item.id)}>
    <Ionicons name="trash" size={20} color={colors.highlight}/>
      </TouchableOpacity>
      </View>
      </View>
      </View>
  )
}

export default OrderItem;