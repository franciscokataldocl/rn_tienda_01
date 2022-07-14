import React, {useEffect} from 'react';
import {View, FlatList, SafeAreaView} from 'react-native';
import {styles} from './styles';
import ProductItem from '../../components/product-item/index';
import { useSelector, useDispatch } from 'react-redux';
import {filteredProducts, selectProduct} from '../../store/actions/product.action';





const ProductScreen = ({navigation}) => {

const dispatch = useDispatch();
  //categorias
  const filterProducts = useSelector((state) => state.product.filteredProducts)
  const category = useSelector((state) => state.category.selected);


useEffect(() => {
  dispatch(filteredProducts(category.id));
}, [])




const onSelected = (item) =>{
  dispatch(selectProduct(item.id))
  navigation.navigate('ProductDetails', {
    productId: item.id,
    title: item.title
  });
}





const renderItem = ({item}) => (
  <ProductItem item={item} onSelected={onSelected}/>
)



  return (
    <SafeAreaView style={{ flex: 1 }}>
    <View style={styles.container}>
        <FlatList
        data={filterProducts}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        />
    </View>
    </SafeAreaView>
  )
}

export default ProductScreen;