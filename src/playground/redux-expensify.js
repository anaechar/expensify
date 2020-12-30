import { createStore, combineReducers } from 'redux';

// timestamps ms
// Jan 1st 1970 (unix epoch)
// 33400, 10 , -203

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100, createdAt: -21000 }));
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 300, createdAt: -1000 }));

// store.dispatch(removeExpense({ id: expenseOne.expense.id }));

// store.dispatch(editExpense(expenseTwo.expense.id, { amount: '$5.00' }));

// store.dispatch(setTextFilter('red'));
// store.dispatch(setTextFilter());

store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(125));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(1250));

const demoState = {
    expenses: [{
        id: 'thisisid',
        description: 'Jan Rent',
        note: 'This was final payment for that',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', //date or amount
        startDate: undefined,
        endDate: undefined
    }
};

// example of using ... instead of .concat
// const user = {
//     name: 'Jen',
//     age: 24
// };

// console.log({
//     age: 27,
//     ...user,
//     location: 'Philadelphia'
// });