const dotenv = require('dotenv');
const express = require("express");
const app = express();
const errorMiddleWare = require("./middleWare/error");
const cookieParser = require("cookie-parser");
const fileUpload = require("express-fileupload");

//Route Imports
const user = require("./routes/userRoute");


app.use((req,res,next)=>{
    // const allowedOrigins = [process.env.LOCAL_FRONTEND_URL,process.env.PROD_FRONTEND_URL];
    // const origin = req.headers.origin;
    // if (allowedOrigins.includes(origin)) {
    //      res.setHeader('Access-Control-Allow-Origin', '*');
    // }
    res.setHeader('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods',"POST, PUT, GET, DELETE");
      res.header("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With")
      res.header("Access-Control-Allow-Credentials",true)
      next();
    })
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb', extended:true}));
app.use(cookieParser());
app.use(fileUpload());

app.use("/", user);

//MiddleWare for Error
app.use(errorMiddleWare);

module.exports = app;