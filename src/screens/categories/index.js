import React from 'react';
import {View,Button, FlatList} from 'react-native';
import {styles} from './styles';
import { categories } from '../../data/categories';//datos
import CategoryItem from '../../components/category-item/index';



const CategoriesScreen = ({navigation}) => {

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
  navigation.navigate('Products', {
    categoryId: item.id,
    title: item.title
  })
}


  const renderItem =({item}) => (
    <CategoryItem item={item} onSelected={onSelected}/>
  )

  return (
    <View style={styles.container}>
      <FlatList
      data={categories}
      renderItem={renderItem}
      keyExtractor={(item)=> item.id}
      
      />
        {/* <Text style={styles.title}>categories</Text> */}
        {/* <Button title="Productos" onPress={() => navigation.navigate('Products')}/> */}
    </View>
  )
}

export default CategoriesScreen;