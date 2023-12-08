// mongodb+srv://testConnection:+trial@123+@saas-login.xbalqfg.mongodb.net/?retryWrites=true&w=majority

const mongoose = require("mongoose");
const UserModel = require("./schema.js");

// url = 'mongodb+srv://testConnection:trial1234@saas-login.xbalqfg.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(url).then(async ()=>{
  const username = 'testConnection'
  const password = 'trial1234'
  url = `mongodb+srv://${username}:${password}@saas-login.xbalqfg.mongodb.net/?retryWrites=true&w=majority`
    console.log("Db Connected");
    const collections = await mongoose.connection.db.listCollections().toArray();

    console.log('Collections in the database:');
    const usersCollection = mongoose.connection.collection('users');

  const users = await usersCollection.find({}).toArray();
  console.log('Users:', users);
    collections.forEach((collection) => {
      console.log(collection.name);
    })

const sampleUser = new UserModel({
    username: 'john_doe',
    password: 'password123',
    email: 'john.doe@example.com',
    dateOfBirth: new Date('1990-01-01'),
    verified: true,
    subscribed: true,
  });

})
.catch((e)=>{
    console.log(e)
})
