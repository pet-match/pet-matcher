// import database model

dbController = {};

dbController.verifyLogin = (req, res, next) => {
  console.log('login function here');
  return next();
};

module.exports = dbController;
