const connection = require('./connection');
let objectId = require('mongodb').ObjectID;

async function getUsers() {
  const clientmongo = await connection.getConnection();
  const users = await clientmongo.db('urbania')
                                  .collection('users')
                                  .find()
                                  .toArray();
  return users;
}

async function getUser(id) {
  const clientmongo = await connection.getConnection();
  const user = await clientmongo.db('urbania')
                                  .collection('users')
                                  .findOne({ _id: new objectId(id) });
  return user;
}

async function addUser(user) {
  const clientmongo = await connection.getConnection();
  const result = await clientmongo.db('urbania')
                                  .collection('users')
                                  .insertOne(user);
  return result;
}

async function updateUser(user) {
  const clientmongo = await connection.getConnection();
  const query = { _id: new objectId(user.id) };
  const payload = { $set: {
      user: user.user,
      email: user.email,
      password: user.password
    }
  };
  const result = await clientmongo.db('urbania')
                                  .collection('users')
                                  .updateOne(query, payload);
  return result;
}

async function deleteInventor(id) {
  const clientmongo = await connection.getConnection();
  const result = await clientmongo.db('urbania')
                                  .collection('users')
                                  .deleteOne({ _id: new objectId(id) });
  return result;
}

module.exports = {
  getUsers,
  getUser,
  addUser,
  updateUser,
  deleteInventor
};
