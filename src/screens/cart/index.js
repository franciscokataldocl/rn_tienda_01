import React from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import { styles } from './styles';
import { cart } from '../../data/cart';
import { CartItem } from '../../components';




const CartScreen = () => {

  const total = 12000;

const handleDeleteItem = (id) =>{

}

const handleConfirmCart = () =>{

}


  const renderItem = ({item}) =>{
    return(
      <CartItem item={item} onDelete={handleDeleteItem}/>
    )
  }



  return (
    <View style={styles.container}>
        <View style={styles.cartList}>
          <FlatList
          data={cart}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          />
        </View>
        <View style={styles.footer}>
          <TouchableOpacity 
          style={styles.btnConfirm}
          onPress={()=> handleConfirmCart()}
          >
          <Text style={styles.btnText}>Confirmar</Text>
          <View style={styles.totalContainer}>
          <Text style={styles.totalTitle}>Total</Text>
          <Text style={styles.total}>{total}</Text>
            
          </View>
          </TouchableOpacity>
        </View>
    </View>
  )
}

export default CartScreen;