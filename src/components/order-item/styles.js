import { StyleSheet } from 'react-native';
import { colors } from '../../constants/themes/colors';


export const styles = StyleSheet.create({
    container: {
      backgroundColor: colors.primary,
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
      paddingBottom: 10,
      paddingHorizontal:30,
      marginVertical: 10,
    },
    headerContainer: {},
    header: {
      fontFamily: 'libre-franklin-bold',
      fontSize: 18,
      color: colors.white
    },
    containerDetail: {
      flex: 1,
      flexDirection: "row",
      // flexWrap: "wrap",
      alignItems: "center",
      justifyContent: "space-between",

    width:'100%'
    },
    detail: {},
    delete: {},
    detailTotal: {
      fontFamily: 'libre-franklin-regular',
      fontSize: 16,
      color: colors.white,
      width:'100%'
    },
  });
