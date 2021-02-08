const express = require('express')
const router = express.Router()
// bring in db
const db = require('../models')

router.delete('/:id', (req, res)=> {
  db.pet.destroy({ where: { id: req.params.id } })
  .then((deletedSuccess)=> {
    res.redirect('/users')
  })
})


module.exports = router
