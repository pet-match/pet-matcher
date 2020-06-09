// import database model
const db = require('../models/dbPool.js');
const dbController = {};

// ==============================================================================
// CREATE USER - create new use and return new user's user_id
// ==============================================================================
dbController.createUser = (req, res, next) => {
  const { userName, email, password } = req.body;
  const query = {
    text:
      'INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING user_id;',
    values: [userName, email, password],
  };
  db.query(query)
    .then((result) => {
      res.locals = result.rows[0];
      return next();
    })
    .catch((err) => {
      return next(err);
    });
};

// ==============================================================================
// VERIFY USER - see if user's email exists, and compare against password.
//    return next if matched
// ==============================================================================
dbController.verifyUser = (req, res, next) => {
  const { email, password } = req.body;

  const query = {
    text: 'SELECT * FROM users WHERE email = $1;',
    values: [email],
  };

  db.query(query)
    .then((result) => {
      // if user's email exists
      if (result) {
        // see if password matches
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

// ==============================================================================
// GET ALL PROPECTS - takes current user's id and returns all users and
//    their pets who are not current user
// ==============================================================================
dbController.getAllAvailableProspects = (req, res, next) => {
  const text =
    'SELECT * FROM users INNER JOIN pets ON user_id = owner_id WHERE user_id != $1;';
  const values = [req.params.user_Id];
  db.query(text, values)
    .then((result) => {
      res.locals.getProspects = result.rows;
      return next();
    })
    .catch((err) => {
      console.log('fail--->', err);
      return next(err);
    });
};

// ==============================================================================
// GET ALL OF A USER'S PETS - not tested, and not used in front-end as of 6/8
// ==============================================================================
dbController.getUsersPets = (req, res, next) => {
  const text =
    'SELECT users.*, pets.name AS pet FROM users JOIN pets ON user_id = owner_id WHERE user_id = $1;';
  const values = [req.params.user_Id];
  db.query(text, values)
    .then((result) => {
      res.locals.getUsersPets = result.rows;
      return next();
    })
    .catch((err) => {
      console.log('Fail---->', err);
      return next(err);
    });
};

// ==============================================================================
// GETS LIKES OF GIVEN USER - not tested, and not used in front-end as of 6/8
// ==============================================================================
dbController.getUserLikes = (req, res, next) => {
  const text =
    'SELECT * FROM users JOIN likes ON user_id = liker_id WHERE user_id = $1;';
  const values = [req.params.user_Id];
  db.query(text, values)
    .then((result) => {
      res.locals.getUserLikes = result.rows;
      return next();
    })
    .catch((err) => {
      console.log('Failure Getting User Likes:', err);
      return next(err);
    });
};
// ==============================================================================
// GET MATCHING LIKES - not tested, and not used in front-end as of 6/8
// ==============================================================================
dbController.getMatchingLikes = (req, res, next) => {
  const text = '';
  const values = [req.params.user_Id];
  db.query(text, values)
    .then((result) => {
      res.locals.matchingLikes = result.rows;
      return next();
    })
    .catch((err) => {
      console.log('Failed to get matching likes: ', err);
      return next(err);
    });
};

module.exports = dbController;
