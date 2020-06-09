// change name of file based on route

const express = require('express');
const dbController = require('../controllers/dbController');
const router = express.Router();

// =======================
// CREATE USER
// =======================
router.post('/user', dbController.createUser, (req, res) => {
  // TODOS
  // react router will handle routing based around state
  // return state or cookie with NEW user_Id
  return res.status(200).json(res.locals);
});

// =======================
// VALIDATE USER
// =======================
router.post('/userVerify', dbController.verifyUser, (req, res) => {
  return res.sendStatus(200);
});

// =======================
// GET ALL PROSPECTS
// =======================
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
    // dbController.getMatchingLikes middleware NOT functional yet
    return res.status(200).json(res.locals.getMatchingLikes);
  }
);

module.exports = router;
