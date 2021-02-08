const db = require('./models')

// create a pet that belongs to a specific user
// db.user.findOne({
//   where: {
//     firstName: "James"
//   }
// }).then(function(user) {
//   // create<NameOfAssociatedTable> method
//   user.createPet({
//     name: 'Piper',
//     species: 'Terrier Mutt'
//   }).then(function(dog) {
//     console.log(dog.name);
//   });
// });

/* Get the first user where firstName = 'James' then get the pets of that user */
// db.user.findOne({ where: {firstName: 'James'}  }).then(function(user) {
//   //load pets for this user
//   user.getPets().then(function(pets) {
//     console.log(pets[0].get())
//     //do something with pets here
//   });
// });


/* Using the .include method, include the pets associated with a user */
// db.user.findAll({ 
//   where: {firstName: 'James'},
//   include: [db.pet] //now a .pets is included on eah returned user
// }).then(function(users) {
//   //log the first user, and the first pet on that user
//   console.log(users[0].pets[0].get())
//   //load pets for this user
// });



