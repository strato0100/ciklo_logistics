var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');

const User = require('../models/user');
const Driver = require('../models/driver');
const Truck = require('../models/truck');
const Shipping = require('../models/shipping');

mongoose.connect("mongodb://muser123:muser123@cluster0-shard-00-00-1lwfr.mongodb.net:27017,cluster0-shard-00-01-1lwfr.mongodb.net:27017,cluster0-shard-00-02-1lwfr.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority", {
  useNewUrlParser: true,
  dbName: 'ciklo'
}).then(r => {
  console.log(r);
}).catch(err => {
  console.error(err);
});

mongoose.connection.on('connected', function(){ console.log('connected to mongodb'); });
mongoose.connection.on('error', function(err){ console.log('error connecting to mongodb', err) });
mongoose.connection.on('disconnected', function(){ console.log('disconnected from mongodb') });

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* GET users listing. */
router.get('/users', function(req, res, next) {
  User.find({}).then(users => {
    res.send({
      success: true,
      data: users
    })
  }).catch(err => {
    res.send({
      success: false,
      error: err
    })
  });  
});

/* GET drivers listing. */
router.get('/drivers', function(req, res, next) {
  Driver.find({}).then(drivers => {
    res.send({
      success: true,
      data: drivers
    })
  }).catch(err => {
    res.send({
      success: false,
      error: err
    })
  });
});

/* GET trucks listing. */
router.get('/trucks', function(req, res, next) {
  Truck.find({}).then(trucks => {
    res.send({
      success: true,
      data: trucks
    })
  }).catch(err => {
    res.send({
      success: false,
      error: err
    })
  });
});

/* GET shipping listing. */
router.get('/shippings', function(req, res, next) {
  Shipping.find({}).then(shippings => {
    res.send({
      success: true,
      data: shippings
    })
  }).catch(err => {
    res.send({
      success: false,
      error: err
    })
  });
});

router.post('/login', function(req, res, next) {
  User.findOne({ username: req.body.username, password: req.body.password }).then(user => {
    res.send({
      success: true,
      data: user
    })
  }).catch(err => {
    res.send({
      success: false,
      error: err
    })
  });
});

/* Save user */
router.post('/user/save', function(req, res, next) {
  if (req.body.user_id) {
    User.findOne({ user_id: req.body.user_id }).then(user => {
      user.set({
        username: req.body.username,
        password: req.body.password
      });

      user.save().then(s => {
        res.send({
          success: true,
          data: s
        })
      }).catch(err => {
        res.send({
          success: false,
          error: err
        })
      });
    })
  } else {
    const __user = new User({
      user_id: new mongoose.Types.ObjectId(),
      username: req.body.username,
      password: req.body.password
    });

    __user.save().then(r => {
      res.send({
        success: true,
        data: r
      });
    }).catch(err => {
      res.send({
        success: false,
        error: err
      });      
    });
  }
});

/* Save driver */
router.post('/driver/save', function(req, res, next) {
  if (req.body.driver_id) {
    Driver.findOne({ driver_id: req.body.driver_id }).then(driver => {
      driver.set({
        name: req.body.name
      });

      driver.save().then(s => {
        res.send({
          success: true,
          data: s
        })
      }).catch(err => {
        res.send({
          success: false,
          error: err
        })
      });
    })
  } else {
    const driver = new Driver({
      driver_id: new mongoose.Types.ObjectId(),
      name: req.body.name
    });

    driver.save().then(r => {
      res.send({
        success: true,
        data: r
      });
    }).catch(err => {
      res.send({
        success: false,
        error: err
      });      
    });
  }
});

/* Save truck */
router.post('/truck/save', function(req, res, next) {
  if (req.body.truck_id) {
    Truck.findOne({ truck_id: req.body.truck_id }).then(truck => {
      truck.set({
        name: req.body.name,
        driver: req.body.driver
      });

      truck.save().then(s => {
        res.send({
          success: true,
          data: s
        })
      }).catch(err => {
        res.send({
          success: false,
          error: err
        })
      });
    })
  } else {
    const truck = new Truck({
      truck_id: new mongoose.Types.ObjectId(),
      name: req.body.name,
      driver: req.body.driver
    });

    truck.save().then(r => {
      res.send({
        success: true,
        data: r
      });
    }).catch(err => {
      res.send({
        success: false,
        error: err
      });      
    });
  }
});

/* Save shipping */
router.post('/shipping/save', function(req, res, next) {
  if (req.body.shipping_id) {
    Shipping.findOne({ shipping_id: req.body.shipping_id }).then(shipping => {
      shipping.set({
        name: req.body.name,
        source: req.body.source,
        target: req.body.target,
        truck: req.body.truck,
      });

      shipping.save().then(s => {
        res.send({
          success: true,
          data: s
        })
      }).catch(err => {
        res.send({
          success: false,
          error: err
        })
      });
    })
  } else {
    const shipping = new Shipping({
      shipping_id: new mongoose.Types.ObjectId(),
      name: req.body.name,
      source: req.body.source,
      target: req.body.target,
      truck: req.body.truck,
    });

    shipping.save().then(r => {
      res.send({
        success: true,
        data: r
      });
    }).catch(err => {
      res.send({
        success: false,
        error: err
      });      
    });
  }
});

module.exports = router;
