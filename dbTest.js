// import our database models
const db = require('./models')
const user = require('./models/user')

// db.user.findAll()
// .then(users=>{
//     users.forEach(user=>{
//         console.log(user.get())
//     })
// })

db.user.findOne({
    where:{
        firstName: 'Taylor'
    }})
.then(user=>{
    console.log("adding pet to this user:", user.firstName)
    user.createPet({
      name: 'Max',
      description: 'Tabby Cat'
    }).then(dog=>{
      console.log(dog);
    });
});

// db.user.findByPk(2).then(foundUser=>{
//     console.log(`I found ${foundUser.firstName}`)
//     foundUser.getPets().then(usersPets=>{
//         usersPets.forEach(pet=>{
//             console.log(pet.get())
//         })
//     })
// })

// db.user.findAll({
//     include: [db.pet]
// })
// .then(users=>{
//     user.forEach(user=>{
//     console.log(`${user}'s Pets: `)
//     user.pets.forEach(per=>{
//         console.log(pet.name)
//     })
//     console.log('--------')
// })
// })
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