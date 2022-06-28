import React from 'react';
import {View, FlatList} from 'react-native';
import {styles} from './styles';
import { products } from '../../data/products';//data
import ProductItem from '../../components/product-item/index';




const ProductScreen = ({navigation, route}) => {

const {categoryId} = route.params;

const filterProducts = products.filter(product => product.categoryId=== categoryId)



const onSelected = (item) =>{
  navigation.navigate('ProductDetails', {
    productId: item.id,
    title: item.title
  });
}





const renderItem = ({item}) => (
  <ProductItem item={item} onSelected={onSelected}/>
)



  return (
    <View style={styles.container}>
        <FlatList
        data={filterProducts}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        />
    </View>
  )
}

export default ProductScreen;