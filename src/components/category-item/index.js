import React from 'react';
import { View, TouchableOpacity, Text,ImageBackground } from 'react-native';
import { styles } from './styles';

const CategoryItem = ({item, onSelected}) => {


  return (

<ImageBackground 
    style={styles.image}
    source={{
      uri:
      item.image,
  }}
    resizeMode="cover"
      >
     
        <TouchableOpacity
        style={{...styles.containerTouchable}}
        onPress={()=> onSelected(item)}
        > 
        <View>
            <Text style={styles.title}>{item.title}</Text>
        </View>
        </TouchableOpacity>
    
    </ImageBackground>
 
  )
}

export default CategoryItem