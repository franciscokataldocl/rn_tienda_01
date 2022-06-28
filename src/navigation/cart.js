import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CartScreen } from '../screens';
import {Platform} from 'react-native';
import { colors } from '../constants/themes/colors';


const Stack = createNativeStackNavigator();
const isIOS = Platform.OS === "ios";

const CartNavigator = () => {
    return (
      <Stack.Navigator 
      initialRouteName='Cart'

      screenOptions={{
        headerShown:false,
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
        <Stack.Screen  
        name="Cart"
        component={CartScreen}
        options={({route}) => ({
          title: 'Cart'
        })}
        />
      </Stack.Navigator>
    )
  }
  
  export default CartNavigator;