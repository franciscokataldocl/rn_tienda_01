import { StyleSheet } from "react-native";
import { colors } from '../../constants/themes/colors';

export const styles = StyleSheet.create({
container:{
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
},
card:{
    backgroundColor: colors.secondary,
    borderRadius: 10,
    shadowColor: colors.grey1,
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 3,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingHorizontal:30,
    paddingVertical:30,
    width: '90%',
    marginHorizontal: 30,
    marginVertical: 30,
},
title: {
color: colors.primary,
fontSize: 30,
fontFamily: 'libre-franklin-bold',

},
detailContainer: {

},
description: {
    color: colors.gray2,
    fontSize: 18,
    fontFamily: 'khula-light',
},
weight:{
    color: colors.gray2,
    fontSize: 16,
    fontFamily: 'libre-franklin-regular',
},
price:{
    color: colors.white,
    fontSize: 30,
    fontFamily: 'khula-light',
},
btnRounded:{
    borderRadius: 100,
    backgroundColor: colors.primary,
    paddingHorizontal: 20,
    paddingVertical: 10,
    textAlign: 'center',
},
btnRoundedText:{
    color: colors.white,
    fontSize: 18,
    fontFamily: 'khula-light',

}



})