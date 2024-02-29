import { FlatList, StyleSheet, Text, View } from 'react-native';
import { GlobalStyles } from '../../constants/styles';

function ExpensesSummary({periodName, expenses}) {

    const expensesSum = expenses.reduce( (sum, expense) => { return sum + expense.amount } , 0); 
    //reduce method will give total by adding all expense.amount to variable 'sum' (initially zero)

    return (
        <View style={styles.container}>
            <Text style={styles.period}>{periodName}</Text>
            <Text style={styles.sum}>$ {expensesSum.toFixed(2)}</Text>
        </View>
    );
}

export default ExpensesSummary;


const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: GlobalStyles.colors.primary50,
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    period: {
        fontSize: 12,
        color: GlobalStyles.colors.primary400,

    },
    sum:{
        fontWeight: 20,
        fontWeight: 'bold',
        color: GlobalStyles.colors.primary500
    },
});