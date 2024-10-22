import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser";
import dotenv from 'dotenv'
const app= express();
dotenv.config()
app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))

app.use(express.json({limit:"16kb",}))
app.use(express.urlencoded({extended:true,limit:"16kb"}))
app.use(express.static("public"))
app.use(cookieParser())


// routes import 
import userRouter from "./routes/user.routes.js"

// routes declaration

app.use("/api/v1/users",userRouter)
app.listen(process.env.RUN_PORT,()=>{
    console.log(`server is running on port ${process.env.RUN_PORT}`)
})
export default app