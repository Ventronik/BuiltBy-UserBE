const userModel = require('../models/users')

//////////////////////////////////////////////////////////////////////////////
// Basic CRUD Methods
//////////////////////////////////////////////////////////////////////////////

// function create(req, res, next){
//   if(!req.body.username){
//     return next({ status: 400, message: 'Bad username'})
//   }
//
//   if(!req.body.password){
//     return next({ status: 400, message: 'Bad username'})
//   }
//
//   userModel.create(req.body.username, req.body.password)
//   .then(function(data){
//     const message = 'pong!'
//     return res.status(201).send(`RESPONDING TO THE CLIENT: ${message}`)//({ data })
//   })
//   .catch(next)
// }

function allUsers(req, res, next){
  userModel.allUsers()
  .then(users => {
    res.status(200).send({users})
  })
  .catch(next)
}

//////////////////////////////////////////////////////////////////////////////
// Quality of Life functions
//////////////////////////////////////////////////////////////////////////////

module.exports = {
  allUsers
}
