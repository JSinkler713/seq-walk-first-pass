const express = require('express')
const router = express.Router()
// bring in db
const db = require('../models')

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
  db.user.findOne({ 
    where: { id: req.params.id },
    include: [db.pet] // property of .pets on user
  })
    .then((user)=> {
      if (user.pets.length > 0) {
        res.render('userAnimals', { 
          animals: user.pets,
          user: user
        })
      } else {
        res.render('userAnimals', {
          animals: [],
          user: user
        })
      }
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
