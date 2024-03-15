import { useContext, useLayoutEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import Button from "../components/ui/Button.js";
import IconButton from '../components/ui/IconButton.js';
import { GlobalStyles } from "../constants/styles";
import {ExpenseContext} from "../store/expenses-context"

function ManageExpense({route, navigation}) {

    const expenseCtx = useContext(ExpenseContext);
    const editedExpenseId = route.params?.expenseId;
    const isEditing = !!editedExpenseId; //falsy value = FALSE , truthy value to TRUE

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? 'Edit Expense' : 'Add Expense'
        });
    }, [navigation, isEditing]);

    function deleteExpenseHandler() {
        expenseCtx.deleteExpense(editedExpenseId);
        navigation.goBack();    
    }

    function cancelHandler() {
        navigation.goBack();
    }

    function confirmHandler() {
        if(isEditing){
            expenseCtx.updateExpense(editedExpenseId,{description: 'entry updated', amount: 10, date: new Date()});;
        }
        if(!isEditing){
            expenseCtx.addExpense({description: 'entry added', amount: 10, date: new Date()});
        }


        navigation.goBack();
    }


    return (
        <View style={styles.container}>
            <View style={styles.buttonsContainer}>
                <Button style={styles.button} mode="flat" onPress={cancelHandler}>Cancel</Button>
                <Button style={styles.button} onPress={confirmHandler}>{isEditing ? 'Update':'Add'}</Button>
            </View>
            {isEditing && 
                <View style={styles.deleteContainer}>
                    <IconButton icon='trash' color={GlobalStyles.colors.error500} size={36} onPress={deleteExpenseHandler}/>
                </View>
            }
        </View>
    );
    

}

export default ManageExpense;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: GlobalStyles.colors.primary800,
    },
    deleteContainer: {
        marginTop: 16,
        paddingTop: 8,
        borderTopWidth: 2,
        borderTopColor: GlobalStyles.colors.primary200,
        alignItems: 'center',
    },
    buttonsContainer:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button:{
        minWidth: 120,
        marginHorizontal: 8,
    },
});