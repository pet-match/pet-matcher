// change name of file based on route

const express = require('express');
const dbController = require('../controllers/dbController');
const router = express.Router();

// router.get('/', dbController.verifyLogin, (req, res) => {
//   console.log('after verifyLogin, end res');
//   return res.status(200).end();
// });

router.get('/getProspects/:user_Id', dbController.getAllAvailableProspects, (req, res) => {
  return res.status(200).json(res.locals.getProspects);
})

module.exports = router;
