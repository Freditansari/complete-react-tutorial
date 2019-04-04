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


//addExpenses -> water bill
//addexpenses -> gas bill
//settextfilter -> bill (water)
//getvisibleexpenses -> print visibleones to screen

const store = configureStore();



store.dispatch(addExpense({ description: 'water bill', amount: 100, createdAt:-21000}));
store.dispatch(addExpense({ description: 'electric bill', amount: 500, createdAt:-1000}));

store.dispatch(setTextFilter('water'));


let state = store.getState();

const filteredExpenses = getVisibleExpenses(state.expenses, state.filters);

console.log(filteredExpenses);

ReactDOM.render(<AppRouter /> ,document.getElementById('app'))
