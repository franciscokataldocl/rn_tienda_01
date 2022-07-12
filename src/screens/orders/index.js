import React, { useEffect } from "react";
import { View, FlatList} from "react-native";
import { styles } from "./styles";
import { OrderItem } from "../../components/index";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../../store/actions/order.action";
import { SafeAreaView} from 'react-native-safe-area-context'



const OrdersScreen = () => {
const dispatch = useDispatch();
const orders = useSelector((state) => state.order.items);

 
useEffect(() => {

 dispatch(getOrders());
 
}, [])




  // const renderItem = (item) =>{(
  //   <OrderItem item={item} onDelete={onDeleteOrder}/>
  // )}
  const renderItem = ({ item }) => (
    <OrderItem item={item} onDelete={onDeleteOrder} />
  );

  const onDeleteOrder = () =>{
    console.log('delete order')
  }




  return (
    <SafeAreaView style={{ flex: 1 }}>
    <View style={styles.container}>
        <View style={styles.orderList}>
          <FlatList
          data={orders}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          />
        </View>
    </View>
    </SafeAreaView>
  )
}

export default OrdersScreen;