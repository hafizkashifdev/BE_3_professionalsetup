import { asyncHandler } from "../utils/asyncHandler.js";
import ApiError from "../utils/ApiError.js"
import{uploadOnCloudinary} from "../utils/cloudinary.js"
import {ApiResponse} from "../utils/ApiResponse.js"
import {User} from "../models/user.model.js"
const registerUser =asyncHandler (async(req,res,next)=>{



// get user details fro frontend
// validation
// check oif user already exist
// check for images 
// check for avator
// uploaad them to cloudinary
// create user object 
// create db call
// remove password and refresh token field from response
// check for user creation
// return response

const {fullName,email,username,password}=req.body
console.log("Full Name: ",fullName,"email",email,"userName",username,"password",password);

// if(fullName==""){
//     throw new ApiError(400,"fullname is required")
// }


if([fullName,email,username,password].some(()=>field?.trim()===""))
{
    throw new ApiError(400,"fullName is required")
}

const existedUser= await User.findOne({$or:[{username},{email}]})
//     res.status(200).json({
//         message:"kashif test be"
//     })

if(existedUser){
    throw new ApiError(400,"user with email and user with name  already  exists")
}
const avatarLocalPath=req.files?.avatar[0]?.path
const coverImageLocalPath=req.files?.coverImage[0]?.path

if(!avatarLocalPath){
throw new ApiError(400,"avatar is required")
}

const avataruploder =await uploadOnCloudinary(avatarLocalPath);

const coverImage =await uploadOnCloudinary(coverImageLocalPath);

if(!avatar){
    throw new ApiError(400,"avatar is required")
}

const user=User.create({
    fullName,
    avatar:avatar.url,
    coverImage:coverImage?.url || "",
    email,
    password,
    username:username.toLowerCase(),

})

const createdUser= await User.findById(user._id).select("-password -refreshToken")

if(!createdUser)
    {
        throw new ApiError(400,"some thing went wrong when creating user")
    }

    return res.status(201),json(new ApiResponse(200,createdUser,"user registered successfully"))

})
export {registerUser}