// import database model
const db = require('../models/dbPool.js');
const dbController = {};

// dbController.verifyLogin = (req, res, next) => {
//   console.log('login function here');
//   return next();
// };

dbController.getAllAvailableProspects = (req, res, next) => {
  // Get ALL users (who have pets) besides user $1, + their pets
  const text =
    'SELECT * FROM users INNER JOIN pets ON user_id = owner_id WHERE user_id != $1;';
  const values = [req.params.user_Id];
  //  console.log('does this contain anything---->',req.params)
  db.query(text, values)
    .then((result) => {
      console.log('Got results from database:', result.rows);
      res.locals.getProspects = result.rows;
      return next();
    })
    .catch((err) => {
      console.log('fail--->', err);
      return next(err);
    });
};

// ==========================
// GET ALL OF A USER'S PETS
// ==========================

dbController.getUsersPets = (req, res, next) => {
  const text =
    'SELECT users.*, pets.name AS pet FROM users JOIN pets ON user_id = owner_id WHERE user_id = $1;';
  const values = [req.params.user_Id];
  db.query(text, values)
    .then((result) => {
      console.log('Got Users Pets fromDB: ', result.rows);
      res.locals.getUsersPets = result.rows;
      return next();
    })
    .catch((err) => {
      console.log('Fail---->', err);
      return next(err);
    });
};

// ============================
// GETS LIKES OF GIVEN USER
// ============================
dbController.getUserLikes = (req, res, next) => {
  const text =
    'SELECT * FROM users JOIN likes ON user_id = liker_id WHERE user_id = $1;';
  const values = [req.params.user_Id];
  db.query(text, values)
    .then((result) => {
      console.log('Got User Likes From DB: ', result.rows);
      res.locals.getUserLikes = result.rows;
      return next();
    })
    .catch((err) => {
      console.log('Failure Getting User Likes:', err);
      return next(err);
    });
};

dbController.getMatchingLikes = (req, res, next) => {
  const text = '';
  const values = [req.params.user_Id];
  db.query(text, values)
    .then((result) => {
      console.log('GOT Mathcing Likes from DB: ', result.rows);
      res.locals.matchingLikes = result.rows;
      return next();
    })
    .catch((err) => {
      console.log('Failed to get matching likes: ', err);
      return next(err);
    });
};

module.exports = dbController;

// {
//   log: `error in getAllAvailableMatches: ${err}`,
//   message: { err: 'Unknown database error'},
// }
