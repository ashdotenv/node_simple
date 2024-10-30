require("dotenv").config();
const express = require("express");
const { default: mongoose, Mongoose } = require("mongoose");
const app = express();
const User = mongoose.model(
  "User",
  new mongoose.Schema({
    name: String,
  })
);
mongoose.connect(process.env.DB_URI, {
  dbName: "node_simple",
});
app.get("*", async (req, res) => {
  const newUser = await User.create({
    name: "Ashish",
  });
  res.json(newUser);
});
app.listen(5000, () => {
  console.log("Server Started");
});
