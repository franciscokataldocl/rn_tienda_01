import { StyleSheet } from 'react-native';
import { colors } from '../../constants/themes/colors';

export const styles = StyleSheet.create({
  containerKeyboard: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width:'80%',
    maxWidth: 400,
    padding: 15,
    margin: 15,
    borderColor: colors.primary,
    borderWidth:1,
    borderRadius:10,
    backgroundColor: colors.white
  },
  title: {
    fontSize: 18,
    fontFamily: 'libre-franklin-bold',
    marginBottom: 15,
    textAlign: 'center',

  },
  prompt:{
    alignItems: 'center',
  },
  promptMessage:{
    fontSize: 14,
    fontFamily: 'khula-regular',
    color: colors.secondary,
  },
  promptButton:{
    fontSize: 14,
    fontFamily: 'khula-regular',
    color: colors.black,
    textAlign: 'center',
  },
  promptButtonDos:{
    fontSize: 14,
    fontFamily: 'khula-regular',
    color: colors.primary,
    textAlign: 'center',
  }

});
