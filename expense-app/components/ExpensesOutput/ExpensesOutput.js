import { FlatList, StyleSheet, Text, View } from 'react-native';
import ExpensesList from './ExpensesList';
import ExpensesSummary from './ExpensesSummary';
import { GlobalStyles } from '../../constants/styles';




function ExpensesOutput({expenses, expensesPeriod}) {
    var noResultsRext = "No Expenses Added Yet!"
    let content = <Text style={styles.infoText}>{noResultsRext}</Text>

    if(expenses.length > 0){
        content = <ExpensesList expenses={expenses}/>
    }

    return (
        <View style={styles.container}>
            <ExpensesSummary expenses={expenses} periodName={expensesPeriod} />
            {content}
            
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
    infoText: {
        color: GlobalStyles.colors.white,
        fontSize: 16,
        textAlign: 'center',
        marginTop: 30,
    },

});