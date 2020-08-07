const db = require('./models');

// // db.user.create({
// //     firstName: 'Elaine',
// //     lastName: 'Lerner',
// //     age: 27,
// //     email: 'kiefferelaine@gmail.com'
// // }).then(data =>{
// //     console.log(data);
// // })

// db.user.findOne({
//     where: {id:1}
// }).then(function(user){
//     console.log(user.dataValues);
// });

// db.user.findOne({
//     where: {firstName: 'Elaine'}
// }).then(user =>{
//     console.log(user.dataValues);
// });

// db.user.findOne({
//     where: {lastName: 'Lerner'}
// }).then(user=>{
//     console.log(user.dataValues);
// });



// db.user.findOrCreate({
//     where: {
//         firstName: 'Kevin',
//         lastName: 'Johnson'
//     },
//     defaults: {age: 40, email: 'kv@email.com'}
// }).then(([user, created])=>{
//     console.log(`This was created on ${created}`)
//     console.log(user.dataValues);
// });

// let queryOne ={
//     where: {
//         firstName: 'Elaine',
//         lastName: 'Lerner'
//     },
//     defaults: {age:25, email: 'kiefferelaine@gmail.com'}
// };

// db.user.findOrCreate(queryOne)
// .then(([user, created])=>{
//     console.log(created);
//     console.log(user.dataValues);
// })

db.user.findAll()
.then(users =>{
    for(let i = 0; i < users.length; i++){
        let eachUser = users[i].dataValues;
        let firstName = eachUser.firstName;
        console.log(firstName);
    }
})