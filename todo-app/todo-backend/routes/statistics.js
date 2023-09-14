const express = require("express");
const router = express.Router();
const redis = require("../redis");

router.get("/", async (_, res) => {
  const todoCount = await redis.getAsync("added_todos");
  res.send({ todoCount });
});

module.exports = router;
