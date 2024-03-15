import { FlatList, StyleSheet, Text, View } from 'react-native';
import ExpensesList from './ExpensesList';
import ExpensesSummary from './ExpensesSummary';
import { GlobalStyles } from '../../constants/styles';




function ExpensesOutput({expenses, expensesPeriod}) {
    return (
        <View style={styles.container}>
            <ExpensesSummary expenses={expenses} periodName={expensesPeriod} />
            <ExpensesList expenses={expenses}/>
        </View>
    );
}

export default ExpensesOutput;

const styles = StyleSheet.create({
    container:{
        padding: 20,
        backgroundColor: GlobalStyles.colors.primary700,
        flex: 1, //take all available screen (for background color)
        paddingBottom: 40, //adjust spacing at the end of the list
    },

});