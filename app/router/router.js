const verifySignUp = require('./verifySignUp');
const authJwt = require('./verifyJwtToken');
 
module.exports = function (app) {
 
  const authController = require('../controllers/auth.controller');
  const userController = require('../controllers/user.controller');
 
  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "x-access-token, Origin, Content-Type, Accept");
    next();
  });
 
  app.post('/api/auth/signup', [verifySignUp.checkDuplicateUserNameOrEmail, verifySignUp.checkRolesExisted], authController.signup);
 
  app.post('/api/auth/signin', authController.signin);
 
  app.get('/api/test/user', [authJwt.verifyToken], userController.userBoard);
 
  app.get('/api/test/dev', [authJwt.verifyToken, authJwt.isDevOrAdmin], userController.devBoard);
 
  app.get('/api/test/admin', [authJwt.verifyToken, authJwt.isAdmin], userController.adminBoard);
}