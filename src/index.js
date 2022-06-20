import { StatusBar } from 'expo-status-bar';
import {Text, View } from 'react-native';
import {styles} from './styles';
import AppNavigator from './navigation/index';



export default function Root() {
  return (
    <AppNavigator/>
  );
}

