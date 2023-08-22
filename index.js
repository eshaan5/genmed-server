import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import payment from "./payment.js";
import bodyParser from "body-parser";
import medicine from "./medicine.js";

const app = express();
const port = process.env.PORT || 4000;
dotenv.config();

//app.use(express.static(path.resolve(__dirname, '../client/build')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
/*const corsOptions ={
  origin:'http://localhost:3000', 
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200
}*/
app.use(cors());
/*app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // disabled for security on local
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});*/

//app.use(express.json({ extended: false }));

app.use("/payment", payment);

app.use("/medicine", medicine);

app.listen(port, () => {
  console.log(`GenMed listening on port ${port}`);
});
