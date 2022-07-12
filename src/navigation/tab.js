import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import MainNavigator from './main';
import CartNavigator from './cart';
import OrdersNavigator from './order';
import { colors } from '../constants/themes/colors';
import {Text} from 'react-native';

const BottomTabs = createBottomTabNavigator();

const LabelBottomTab = (focused, label) =>{
return(
  <Text
style={{color: focused ? colors.black : colors.gray,
fontFamily: focused ? 'libre-franklin-bold': 'libre-franklin-regular'}}>
  {label}
</Text>
)
}

//----------------------------------------------------------------

const TabNavigator = () => {
  return (
    <BottomTabs.Navigator 
    initialRouteName='ShopTab'
    screenOptions={{
      headerShown: false,
     
    }}>

      <BottomTabs.Screen
        name='ShopTab'
        component={MainNavigator}
        options={{
          tabBarLabel: ({focused}) => LabelBottomTab(focused,"Shop"),
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? 'home' : 'home-outline'}
              size={22}
              color={focused ? colors.primary : colors.gray1}
            />
          )
        }}
      />

      <BottomTabs.Screen
        name='CartTab'
        component={CartNavigator}
        options={{
          tabBarLabel:  ({focused}) => LabelBottomTab(focused,"Cart"),
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? 'cart' : 'cart-outline'}
              size={22}
              color={focused ? colors.primary : colors.gray1}
            />
          )
        }}
      />

<BottomTabs.Screen
        name='OrderTab'
        component={OrdersNavigator}
        options={{
          tabBarLabel:  ({focused}) => LabelBottomTab(focused,"Orders"),
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? 'file-tray-full' : 'file-tray-full-outline'}
              size={22}
              color={focused ? colors.primary : colors.gray1}
            />
          )
        }}
      />


    </BottomTabs.Navigator>
  );
};

export default TabNavigator;
