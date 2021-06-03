require('dotenv').config();
const mongoClient = require('mongodb').MongoClient;
// TODO Pasar a variable de entorno.
// const uri = 'mongodb+srv://urbaniaadmin:urbania123456789@cluster0.jxbim.mongodb.net/urbania?retryWrites=true&w=majority';
const uri = process.env.MONGO_URI;
const client = new mongoClient(uri);

let instance = null;

async function getConnection() {
  if(instance == null) {
    try {
      instance = await client.connect();
    } catch(err) {
      console.log(err.message);
      throw new Error('Problemas al conectarse con MongoDb');
    }
  }
  return instance;
}

module.exports = { getConnection };
