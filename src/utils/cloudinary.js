// cloudinary is mn siple goal ye ye ky file

import { v2 as cloudinary } from "cloudinary";

// ye file read write async or file ki jo bhi activity hen us n help krta  hy
// unlink
import fs from "fs";

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;
    // upload the file on cloudinary
    const response = await cloudinary.uploader(localFilePath, {
      resource_type: "auto",
    });
    // console message
    console.log("file is uploded successfully", response.url);
    return response;
  } catch (error) {
    fs.unlinkSync(localFilePath); // ye remove the locally save temp file
    return null;
  }
};

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export {uploadOnCloudinary};
