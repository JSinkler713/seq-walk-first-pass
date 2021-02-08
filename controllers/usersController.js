const express = require('express')
const router = express.Router()
// bring in db
const db = require('../models')

// index route for users, show all users
// even though this is a '/' we have already routed through the controller
// so the whole path is '/users/'
router.get('/', (req, res)=> {
  // get all users
  db.user.findAll({ 
    include: [db.pet] // now a .pets is included on each returned user
  }).then(function(users) {
     // remember users is an array, each user also has a .pets field which is also an array
     res.render('users', { users })
  });
})
router.get('/:id/animals', (req, res)=> {
  db.pet.findAll({ 
    where: { userId: req.params.id },
    include: db.user
  })
    .then((foundAnimals)=> {
      console.log(foundAnimals[0].user.firstName) // will be an array
      res.render('userAnimals', { 
        animals: foundAnimals,
        user: foundAnimals[0].user
      })
  })
})
router.get('/:id', (req, res)=> {
  db.user.findOne({ where: { id: req.params.id }})
    .then((foundUser)=> {
      res.render('userShow', { user: foundUser })
    })
    .catch( err => {
      console.log('err')
    })
})


module.exports = router
