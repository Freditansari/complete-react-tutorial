import {createStore, combineReducers, bindActionCreators} from 'redux';
import uuid from 'uuid';
/**
 * add_expense
 * remove_expense
 * edit_expense
 * set_text_filter
 * sort_by_date
 * sort_byamount
 * set_start_date
 * set_end_date
 */

 const addExpense = (
     {
         description = '', 
         note ='', 
         amount =0, 
         createdAt =0
    }={}) =>({
     type: 'ADD_EXPENSE',
     expense:{
         id:uuid(),
         description,
         note, 
         amount, 
         createdAt
     }

 });

 const removeExpense = (
    {
        id = '0'
   }={}) =>({
    type: 'REMOVE_EXPENSE',
    id

});

 const expensesReducerDefaultState = []

 const expensesReducer =(state =expensesReducerDefaultState, action) =>{
    switch(action.type){
        case 'ADD_EXPENSE':
         //return state.concat(action.expense);
         return [...state, action.expense];

         case 'REMOVE_EXPENSE':
         return state.filter(({id}) => {
             return id !== action.id;
         });
         

        default:
         return state;
    }


 };

 const filterReducerDefaultState = {
     text :'',
     sortBy: 'date',
     startDate: undefined,
     endDate: undefined

 };

 const filtersReducer =(state = filterReducerDefaultState, action) =>{
    switch(action.type){
        default:
         return state;
    }

 };


 //store creation

 const store = createStore(
     combineReducers({
         expenses: expensesReducer,
         filters: filtersReducer

     })
);

store.subscribe(()=>{console.log(store.getState())});

const expense1 =store.dispatch(addExpense({ description: 'Rent', amount: 100}));
const expense2 = store.dispatch(addExpense({ description: 'coffee', amount: 300}));

store.dispatch(removeExpense({id: expense1.expense.id}));

const demoState ={
    expenses:[{
        id :'sasdasdasdsad',
        description : 'January rent',
        note: ' this is final payment for abc', 
        amount : 54500,
        createdAt : 0
    }],
    filters:{
        text:'rent',
        sortBy: 'amount', //date or amount
        startDate: undefined,
        endDate: undefined
    }
};

const user = {
    name : 'potato', 
    age: 15
}

console.log({...user, location: 'jakarta', age: 27})