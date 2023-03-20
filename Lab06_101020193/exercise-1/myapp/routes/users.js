var express = require('express');
var bodyParser = require('body-parser')

var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/', function(req, res, next) {
  console.log(`First Name : ${req.body.firstname}`)
  console.log(`Last Name : ${req.body.firstname}`)
  res.send('POST received!')
})

router.post('/users', (req, res) => {
  
  const fname = req.body.fname;
  const lname = req.body.lname;

  console.log('First name:', fname);
  console.log('Last name:', lname);

  res.send(fname, ' ', lname)
});

router.use(bodyParser.urlencoded({extended: true}));

module.exports = router;
