import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CategoriesScreen, ProductScreen, ProductDetailScreen } from '../screens';
import {Platform} from 'react-native';
import { colors } from '../constants/themes/colors';


const Stack = createNativeStackNavigator();
const isIOS = Platform.OS === "ios";

const MainNavigator = () => {
    return (
      <Stack.Navigator 
      initialRouteName='Categories'

      screenOptions={{
        headerStyle: {
          backgroundColor: isIOS ? colors.secondary : colors.primary,
        },
        headerTintColor:colors.black,
        headerTitleStyle:{
          fontFamily: 'libre-franklin-bold',
          fontWeight: 'bold',
        }
      }}
      >
        <Stack.Screen  name="Categories" component={CategoriesScreen}/>
        <Stack.Screen  
        name="Products"
        component={ProductScreen}
        options={({route}) => ({
          title: route.params.title
        })}
        />
        <Stack.Screen  
        name="ProductDetails" 
        component={ProductDetailScreen}
        options={({route}) => ({
          title: route.params.title
        })}
        />
      </Stack.Navigator>
    )
  }
  
  export default MainNavigator;