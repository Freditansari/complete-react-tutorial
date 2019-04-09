import React from 'react';
import {connect} from 'react-redux'
import {removeExpense} from '../actions/expenses'



//also acceptable answer
// const  ExpensesListDetails = (props) => {
//     const {description, amount, createdAt} = props.expense;
   
//     return (
//         <div>
            
//            <h3>{description}</h3>
//             <p>{amount} -- {createdAt}</p>
//         </div>
//     );
// }

const  ExpensesListDetails = ({dispatch, id, description, amount, createdAt} ) => {
        return (
            <div>
               <h3>{description}</h3>
                <p>{amount} -- {createdAt}</p>
                <button onClick = {(e)=>{dispatch(removeExpense({id}))}}>remove</button>
            </div>
        );
    }



const mapStateToProps = (state)=>{
    return {
        expenses: state.expenses
    };
};
export default connect(mapStateToProps)(ExpensesListDetails);