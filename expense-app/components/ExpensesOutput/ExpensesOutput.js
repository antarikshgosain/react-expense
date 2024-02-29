import { FlatList, StyleSheet, Text, View } from 'react-native';
import ExpensesList from './ExpensesList';
import ExpensesSummary from './ExpensesSummary';
import { GlobalStyles } from '../../constants/styles';


const DUMMY_EXPENSE = [
    {id: 'e1', description: 'pair of shoes', amount: 50.11, date: new Date('2024-02-25')},
    {id: 'e2', description: 'amazon boxes', amount: 120.2, date: new Date('2024-02-26')},
    {id: 'e3', description: 'chocolates', amount: 2.6, date: new Date('2024-02-27')},
    {id: 'e4', description: 'apples', amount: 7.50, date: new Date('2024-10-01')},
    {id: 'e5', description: 'pair of shoes', amount: 50.11, date: new Date('2024-02-25')},
    {id: 'e6', description: 'amazon boxes', amount: 120.2, date: new Date('2024-02-26')},
    {id: 'e7', description: 'chocolates', amount: 2.6, date: new Date('2024-02-27')},
    {id: 'e8', description: 'apples', amount: 7.50, date: new Date('2024-10-01')},
    {id: 'e9', description: 'pair of shoes', amount: 50.11, date: new Date('2024-02-25')},
    {id: 'e10', description: 'amazon boxes', amount: 120.2, date: new Date('2024-02-26')},
    {id: 'e11', description: 'chocolates', amount: 2.6, date: new Date('2024-02-27')},
    {id: 'e12', description: 'apples', amount: 7.50, date: new Date('2024-10-01')},
]

function ExpensesOutput({expenses, expensesPeriod}) {
    return (
        <View style={styles.container}>
            <ExpensesSummary expenses={DUMMY_EXPENSE} periodName={expensesPeriod} />
            <ExpensesList expenses={DUMMY_EXPENSE}/>
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