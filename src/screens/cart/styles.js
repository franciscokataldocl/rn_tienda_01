import { StyleSheet } from "react-native";
import { colors } from '../../constants/themes/colors';


export const styles = StyleSheet.create({
container:{
    flex: 1,
    backgroundColor: '#fff',
    padding:10,

},
footer:{
    borderTopColor: colors.primary,
    borderTopWidth:1,

},
cartList:{
    flex: 1,

},
btnConfirm:{
    backgroundColor: colors.secondary,
    borderRadius:5,
    paddingHorizontal: 30,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',


},
btnText:{
   fontSize: 18,
   fontFamily: 'libre-franklin-bold',
},
totalTitle:{
    fontSize: 14,
   fontFamily: 'libre-franklin-bold',
   

},
total:{
    fontSize: 40,
   fontFamily: 'khula-light',

},
totalContainer:{

}

})