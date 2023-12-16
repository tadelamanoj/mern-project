// services/userService.js
const connection = require('../models/User');

const getAllUsers = async () => {
  const userCollection = await connection.getCollection()
  let data = await userCollection.find({})
  console.log(data)
  if(data && data.length>0)
    return data;
  else
    return "No data"
};

const createUser = async (userData) => {
  const userCollection = await connection.getCollection()
  let data = await userCollection.create(userData)
  if(data){
    return data
  }else{
    return null 
  }
};

module.exports = {
  getAllUsers,
  createUser,
};
