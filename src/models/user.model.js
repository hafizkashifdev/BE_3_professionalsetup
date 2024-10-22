import mongoose, { Schema } from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
const userSchema = new Schema(
  {
    userName: {
      type: String,
      required: true,
      unique: true,
      lowerCase: true,
      trim: true,
      index: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
      lowerCaseL: true,
      trim: true,
    },
    fullName: {
      type: String,
      require: true,
      lowerCaseL: true,
      trim: true,
      index: true,
    },
    avatar: {
      type: String, // cloudinary url
      required: true,
    },
    coverImage: {
      type: String,
    },
    userNumber: {
      type: Number, // New field for auto-incremented user number
      unique: true,
    },
   userConcat: {
type:String,
unique: true,
    },
    watchHistory: {
      type: Schema.Types.ObjectId,
      ref: "video",
    },
    password: {
      type: String,
      required: [, "password is required"],
    },
    refreshToke: {
      type: String,
    },
    
  },
  {
    timestamps: true,
  }
);
// jbb pre ky ander call back likho to simple na likhna q ky  is ky andar this ka reference ni hota  i s ley function async function sey likhhy gy
// to is sey ye msla ho ga jb bhi koi chz save ho gi to ye again encrypt pass incrypt kareyy ga to hamm special code likhy gy if condition chk karen gy pass modified hy to save and encrypt kro otherwise ni
// bcrypt behind the seen bht sarey kaam krty hen to ham method bnaeen gy jis mn hamm user seyt pocheen gy pass save hy ya ni hy so ham ney custom method bnaeen gy

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});
//  custom method ky ley user schema lena parta  hy is ky andar 1 method hota hy jis ka name hy method or ham apni marzi ky methosd add r sakty hen

userSchema.method.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.password);
};

// ham access token ko genrate krny ky ley 1 or method likhy gey isi trah sey hi refresh token

// userSchema.method.generateAccessToken= funcion(){}

// jwt ky pass 1 sign method hota hy jo ky token genrate kr deta hy is ko payload den 1 _id, jo kymongodb sy mill jaeey gi or email sy email mill jaeey gi and this.username sy username ley len gy isis trah full name
userSchema.method.generateAccessToken = function () {

    // payload
return jwt.sign({
    _id:this._id,
    email:this.email,
    userName:this.userName,
    fullName:this.fullName,

},

//  acesstoken 

process.env.ACCESS_TOKEN_SECRET,{
    expiresIn:process.env.ACCESS_TOKEN_EXPIRY
}
)

};
userSchema.method.generateRefreshToken = function () {


    // payload
    return jwt.sign({
        _id:this._id,
        email:this.email,
        userName:this.userName,
        fullName:this.fullName,
    
    },
    
    //  acesstoken 
    
    process.env.REFRESH_TOKEN_SECRET,{
        expiresIn:process.env.REFRESH_TOKEN_EXPIRY
    }
    )

};

export  const User = mongoose.model("User", userSchema);
