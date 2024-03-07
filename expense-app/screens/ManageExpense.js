import { useLayoutEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import Button from "../components/ui/Button.js";
import IconButton from '../components/ui/IconButton.js';
import { GlobalStyles } from "../constants/styles";
function ManageExpense({route, navigation}) {

    const editedExpenseId = route.params?.expenseId;
    const isEditing = !!editedExpenseId; //falsy value = FALSE , truthy value to TRUE

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? 'Edit Expense' : 'Add Expense'
        });
    }, [navigation, isEditing]);

    function deleteExpenseHandler() {

    }

    function cancelHandler() {

    }

    function confirmHandler() {

    }


    return (
        <View style={styles.container}>
            <View>
                <Button mode="flat" onPress={cancelHandler}>Cancel</Button>
                <Button onPress={confirmHandler}>{isEditing ? 'Update':'Add'}</Button>
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
});