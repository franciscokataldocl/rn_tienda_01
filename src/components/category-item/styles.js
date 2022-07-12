import { StyleSheet } from 'react-native';
import { colors } from '../../constants/themes/colors';

export const styles = StyleSheet.create({

  containerTouchable: {
    flex: 1,
    height: 180,
    backgroundColor: colors.secondaryOpacity,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingTop: 10,
    paddingBottom: 40,
    paddingLeft: 30,
    borderRadius: 10,

  },
  title: {
    fontFamily: 'libre-franklin-bold',
    fontSize: 30,
    color: colors.white
  },
  image:{
    flex: 1,
    margin: 20,
    height: 180,
    borderRadius: 10,
    overflow: 'hidden'
    
  }
});
