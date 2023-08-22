import express from "express";
import {scrapeMed} from "./scrapers.js";

const router = express.Router();

router.post("/", async (req, res) => {
  console.log(req.body);
  // scrape
  const med = await scrapeMed(req.body.name);
  res.json(med);
});

export default router;
