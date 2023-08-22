import express from "express";
import {scrapeMed} from "./scrapers.js";

const router = express.Router();

router.post("/", async (req, res) => {
  console.log(req.body);
  // scrape
  try {
  const med = await scrapeMed(req.body.name);
  res.json(med);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

export default router;
