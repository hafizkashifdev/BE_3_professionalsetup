import {asyncHandler} from "../utils/asyncHandler.js";
import User  from "../models/user.model.js";
import jwt from "jsonwebtoken";
import ApiError from "../utils/ApiError.js";

export const verifyJWT = asyncHandler(async (req, res, next) => {
  try {
    const token = req.cookies.accessToken || req.header("Authorization")?.replace("Bearer ", "");

    if (!token) {
      throw new ApiError(401, "Access denied. No token provided");
    }

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, async (err, decodedToken) => {
      if (err) {
        throw new ApiError(401, "Invalid token");
      }

      const user = await User.findById(decodedToken._id).select("-password -refreshToken");
      if (!user) {
        // next vidio : dissscussed by frontend
        throw new ApiError(403, "User not found");
      }

      req.user = user;
      next();
    });
  } catch (error) {
    throw new ApiError(401, "Invalid token" || error.message);
  }
});