import { useContext } from "react";
import { Text } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { ExpenseContext } from "../store/expenses-context";
import { getDateMinusDays } from "../util/Date";


function RecentExpenses() {
    const expensesCtx = useContext(ExpenseContext);
    const recentExpenses = expensesCtx.expenses.filter((expense) => {
        const today = new Date();
        const date7DaysAgo = getDateMinusDays(today, 7);
        //console.log("is recent? : ",expense,expense.date > date7DaysAgo);
        return expense.date > date7DaysAgo;
    });
    return <ExpensesOutput expenses={recentExpenses} expensesPeriod="Last 7 days"></ExpensesOutput>

}


export default RecentExpenses;