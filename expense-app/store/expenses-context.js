import { createContext, useReducer, } from 'react';

const DUMMY_EXPENSE = [
    {id: 'e1', description: 'Sample Expense 1', amount: 12.34, date: new Date('2024-03-10')},
    {id: 'e2', description: 'amazon ON whey', amount: 120.2, date: new Date('2024-02-10')},
    {id: 'e3', description: 'chocolates', amount: 2.6, date: new Date('2024-01-27')},
    {id: 'e4', description: 'apples', amount: 7.50, date: new Date('2023-10-01')},
]

export const ExpenseContext = createContext({
    //createContext() method is passed some initial values 
    //these inital values will be used for auto-completion
    //this defines shape of the Context Data
    expenses: [],
    addExpense: ({description, amount, date}) => {},
    deleteExpense: (id) => {},
    updateExpense: (id, {description, amount, date}) => {},
});

//Job of reducer is to return a new state value
function expensesReducer(state, action){
    switch (action.type) {
        case 'ADD':
            const id = new Date().toString() + Math.random().toString();
            return [ { ...action.payload, id: id} , ...state]
        case 'UPDATE':
            const updateableExpenseIndex = state.findIndex((expense) => expense.id === action.payload.id);
            const updateableExpense = state[updateableExpenseIndex];
            const updatedItem = {...updateableExpense, ...action.payload.data};
            const udpatedExpenses = [...state];
            updateExpenses[updateableExpenseIndex] = updatedItem;
            return udpatedExpenses;
        case 'DELETE':
            return state.filter((expense) => expense.id !== action.payload);
        default:
            return state;
    }
}

//actual provider function that holds the logic
//(react component function)
function ExpensesContextProvider({children}){
    
    //DUMMY_EXPENSE is the initial value before reducer is executed for the 1st time
    const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSE); 
    //dispatch() is used to execute a new action to the expensesReducer() function above^
    //this manipulates the state and returns the new state

    function addExpense(expenseData){
        dispatch({type: 'ADD', payload: expenseData});
        //type matches with switch(action.type)
    }

    function deleteExpense(id){
        dispatch({type: 'DELETE', payload: id});
    }

    function updateExpense(id, expenseData){
        dispatch( { type: 'UPDATE', payload: { id : id, data : expenseData } } );
    }

    const value = {
        expenses: expensesState,
        addExpense: addExpense,
        deleteExpense: deleteExpense,
        updateExpense: updateExpense,
    };

    return <ExpenseContext.Provider value={value}>{children}</ExpenseContext.Provider>
}   

export default ExpensesContextProvider;
