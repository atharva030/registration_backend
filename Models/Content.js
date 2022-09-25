const mongoose = require("mongoose");
const ContentSchema = new mongoose.Schema({
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
  org_name: {
    type: String,
    require: true,
  },
  org_address: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },

  
});

const Content=mongoose.model("Content", ContentSchema); 

module.exports = Content