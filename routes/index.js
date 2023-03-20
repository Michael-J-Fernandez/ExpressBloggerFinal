const express = require('express');
const router = express.Router();

router.get('/', async function(req, res) {

  try {
    res.send("<h1>Welcome to Blogs!</h1>")

  } catch (e) {
    console.log(e);
  }
});


module.exports = router;
