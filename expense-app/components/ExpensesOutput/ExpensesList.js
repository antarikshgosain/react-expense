import { FlatList, StyleSheet, Text, View } from 'react-native';
import ExpensesItem from './ExpenseItem';


function renderExpenseItem(itemData) {
    return <ExpensesItem {...itemData.item} />
}

function ExpensesList({expenses}) {
    return (
        <View>
            <FlatList data={expenses} renderItem={renderExpenseItem} keyExtractor={(item) => item.id } />
        </View>
    );
}

export default ExpensesList;