import { StyleSheet } from 'react-native';
import { colors } from '../../constants/themes/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    borderRadius: 10,
    marginVertical: 30,
    paddingVertical:30,
    paddingHorizontal: 30,
    shadowColor: colors.shadow,
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 3,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    

  },
  headerContainer: {
    flex: 1
  },
  quantity: {
    fontSize:20,
    color: colors.white,
    fontFamily: 'khula-light',
  },
  price: {
    fontSize:20,
    color: colors.white,
    fontFamily: 'khula-light',
  },
  title:{
    fontSize:20,
    color: colors.white,
    fontFamily: 'libre-franklin-bold',
  }
});

// fontFamily: 'libre-franklin-bold',
// fontFamily: 'khula-light',
