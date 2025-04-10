require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();
const {DB_URL} = require("./configs/db.config");
const mongoose = require("mongoose");
const { PORT } = require("./configs/server.config");
const app = express();
var cors = require('cors')
const MONGODB_URI = "mongodb+srv://112215046:YOUR_PASSWORD@notescluster.3du8oxr.mongodb.net/?retryWrites=true&w=majority&appName=NotesCluster";

app.use(cors())
console.log("MONGODB_URI:", process.env.MONGODB_URI);
mongoose.connect(DB_URL).then(()=>{
    console.log("Connected to DataBase");
}).catch((err)=>{
    console.log({message : err});
})
app.use(bodyParser.json());
require("./src/Routes/auth.routes")(app);
require("./src/Routes/notes.routes")(app);


app.listen(PORT,()=>{
    console.log("Server Online");
})

