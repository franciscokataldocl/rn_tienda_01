import React from 'react';
import {View,FlatList, SafeAreaView} from 'react-native';
import {styles} from './styles';
import CategoryItem from '../../components/category-item/index';
import {useSelector, useDispatch} from 'react-redux'
import { selectCategory } from '../../store/actions/category.action';




const CategoriesScreen = ({navigation}) => {

  const dispatch = useDispatch();

  //categorias
const categories = useSelector(state => state.category.categories);
//categoria seleccionada del state
// const categorySelected = useSelector(state => state.category.selected);
// const categoryProducts = useSelector(state => state.product.filteredProducts);


  /*
  En onSelected lo que hacemos es enviar a una ruta con parametros
  como si fuera una url Products&categoryId=1&title=titulo
  es ese titulo el que luego en main navigation usamos como titulo

   options={({route}) => ({
          title: route.params.title
        })}

        con esto, estamos modificando el titulo de la barra de navegacion
  */
const onSelected = (item)=>{
  dispatch(selectCategory(item.id))
  navigation.navigate('Products', {
    categoryId: item.id,
    title: item.title
  })
}


  const renderItem =({item}) => (
    <CategoryItem item={item} onSelected={onSelected}/>
  )

  return (
    <SafeAreaView style={{ flex: 1 }}>
    <View style={styles.container}>
      <FlatList
      data={categories}
      renderItem={renderItem}
      keyExtractor={(item)=> item.id}
      
      />
        {/* <Text style={styles.title}>categories</Text> */}
        {/* <Button title="Productos" onPress={() => navigation.navigate('Products')}/> */}
    </View>
    </SafeAreaView>
  )
}

export default CategoriesScreen;