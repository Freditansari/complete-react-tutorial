import validator from 'validator';
import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './Routers/AppRouter'

import configureStore from './store/configureStore';

//reset css
import 'normalize.css/normalize.css';

import './styles/styles.scss';

import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getVisibleExpenses from './selectors/expenses'


import {Provider} from 'react-redux';

const myStore = configureStore();



myStore.dispatch(addExpense({ description: 'water bill', amount: 100, createdAt:-21000}));
myStore.dispatch(addExpense({ description: 'electric bill', amount: 4500, createdAt:-1000}));

myStore.dispatch(setTextFilter('water'));

setTimeout(() => {
    myStore.dispatch(setTextFilter('bill'))
}, 3000);


let state = myStore.getState();

const filteredExpenses = getVisibleExpenses(state.expenses, state.filters);

console.log(filteredExpenses);

const jsx =(
    <Provider store={myStore}>
        <AppRouter />
    </Provider>
    


);


ReactDOM.render(jsx ,document.getElementById('app'))
