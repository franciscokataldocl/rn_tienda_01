import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CategoriesScreen, ProductScreen, ProductDetailScreen } from '../screens';

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
    return (
      <Stack.Navigator initialRouteName='Categories'>
        <Stack.Screen  name="Categories" component={CategoriesScreen}/>
        <Stack.Screen  name="Products" component={ProductScreen}/>
        <Stack.Screen  name="ProductDetails" component={ProductDetailScreen}/>
      </Stack.Navigator>
    )
  }
  
  export default MainNavigator;