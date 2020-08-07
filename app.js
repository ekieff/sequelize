const db = require('./models');

db.user.create({
    firstName: 'Elaine',
    lastName: 'Kieffer',
    age: 27,
    email: 'kiefferelaine@gmail.com'
})