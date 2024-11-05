import { Router } from "express";
import {
  registerUser,
  loginUser,
  logoutUser,
  refreshAccessToken,
  getCurrentUser,
  updateAccountDetails,
  updateUserAvatar,
  updateUserCoverImage,
  getUserChannelProfile,
  getWatchHistory,
  changeCurrentPassword, // Add this line
} from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

// Registration route with file upload for avatar and cover image
router.post(
  "/register",
  upload.fields([
    { name: "avatar", maxCount: 1 },
    { name: "coverImage", maxCount: 1 },
  ]),
  registerUser
);

// Login route
router.post("/login", loginUser);

// Logout route secured with JWT verification middleware
router.post("/logout", verifyJWT, logoutUser);
// ham ny jwt verification ni lagai q k sara kaam ham ny isi file mn kia hy isi ley abhi key ley us ki zarorat ni hy
router.post("/refresh-token", refreshAccessToken);

router.route("/change-password").post(verifyJWT, changeCurrentPassword); // JWT verification middleware

router.route("/current-user").post(verifyJWT, getCurrentUser); // JWT verification middleware
router.route("/update-account").patch(verifyJWT, updateAccountDetails); // JWT verification middleware
router
  .route("/avatar")
  .patch(verifyJWT, upload.single("avatar"), updateUserAvatar); // JWT verification middleware
router
  .route("/cover-image")
  .patch(verifyJWT, upload.single("coverImage"), updateUserCoverImage); // JWT verification middleware
router.route("/c/:username").get(verifyJWT, getUserChannelProfile); // JWT verification middleware
router.route("/history").get(verifyJWT, getWatchHistory); // JWT verification middleware

export default router;