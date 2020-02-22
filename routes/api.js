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
      { user_id:1, username: 'User1' },
      { user_id:2, username: 'User2' },
      { user_id:3, username: 'User3' },
      { user_id:4, username: 'User4' },
    ]
  })
});

/* GET drivers listing. */
router.get('/drivers', function(req, res, next) {
  res.send({
    success: true,
    data: [
      { driver_id: 1, name: 'Driver1' },
      { driver_id: 2, name: 'Driver2' },
      { driver_id: 3, name: 'Driver3' },
      { driver_id: 4, name: 'Driver4' },
    ]
  })
});

/* GET trucks listing. */
router.get('/trucks', function(req, res, next) {
  res.send({
    success: true,
    data: [
      { truck_id: 1, name: 'Truck1' },
      { truck_id: 2, name: 'Truck2' },
      { truck_id: 3, name: 'Truck3' },
      { truck_id: 4, name: 'Truck4' },
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

/* Save user */
router.post('/user/save', function(req, res, next) {
  res.send({
    success: true,
    data: { }
  })
});

/* Save driver */
router.post('/driver/save', function(req, res, next) {
  res.send({
    success: true,
    data: { }
  })
});

/* Save truck */
router.post('/truck/save', function(req, res, next) {
  res.send({
    success: true,
    data: { }
  })
});

module.exports = router;
