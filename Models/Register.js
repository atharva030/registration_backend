const mongoose = require("mongoose");
const registerSchema = new mongoose.Schema({
  first_name: {
    type: String,
    require: true,
  },
  last_name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  phone:{
    type:Number,
    require:true,
    unique:true
  },
  password: {
    type: String,
    require: true,
  },

  
});

const registerUser=mongoose.model("Register", registerSchema); 

module.exports = registerUser