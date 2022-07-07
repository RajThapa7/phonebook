const express = require("express");
const app = express();
require("dotenv").config();
const decodedToken = require("./middleware/authenticate");
const phoneRouter = require('./routes/phone')
const cors = require('cors')
const port = process.env.PORT || 5000;
const connect = require("./db/connect");

app.get('/', (req, res)=>{
    res.send('hello')
})

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(decodedToken);
app.use('/', phoneRouter)
app.use(cors());
app.use(function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
const start = async () => {
  try {
    await connect(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
