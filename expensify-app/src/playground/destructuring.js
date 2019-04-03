//Object destructuring *******************

// const person ={
//     name:'fredi',
//     age: 26,
//     location:{
//         city: 'jakarta',
//         temp : 40
//     }
// }; 

// const {name = 'anonymous', age} =person;
// console.log(`${name} is ${age}`)

// const {city , temp : temperature} = person.location;
// console.log(`${city} is at ${temperature} degree`);

// const book={
//     title : 'Ego is the enemy',
//     author: ' ryan holiday',
//     publisher:{
//         name: 'penguin'
//     }
// }

// const {name: publishername='self published'} = book.publisher;
// console.log(publishername)


//array destructuring ******************

const address =['1299 s juniper st.' , 'Jakarta', 'transylvania', '19291']

//order based 
const [street, city, state ='new york', zip] = address;

// //just take state
// const [, , state ] = address;

console.log(`You're in ${street}, ${state}`)




const item=['Coffee (hot)', '$2.00', '$2.50', '$2.75']

const [product,,price] = item;
console.log(`a ${product} costs ${price}`)