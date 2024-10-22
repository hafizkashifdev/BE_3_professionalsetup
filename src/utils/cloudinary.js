// cloudinary is mn siple goal ye ye ky file

import { v2 as cloudinary } from "cloudinary";


// ye file read write async or file ki jo bhi activity hen us n help krta  hy
// unlink
import fs from "fs";


cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});


const uploadOnCloudinary = async (localFilePath) => {
  if (!localFilePath) return null; // Early return if no file path is provided

  try {
    // Upload the file to Cloudinary
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto", // This can be image, video, raw, or auto
    });

    // Log the URL of the uploaded file
    console.log("File uploaded successfully:", response.url);
    return { url: response.url }; // Ensure to return an object with a url property
  } catch (error) {
    console.error("Error uploading to Cloudinary:", error);

    // Attempt to delete the local file asynchronously and log any error
    fs.unlink(localFilePath, (err) => {
      if (err) console.error('Failed to delete local file after upload error', err);
    });

    return null; // Return null to indicate the upload was unsuccessful
  }
};

export { uploadOnCloudinary };
