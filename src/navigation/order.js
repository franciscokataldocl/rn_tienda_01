import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { OrdersScreen } from '../screens';
import {Platform} from 'react-native';
import { colors } from '../constants/themes/colors';


const Stack = createNativeStackNavigator();
const isIOS = Platform.OS === "ios";

const OrdersNavigator = () => {
    return (
      <Stack.Navigator 
      initialRouteName='Orders'

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
        name="Orders"
        component={OrdersScreen}
        
        />
      </Stack.Navigator>
    )
  }
  
  export default OrdersNavigator;