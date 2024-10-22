import { asyncHandler } from "../utils/asyncHandler.js";
import ApiError from "../utils/ApiError.js"
import{uploadOnCloudinary} from "../utils/cloudinary.js"
import {ApiResponse} from "../utils/ApiResponse.js"
import {User} from "../models/user.model.js"
const registerUser =asyncHandler (async(req,res,next)=>{



// get user details from frontend
// validation
// check if user already exist
// check for images 
// check for avator
// uploaad them to cloudinary
// create user object 
// create db call
// remove password and refresh token field from response 
// check for user creation
// return response

// hamen req.body sey sari details mill jati hen but some time url sey bhi details a rahi hot i hy but is wqt ky ley ham req.body ko destructre krty hen

const { fullName, email, username, password ,} = req.body;
   

// if(fullName==""){
//     throw new ApiError(400,"fullname is required")
// }


// array pr ham map bhi laga sakty hen but ham some bhi laga sakta hy ye true false return krta hy 1 call back reyturn 
// kr den gy  agr trim krny ky bad bhi empty ho to ye true return krey ga
// map krny sey hame return krna parey ga firh final return etc 


if ([fullName, email, username, password,].some((field) => field?.trim() === "")) {
    throw new ApiError(400, "All fields are required");
}
// check if user already exist is ky ley sab sey pehley model sey user model.js sey user ko import karen gy ye user data base sey direct contact krta ye mongo db ko call karey ga
// abb hamrey pass user hy aur hameen data base sey pochna hy ky hmaeey findone sey pehla user find karen gy
// $or: operator hamm username ya email ya koi bhi value jo hame chk krni hy wo array ky ander dall den gy 





const existedUser = await User.findOne({ $or: [{ username }, { email }] });
if (existedUser) {
    throw new ApiError(409, "User with this email or username already exists");
}

// images chk krni hy abhi tak hm ny ye dekha hy ky req.body ky ander sara data hy hamm ny q k middle ware bna dia hy to hameey ye aur bhi access deta hy 
// 

const avatarLocalPath = req.files?.avatar[0]?.path;
    const coverImageLocalPath = req.files?.coverImage[0]?.path;
    console.log(avatarLocalPath);
    if (!avatarLocalPath) {
        throw new ApiError(400, "Avatar is required");
    }
// is ky bad upload krna hy agr ham koi chz ko upload krwan ho to await likhty hen jb upload ho jaeyy 1 reference do takey hamm is ko store krwa saken 


const avatarUploadResult = await uploadOnCloudinary(avatarLocalPath);
const coverImageUploadResult = await uploadOnCloudinary(coverImageLocalPath);

// agr avator ni hi to yahi error dey do taqy data base na pathhy 


if (!avatarUploadResult) {
    throw new ApiError(400, "Avatar upload failed");
}

    

let lastUser = await User.findOne().sort({ userNumber: -1 });

    let userNumber;
    if (lastUser && lastUser.userNumber !== undefined) {
        userNumber = lastUser.userNumber + 1;
    } else {
        userNumber = 1; 
    }

let contactUser= fullName+userNumber;

// last step chk kro agr sab kuxh ho gia to data base  mn entry kr do
// method create sey ham user create kr den gy


 // Create user with the URLs from Cloudinary
 const user = await User.create({
    fullName,
    avatar: avatarUploadResult.url,  // Ensure this property is correctly named
    coverImage: coverImageUploadResult?.url || "",
    email,
    password,
    userName: username.toLowerCase(),
    userNumber,
    userConcat:contactUser,
});

// agr user succefully create ho gia to mogo db kuhd hi _is har user ky sath 1 field add kr deta hy
// to ham _id sey us ko find karty hen agr user ho ga to mill jaeyy ga 
// to ham .select pass kr ky wo likhty hen jo ham ko ni caheey 
console.log("Full Name: ", fullName, "email", email, "userName", username, "password", password,userNumber,"userNumber",contactUser,"contactUser");
const createdUser = await User.findById(user._id).select("-password -refreshToken");
    if (!createdUser) {
        throw new ApiError(400, "Something went wrong when creating the user");
    }

    return res.status(201).json(new ApiResponse(200, createdUser, "User registered successfully"));
});

export { registerUser };