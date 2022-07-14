import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthScreen } from '../screens';
import {Platform} from 'react-native';
import { colors } from '../constants/themes/colors';


const Stack = createNativeStackNavigator();
const isIOS = Platform.OS === "ios";

const AuthNavigator = () => {
    return (
      <Stack.Navigator 
      initialRouteName='AuthScreen'

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
        name="Auth"
        component={AuthScreen}
        options={
            {headerShown:false,}
        }
        />
      </Stack.Navigator>
    )
  }
  
  export default AuthNavigator;