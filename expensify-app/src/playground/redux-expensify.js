import {createStore, combineReducers, bindActionCreators} from 'redux';
import uuid from 'uuid';


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

const editExpense =(id, updates)=>(
    {
        type: "EDIT_EXPENSE", 
        id, 
        updates
    }
);

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

         case 'EDIT_EXPENSE':
            return state.map((expense)=>{
                if (expense.id === action.id){
                    return{
                        ...expense,
                        ...action.updates
                    };

                }else{
                    return expense;
                }
            })
         
         

        default:
         return state;
    }


 };

 //*************************************************************************** */


 /****
  * FILTER REDUCERS
  */

  const setTextFilter = (text ='') =>(
      {
          type: 'SET_TEXT_FILTER',
          text
      }
    );
    
  const sortByAmount =() =>({
        type: 'SORT_BY_AMOUNT'
  });

  const sortByDate =() =>({
    type: 'SORT_BY_DATE'
  });

  const setStartDate =(startDate = undefined) =>({
      type: 'SET_START_DATE',
      startDate
  });
  const setEndDate =(endDate = undefined) =>({
    type: 'SET_END_DATE',
    endDate
});


 const filterReducerDefaultState = {
     text :'',
     sortBy: 'date',
     startDate: undefined,
     endDate: undefined

 };

 const filtersReducer =(state = filterReducerDefaultState, action) =>{
    switch(action.type){
        case 'SET_TEXT_FILTER':
        return {
            ...state,
            text:action.text
        };
        case 'SORT_BY_AMOUNT':
        //return state.expense.amount
        return{
            ...state,
            sortBy: 'amount'
        }

        case 'SORT_BY_DATE':
        //return state.expense.amount
        return{
            ...state,
            sortBy: 'date'
        }

        case 'SET_START_DATE':
        return{
            ...state,
            startDate: action.startDate

        }

        case 'SET_END_DATE':
        return{
            ...state, 
            endDate: action.endDate

        }


        default:
         return state;
    }

 };


 const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) =>{
     return expenses.filter((expense)=>{
         const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
         const endDateMatch= typeof endDate!== 'number' || expense.createdAt <= endDate;

         //search a text in description
         const textMatch=expense.description.toLowerCase().includes(text.toLowerCase());

         //figure out if expenses.description as the text variable string inside of it 
         //use includes
         //convert both strings to lowercase

         return startDateMatch  && endDateMatch && textMatch
     }).sort((a,b)=>{
         if(sortBy ==='date'){
            return a.createdAt < b.createdAt ?1 :-1;
         }
         if(sortBy ==='amount'){
             return a.amount < b.amount ?1:-1;
         }
     });
 };

 //*************************************** */


 //store creation

 const store = createStore(
     combineReducers({
         expenses: expensesReducer,
         filters: filtersReducer
     })
);



store.subscribe(()=>{
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
    console.log(visibleExpenses)
}
);

const expense1 =store.dispatch(addExpense({ description: 'Rent', amount: 100, createdAt:-21000}));
const expense2 = store.dispatch(addExpense({ description: 'coffee', amount: 300, createdAt:-1000}));

// store.dispatch(removeExpense({id: expense1.expense.id}));

// store.dispatch(editExpense(expense2.expense.id, {amount: 500}))

//  store.dispatch(sortByAmount());
// store.dispatch(sortByDate());


// store.dispatch(setTextFilter('f'));

// store.dispatch(setStartDate(125));
// store.dispatch(setStartDate());

// store.dispatch(setEndDate(155));