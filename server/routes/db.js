// change name of file based on route

const express = require('express');
const dbController = require('../controllers/dbController');
const router = express.Router();

router.get('/', dbController.verifyLogin, (req, res) => {
  console.log('after verifyLogin, end res');
  return res.status(200).end();
});

router.get('/getProspects', dbController.getAllAvailableMatches, (req, res) => {
  return res.status(200).send("Hey Bro we got prospects for you!");
})

module.exports = router;
