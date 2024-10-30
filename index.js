require("dotenv").config();
const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();
const User = mongoose.model(
  "User",
  new mongoose.Schema({
    name: String,
  })
);
console.log(process.env.DB_URI);

mongoose.connect(process.env.DB_URI, {
  dbName: "node_simple",
});
app.get("*", async (req, res) => {
  const newUser = await User.create({
    name: "Ashish",
  });
  res.json(newUser);
});
app.listen(5001, () => {
  console.log("Server Started");
});
