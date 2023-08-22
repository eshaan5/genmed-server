import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import payment from "./payment.js";
import bodyParser from "body-parser";
import medicine from "./medicine.js";

const app = express(); // this we do everytime
const port = process.env.PORT || 4000; // this we do everytime
dotenv.config(); // this we do everytime

app.use(bodyParser.json({ limit: "30mb", extended: true })); // images
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true })); // to accept the data
app.use(
  cors({
    origin: ["http://localhost:3000/", "http://example.net"],
  })
); // to allow cross-origin resource sharing

app.use("/payment", payment);
app.use("/medicine", medicine);

app.listen(port, () => {
  console.log(`GenMed listening on port ${port}`);
});
