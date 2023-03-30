const { loginUser, registerUser } = require('../controllers/usersController')



const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/login', loginUser);

router.post('/register', registerUser);

module.exports = router;
