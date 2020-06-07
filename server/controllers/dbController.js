// import database model
const db = require('../models/dbPool.js');
const dbController = {};

// dbController.verifyLogin = (req, res, next) => {
//   console.log('login function here');
//   return next();
// };

dbController.getAllAvailableProspects = (req, res, next) => {

  // Get ALL users (who have pets) besides user $1, + their pets 
  const text = 'SELECT * FROM users INNER JOIN pets ON user_id = owner_id WHERE user_id != $1;'
  const values = [req.params.user_Id];
  //  console.log('does this contain anything---->',req.params)
  db.query(text,values)
    .then(result => {
      console.log("Got results from database:", result.rows);
      res.locals.getProspects=result.rows
      return next();
    })
    .catch(err => {
      console.log('fail--->', err)
      return next(err);
    });
}

// Get user $1 along with all of their pets 
// SELECT * FROM users 
// INNER JOIN pets
// ON user_id = owner_id
// WHERE user_id = $1

// Get all prospects who user $1 likes
// SELECT * FROM users  
// JOIN likes
// ON user_id = liker_id
// WHERE user_id = 1

// Get matching likes, INCOMPLETE...
// SELECT users.*, users AS  FROM users uA userA
// JOIN likes
// ON user_id = liker_id
// JOIN users
// ON likee_id = user_id
// WHERE user_id = 1



module.exports = dbController;

// {
//   log: `error in getAllAvailableMatches: ${err}`,
//   message: { err: 'Unknown database error'},
// }