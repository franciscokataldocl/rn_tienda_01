import React from 'react';
import {View, Text, Button} from 'react-native';
import {styles} from './styles';

const CategoriesScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>categories</Text>
        <Button title="Productos" onPress={() => navigation.navigate('Products')}/>
    </View>
  )
}

export default CategoriesScreen;