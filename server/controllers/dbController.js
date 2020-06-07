// import database model
const db = require('../models/dbPool.js');
const dbController = {};

dbController.verifyLogin = (req, res, next) => {
  console.log('login function here');
  return next();
};

dbController.getAllAvailableMatches = (req, res, next) => {

  const text = 'SELECT * FROM users INNER JOIN pets ON user_id = owner_id WHERE user_id = 1;';
  // const values = [req.body.user_id];

  db.query(text)
    .then(result => {
      console.log("Got results from database:", result.rows);
      return next();
    })
    .catch(err => {
      console.log('fail--->', err)
      return next(err);
    });
}

module.exports = dbController;

// {
//   log: `error in getAllAvailableMatches: ${err}`,
//   message: { err: 'Unknown database error'},
// }