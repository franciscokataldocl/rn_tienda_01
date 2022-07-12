import { StyleSheet } from 'react-native';
import { colors } from '../../constants/themes/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 10,
    margin: 20,
    height: 180
  },
  containerTouchable: {
    backgroundColor: colors.secondary,
    flex: 1,
    borderRadius: 10,
    shadowColor: colors.shadow,
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 3,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingTop: 10,
    paddingBottom: 40,
    paddingLeft: 30
  },
  title: {
    fontFamily: 'libre-franklin-bold',
    fontSize: 30,
    color: colors.primary
  },
  price: {
    fontFamily: 'khula-light',
    fontSize: 26,
    color: colors.white
  },
  weight: {
    fontFamily: 'libre-franklin-medium',
    fontSize: 18,
    color: colors.gray2
  },

});
