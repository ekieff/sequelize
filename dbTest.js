// import our database models
const db = require('./models')

db.user.findOrCreate({
    where: {firstName: 'Pete'},
    defaults: {
        lastName: 'Fitton',
    age: 100,
    email: 'Pete@TheDude.com'
}
})
.then(([user, created])=>{
    console.log(created)
    console.log(user)
})