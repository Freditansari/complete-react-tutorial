//install redux : sudo yarn add redux@3.7.2

import {createStore} from 'redux';

//ACTION GENERATORS -- function that return action objects
//better way to reduce error from typo

const incrementCount =({incrementBy =1} ={}) =>({
        type: 'INCREMENT', 
        incrementBy 
});

const decrementCount = ({decrementBy =1} ={}) =>({
    type:'DECREMENT',
    decrementBy

});

//set count 

const setCount = ({count =999} ={}) =>({
    type:'SET',
    count

});


//reset count

const resetCount = () =>({
    type:'RESET'
})


/**
 * reducers:
 * 1. reducers are pure function
 * 2. never change state or actions
 */
    

const store = createStore((state ={count:0}, action)=>{
    switch(action.type){
       
        case 'INCREMENT':
            // if increment type == number then increment by = to that number, else it's one  
            //const incrementBy = typeof action.incrementBy ==='number' ? action.incrementBy : 1 ;
            //console.log(action);
            return {
                count : state.count + action.incrementBy
            };
        case 'DECREMENT':
            // no need if we use the way up top : const decrementBy = typeof action.decrementBy ==='number' ? action.decrementBy : 1 ;
            return{
                // count: state.count-decrementBy
                count : state.count -action.decrementBy
            };
        case 'RESET':
            return{
                count: 0
            };
        case 'SET':
            //const count = typeof action.count ==='number' ? action.count : 1 ;
            return{
                count: action.count
            };
        default:
            return state;
    }
   
});

store.subscribe(()=>{
    console.log(store.getState());
})


store.dispatch(incrementCount({incrementBy: 3}))

// store.dispatch(incrementCount());


//INCREMENT ACTION
store.dispatch({
    type : 'INCREMENT',
    incrementBy: 4

});

store.dispatch(incrementCount());

//RESET ACTION
// store.dispatch({
//     type : 'RESET'

// });
store.dispatch(resetCount());

//DECREAsE ACTION
//DECREARE ACTION
// store.dispatch({
//     type : 'DECREMENT'
// });
// store.dispatch({
//     type : 'DECREMENT', 
//     decrementBy: 10

// });

store.dispatch(decrementCount());

store.dispatch(decrementCount({decrementBy: 10}));

// store.dispatch({
//     type : 'SET', 
//     count:1001

// });

store.dispatch(setCount({count:99999}));

store.dispatch(resetCount());


