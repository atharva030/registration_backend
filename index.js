const express = require("express");
const ContentModel = require("./models/Content");
const mongoose = require("mongoose");
const app=express();
const port=8000;
var cors=require('cors')
const mongoURI="mongodb+srv://atharva:Pankhuri@cluster0.3asiwc6.mongodb.net/?retryWrites=true&w=majority"
app.use(express.json());
mongoose.connect(mongoURI,{
    useNewUrlParser:true,
});
app.use(cors())
app.post("/registration",async(req,res)=>{
   
  
    const data = new ContentModel({
          first_name: req.body.first_name,
          last_name: req.body.last_name,
          email: req.body.email,
          phone:req.body.phone,
           org_name: req.body.org_name,
           org_address: req.body.org_address,
           password: req.body.password,
  })

  try {
      const dataToSave = await data.save();
      res.status(200).json(dataToSave)
  }
  catch (error) {
      res.status(400).json({message: error.message})
  }

})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
  