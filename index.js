const express = require("express");
const ContentModel = require("./Models/Content");
const mongoose = require("mongoose");
const mongoURI =
  "mongodb+srv://atharva:Pankhuri@cluster0.3asiwc6.mongodb.net/?retryWrites=true&w=majority";
const app = express();
var cors = require("cors");

const port = 5000;
const connectionParams={
    useNewUrlParser:true,
    useUnifiedTopology:true
  }
app.use(cors());
app.use(express.json());


app.post("/registration", async (req, res) => {
  const data = new ContentModel({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    phone: req.body.phone,
    org_name: req.body.org_name,
    org_address: req.body.org_address,
    password: req.body.password,
  });

  try {
    const dataToSave = await data.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
mongoose
  .connect(mongoURI, connectionParams)
  .then(() => {
    console.info("connected");
  })
  .catch((error) => {
    console.log("Error: ", error);
  });
app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
