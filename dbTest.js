// import our database models
const db = require('./models')

db.user.findAll()
.then(users=>{
    users.forEach(user=>{
        console.log(user.get())
    })
})
//     where: {firstName: 'Pete'},
//     defaults: {
//         lastName: 'Fitton',
//     age: 100,
//     email: 'Pete@TheDude.com'
// }
// })
// .then(([user, created])=>{
//     console.log(created)
//     console.log(user)
// })