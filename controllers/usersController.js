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


module.exports = router
