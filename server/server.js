  require("dotenv").config();

  const express = require("express");
  const bodyParser = require("body-parser");
  const mongoose = require("mongoose");
  const cors = require("cors");

  const { PORT } = require("./configs/server.config");

  const app = express();
  app.use(cors());

  const MONGODB_URI = process.env.MONGODB_URI;

  if (!MONGODB_URI) {
    console.error("MONGODB_URI is not defined. Please check your .env file.");
    process.exit(1);
  }

  mongoose.connect(MONGODB_URI)
    .then(() => {
      console.log("Connected to Database");
    })
    .catch((err) => {
      console.error("Database connection error:", err);
    });

  app.use(bodyParser.json());
  require("./src/Routes/auth.routes")(app);
  require("./src/Routes/notes.routes")(app);

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });

