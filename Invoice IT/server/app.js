require("dotenv").config();
const express = require('express');
const app = express();
require("./db/connection");
const cors = require("cors")
const purchaseorders = require('./models/purchaseorders')

const router = require("./routes/router")


app.use(cors());

app.use(express.json());
app.use(router);
app.use(express.urlencoded());

const port = 8003;




app.listen(port,()=>{
    console.log(`app is started on port on ${port}`)
});