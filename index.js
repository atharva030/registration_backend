const express = require("express");
const RegisterModel = require("./Models/Register");
const mongoose = require("mongoose");
const nodeMailer = require("nodemailer");
const mongoURI =
  "mongodb+srv://rnxg:mzwu1igSarfiXD0M@cluster0.pcnblcg.mongodb.net/?retryWrites=true&w=majority";
let otpCode = Math.floor(Math.random() * 10282 + 1);
let bool = true;
const app = express();
var cors = require("cors");

const port = 5000;
const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
app.use(cors());
app.use(express.json());

app.post("/registration", async (req, res) => {
  send()
  const data = new RegisterModel({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    phone: req.body.phone,
    password: req.body.password,
  });
  try {
    await send(req.body.email);
    const dataToSave = await data.save();
    console.log(data);
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

console.log(otpCode)
app.post("/receiveotp", async (req, res) => {
  // send()
  const otpdata = req.body.receiveOtp;
  try {
    if (otpCode == otpdata && bool) {
      console.log("Congratulations your are registered successfully");
      res.status(200);
      bool = false;
    }
  } catch (error) {
    console.log("Invalid OTP");
    res.status(error);
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

const transporter = nodeMailer.createTransport({
  service: "gmail",
  host: "sggs.ac.in",
  port: 587,
  secure: false,
  requireTLS: true,
  auth: {
    user: "rnxg@sggs.ac.in",
    pass: "yvadkwolbehmuwca",
  },
});

async function send(email) {
  receive(otpCode);

  const result = await transporter.sendMail({
    from: "rnxg@sggs.ac.in",
    to: email,
    subject: "RNXG- Email Verification",
    text: `Your OTP for Verification is : ${otpCode}`,
  });
  console.log(JSON.stringify(result, null, 4));
}

async function receive(otp) {
  let otpReceive = 6569;
  if (otp == otpReceive) {
    console.log("MATCHED");
  } else {
    console.log("NOT MATCHED");
  }
  console.log(otp);
}
app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
