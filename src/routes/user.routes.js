import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js";
import {loginUser } from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import {logoutUser} from "../controllers/user.controller.js";

const router = Router();

// Correctly pass an array of field objects to upload.fields
router.route("/register").post(
  upload.fields([
    { name: "avatar", maxCount: 1 },
    { name: "coverImage", maxCount: 1 }
  ]),
  registerUser
);

router.route("./login").post(loginUser);
// secured routes 

router.route("logout").post(verifyJWT,logoutUser);

export default router;