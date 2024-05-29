import 'dotenv/config'

// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";
import connectDB from "./db/index.js";
import app from './app.js';

// import dotenv from "dotenv"

// require('dotenv').config()

// dotenv.config({
//     path:'./env'
// })


connectDB().then(()=>{

    app.listen(process.env.PORT || 8000),()=>{
        console.log("server is running on port",process.env.PORT);
    }
})
.catch((err)=>{
    console.log(err,"mongo db connection failed ");
})
    

// (async()=>{
//     try{
// await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`

// )
// app.on("error"),(error)=>{
//     console.log(error,"error ");
// throw error
// }
// app.listen(process.env.PORT,()=>{
//     console.log(`App is listing on Port ${process.env.PORT}`);
// })}
//     catch(error){
// console.log(error,"error ");
// throw error
//     }
// })()