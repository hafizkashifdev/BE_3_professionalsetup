import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB= async ( )=>{
    try{
 const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
 console.log(`\n MoNgo DB Connected !! at HOST :${connectionInstance.connection.host} \n server is running on port: ${process.env.PORT}` );
    }
    catch(error){
console.log("error", error);
process.exit(1)
    }

}
export default connectDB