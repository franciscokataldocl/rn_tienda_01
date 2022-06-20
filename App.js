
import Root from './src/index';
import { ActivityIndicator } from 'react-native';
import { useFonts } from 'expo-font';



export default function App() {
//fuentes
const [loaded] = useFonts({
  'khula-light': require('./assets/fonts/khula/Khula-Light.ttf'),
  'khula-regular': require('./assets/fonts/khula/Khula-Regular.ttf'),
  'libre-franklin-regular': require('./assets/fonts/libre-franklin/LibreFranklin-Regular.ttf'),
  'libre-franklin-medium': require('./assets/fonts/libre-franklin/LibreFranklin-Medium.ttf'),
  'libre-franklin-bold': require('./assets/fonts/libre-franklin/LibreFranklin-Bold.ttf'),
})

if(!loaded){
  return <ActivityIndicator/>;
}
  return (
    <Root/>
  );
}

