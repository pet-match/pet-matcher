// import database model
const db = require('../models/dbPool.js');
const dbController = {};

// ==========================
// CREATE USER
// ==========================
dbController.createUser = (req, res, next) => {
  // console.log('INSIDE CREATE USER CONTROLLER: ');
  // return next();
  const { userName, email, password } = req.body;
  const query = {
    text:
      'INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING user_id;',
    values: [userName, email, password],
  };
  db.query(query)
    .then((result) => {
      console.log('returned from create user; result = ', result);
      res.locals = result.rows[0];
      return next();
    })
    .catch((err) => {
      return next(err);
    });
};

// ==========================
// VERIFY USER!
// ==========================
dbController.verifyUser = (req, res, next) => {
  const { email, password } = req.body;
  console.log('dbController.verifyUser -> req.body', req.body);
  console.log('dbController.verifyUser -> userName', email);
  console.log('dbController.verifyUser -> password', password);

  const query = {
    text: 'SELECT * FROM users WHERE email = $1;',
    values: [email],
  };

  db.query(query)
    .then((result) => {
      console.log('Results from DB VerifyUser', result.rows);

      if (result) {
        if (result.rows[0].password === password) {
          console.log('A MATCH!!');
          return next();
        } else {
          return res.status(401).send('Password incorrect');
        }
      }
      if (!result) {
        return res.status(401).send('Invalid User');
      }
    })
    .catch((err) => {
      return next(err);
    });
};

// ==========================
// GET ALL PROPECTS!
// ==========================
dbController.getAllAvailableProspects = (req, res, next) => {
  // Get ALL users (who have pets) besides user $1, + their pets
  const text =
    'SELECT * FROM users INNER JOIN pets ON user_id = owner_id WHERE user_id != $1;';
  const values = [req.params.user_Id];
  //  console.log('does this contain anything---->',req.params)
  db.query(text, values)
    .then((result) => {
      // console.log('Got results from database:', result.rows);
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
