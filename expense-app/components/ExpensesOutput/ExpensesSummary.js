import { FlatList, StyleSheet, Text, View } from 'react-native';


function ExpensesSummary({periodName, expenses}) {

    const expensesSum = expenses.reduce( (sum, expense) => { return sum + expense.amount } , 0); 
    //reduce method will give total by adding all expense.amount to variable 'sum' (initially zero)

    return (
        <View>
            <Text>{periodName}</Text>
            <Text>$ {expensesSum.toFixed(2)}</Text>
        </View>
    );
}

export default ExpensesSummary;