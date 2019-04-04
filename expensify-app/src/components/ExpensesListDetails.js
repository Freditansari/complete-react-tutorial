import React from 'react';



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

const  ExpensesListDetails = ({description, amount, createdAt} ) => {
        return (
            <div>
               <h3>{description}</h3>
                <p>{amount} -- {createdAt}</p>
            </div>
        );
    }



export default ExpensesListDetails;