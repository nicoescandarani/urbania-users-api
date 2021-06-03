// ! El ruteo para los usuarios.

var express = require('express');
var router = express.Router();
const dataUser = require('../data/user');
const joi = require('joi');

// ! /api/users
router.get('/', async (req, res, next) => {
  let users = await dataUser.getUsers();
  res.json(users);
});

// ! /api/users/id
router.get('/:id', async (req, res) => {
  const user = await dataUser.getUser(req.params.id);
  if(user) {
    res.json(user);
  } else {
    res.status(404).send('No se encontró el usuario deseado.');
  }
});

// ! /api/users/
router.post('/', async (req, res) => {
  console.log('Entró!!');
  const schema = joi.object({
    user: joi.string().alphanum().min(4).max(20).required(),
    email: joi.string().email().required(),
    password: joi.string().min(4).required()
  });
  const result = schema.validate(req.body);
  if(!result.error) {
    let user = req.body;
    user = await dataUser.addUser(user);
    console.log('HOLA!!');
    res.json(user);
  } else {
    res.status(400).send(result.error.details[0].message);
  }
});

// ! /api/users/id
router.put('/:id', async (req, res) => {
  const schema = joi.object({
    user: joi.string().alphanum().min(4).max(20).required(),
    email: joi.string().email().required(),
    password: joi.string().min(4).required()
  });
  const result = schema.validate(req.body);
  if(!result.error) {
    const user = req.body;
    user._id = req.params.id;
    dataUser.updateUser(user);
    res.json(user);
  } else {
    res.status(400).send(result.error.details[0].message);
  }
});

// ! /api/users/id
router.delete('/:id', async (req, res) => {
  const user = await dataUser.getUser(req.params.id);
  if(user) {
    dataUser.deleteInventor(req.params.id);
    res.status(200).send('Usuario eliminado.');
  } else {
    res.status(404).send('Usuario no encontrado.');
  }
});

module.exports = router;
