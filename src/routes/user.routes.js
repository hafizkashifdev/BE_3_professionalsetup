import { Router } from "express";
import { registerUser, loginUser, logoutUser,refreshAccessToken } from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

// Registration route with file upload for avatar and cover image
router.post("/register", 
  upload.fields([
    { name: "avatar", maxCount: 1 },
    { name: "coverImage", maxCount: 1 }
  ]),
  registerUser
);

// Login route
router.post("/login", loginUser);

// Logout route secured with JWT verification middleware
router.post("/logout", verifyJWT, logoutUser);
// ham ny jwt verification ni lagai q k sara kaam ham ny isi file mn kia hy isi ley abhi key ley us ki zarorat ni hy 
router.post("/refresh-token", refreshAccessToken);

export default router;
