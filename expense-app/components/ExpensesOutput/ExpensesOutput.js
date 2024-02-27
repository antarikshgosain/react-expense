import { StyleSheet, Text, View } from 'react-native';


function ExpensesOutput({expenses}) {
    return (
        <View>
            <View>
                <Text>Last 7 days</Text>
                <Text>$178.65</Text>
            </View>
            LIST OF EXPENSES
        </View>
    );
}

export default ExpensesOutput;