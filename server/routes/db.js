// change name of file based on route

const express = require('express');
const dbController = require('../controllers/dbController');
const router = express.Router();

// router.get('/', dbController.verifyLogin, (req, res) => {
//   console.log('after verifyLogin, end res');
//   return res.status(200).end();
// });

// =======================
// CREATE USER
// =======================
router.post('/user', dbController.createUser, (req, res) => {
  // redirect back to our main/root
  // react router will handle routing based around state
  // return state or cookie with NEW user_Id
  return res.sendStatus(200);
});

router.get(
  '/getProspects/:user_Id',
  dbController.getAllAvailableProspects,
  (req, res) => {
    return res.status(200).json(res.locals.getProspects);
  }
);

// =====================
// GET USERS  PETS
// =====================
router.get('/getPets/:user_Id', dbController.getUsersPets, (req, res) => {
  return res.status(200).json(res.locals.getUsersPets);
});

// =====================
// GET USERS LIKES
// =====================
router.get('/getLikes/:user_Id', dbController.getUserLikes, (req, res) => {
  return res.status(200).json(res.locals.getUserLikes);
});

// ======================
// GET MUTUAL LIKES
// ======================
router.get(
  '/getMutualLikes/:user_Id',
  dbController.getMatchingLikes,
  (req, res) => {
    return res.status(200).json(res.locals.getMatchingLikes);
  }
);

module.exports = router;
