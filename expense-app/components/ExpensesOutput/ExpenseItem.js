import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import { GlobalStyles } from '../../constants/styles';
import { getFormattedDate } from '../../util/Date';


function ExpensesItem({description, amount, date}) {

    function expensePressHandler(){

    }

    return (
        <Pressable onPress={expensePressHandler} style={({pressed}) => pressed && styles.pressed} >
            <View  style={styles.expenseItem}>
                <View>
                    <Text style={[styles.textBase, styles.description]}>{description}</Text>
                    <Text style={[styles.textBase]}>{getFormattedDate(date)}</Text>
                </View>
                <View style={styles.amountContainer}>
                    <Text>{amount.toFixed(2)}</Text>
                </View>
            </View>
        </Pressable>
    );
}

export default ExpensesItem;

const styles = StyleSheet.create({
    expenseItem:{
        padding: 12,
        marginVertical: 6,
        backgroundColor: GlobalStyles.colors.primary500,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 5,
        
        //shadow for android
        elevation: 3,
        
        //shadow for iOS
        shadowColor: GlobalStyles.colors.gray500,
        shadowRadius: 5,
        shadowOffset: {width: 1, height: 1},
        shadowOpacity: 0.4,
    },
    textBase: {
        color: GlobalStyles.colors.primary50,

    },
    description: {
        fontSize: 16,
        marginBottom: 4,
        fontWeight: 'bold',
    },
    amountContainer:{
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: GlobalStyles.colors.white,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2,
        minWidth: 80,
        maxWidth: 80
    },
    amount:{
        color: GlobalStyles.colors.primary500,
        fontWeight: 'bold',
    },
    pressed: {
        opacity: 0.75
    },


});