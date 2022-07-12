import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  SafeAreaView
} from 'react-native';
import { styles } from './styles';
import { CartItem } from '../../components';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, confirmCart } from '../../store/actions/cart.actions';

const CartScreen = () => {
  const dispatch = useDispatch();
  const items = useSelector(state => state.cart.items);
  const total = useSelector(state => state.cart.total);

  const handleDeleteItem = id => {
    dispatch(removeItem(id));
  };

  const handleConfirmCart = () => {
    dispatch(confirmCart(items, total));
  };


  const renderItem = ({ item }) => (
    <CartItem item={item} onDelete={handleDeleteItem} />
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.cartList}>
          <FlatList
            data={items}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </View>
        <View style={styles.footer}>
          <TouchableOpacity
            style={styles.btnConfirm}
            onPress={() => handleConfirmCart()}
          >
            <Text style={styles.btnText}>Confirmar</Text>
            <View style={styles.totalContainer}>
              <Text style={styles.totalTitle}>Total</Text>
              <Text style={styles.total}>{total}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CartScreen;
