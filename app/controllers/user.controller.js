const db = require('../config/db.config.js');
const User = db.user;
const Role = db.role;

const Op = db.Sequelize.Op;
exports.allAccess = (req, res) => {
    res.status(200).send("Public Content.");
  };
  
  

  exports.userBoard = (req, res) => {
    User.findOne({
      where: { id: req.userId },
      attributes: ['firstname', 'lastname', 'username', 'email'],
      include: [{
        model: Role,
        attributes: ['id', 'name'],
        through: {
          attributes: ['userId', 'roleId'],
        }
      }]
    }).then(user => {
      res.status(200).send({
        'description': '>>> User Contents!',
        'user': user
      });
    }).catch(err => {
      res.status(500).send({
        'description': 'Can not access User Page',
        'error': err
      });
    })
  }
  
  exports.adminBoard = (req, res) => {
    User.findOne({
      where: { id: req.userId },
      attributes: ['firstname', 'lastname', 'username', 'email'],
      include: [{
        model: Role,
        attributes: ['id', 'name'],
        through: {
          attributes: ['userId', 'roleId'],
        }
      }]
    }).then(user => {
      res.status(200).send({
        'description': '>>> Admin Contents',
        'user': user
      });
    }).catch(err => {
      res.status(500).send({
        'description': 'Can not access Admin Board',
        'error': err
      });
    })
  }
  
  exports.devBoard = (req, res) => {
    User.findOne({
      where: { id: req.userId },
      attributes: ['firstname', 'lastname', 'username', 'email'],
      include: [{
        model: Role,
        attributes: ['id', 'name'],
        through: {
          attributes: ['userId', 'roleId'],
        }
      }]
    }).then(user => {
      res.status(200).send({
        'description': '>>> Project Dev Board',
        'user': user
      });
    }).catch(err => {
      res.status(500).send({
        'description': 'Can not access Dev Board',
        'error': err
      });
    })
  }
  