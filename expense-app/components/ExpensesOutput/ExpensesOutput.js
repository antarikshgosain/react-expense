import { FlatList, StyleSheet, Text, View } from 'react-native';
import ExpensesList from './ExpensesList';
import ExpensesSummary from './ExpensesSummary';

const DUMMY_EXPENSE = [
    {id: 'e1', description: 'pair of shoes', amount: 50.11, date: new Date('2024-02-25')},
    {id: 'e2', description: 'amazon boxes', amount: 120.2, date: new Date('2024-02-26')},
    {id: 'e3', description: 'chocolates', amount: 2.6, date: new Date('2024-02-27')},
    {id: 'e4', description: 'apples', amount: 7.50, date: new Date('2024-10-01')},
]

function ExpensesOutput({expenses, expensesPeriod}) {
    return (
        <View>
            <ExpensesSummary expenses={DUMMY_EXPENSE} periodName={expensesPeriod} />
            <ExpensesList expenses={DUMMY_EXPENSE}/>
        </View>
    );
}

export default ExpensesOutput;