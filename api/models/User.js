const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
  {
    name: {
      type: String,
      min: 3,
      max: 20,
    },
    age: {
      type: Number,
    },
    gender: {
      type: String,
    },
    address: {
      type: String,
      default: "",
    },
  },
  {collection:"mern_datas", timestamps: true }
);

const connectionOptions={
      useNewUrlParser:true,
      useUnifiedTopology:true,
  }
  
const url= "mongodb://127.0.0.1:27017/mern"

let connection={}
  
connection.getCollection = async ()=>{
  let database= await mongoose.connect(url,connectionOptions);
  let userModel= await database.model("mern_datas",UserSchema);
  return userModel;
}

// async function k(){
// const u=await connection.getCollection()
// // console.log(u)
// const data = await u.find({})
// console.log(data)
// }
// k()
module.exports = connection;
