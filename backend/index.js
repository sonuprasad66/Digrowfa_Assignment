const { connection } = require("./Config/db");
const PORT = process.env.PORT || 8000;
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
app.use(express.json());
app.use(cors());

app.listen(PORT, async () => {
  try {
    await connection;
    console.log("Database connected successful");
    console.log(`App listening on port ${PORT}`);
  } catch (err) {
    console.log(err);
    console.log("Database connected Failed");
  }
});
