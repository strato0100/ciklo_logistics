var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* GET users listing. */
router.get('/users', function(req, res, next) {
  res.send({
    success: true,
    data: [
      { username: 'User1' },
      { username: 'User2' },
      { username: 'User3' },
      { username: 'User4' },
    ]
  })
});

/* GET drivers listing. */
router.get('/drivers', function(req, res, next) {
  res.send({
    success: true,
    data: [
      { name: 'Driver1' },
      { name: 'Driver2' },
      { name: 'Driver3' },
      { name: 'Driver4' },
    ]
  })
});

/* GET trucks listing. */
router.get('/trucks', function(req, res, next) {
  res.send({
    success: true,
    data: [
      { name: 'Truck1' },
      { name: 'Truck2' },
      { name: 'Truck3' },
      { name: 'Truck4' },
    ]
  })
});

router.post('/login', function(req, res, next) {
  let authCheck = req.body.username == 'strato0100@gmail.com' && req.body.password == '123';
  if (authCheck) {
    res.send({
      success: true,
      data: '_user'
    });
  } else {
    res.send({
      success: false
    });
  }
});

module.exports = router;
