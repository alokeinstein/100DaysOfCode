import { v2 as cloudinary } from "cloudinary";
import fs from "fs"; //built in file storage method in the node js
import dotenv from "dotenv";
dotenv.config();

// Configuration Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

//This function is responsible for uploading files to Cloudinary and then deleting them from the local server after the upload.
const uploadOnCloudinary = async (localFilePath) => {
  try {
    // console.log("Cloudinary Config:", {
    //   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    //   api_key: process.env.CLOUDINARY_API_KEY,
    //   api_secret: process.env.CLOUDINARY_API_SECRET,
    // });

    if (!localFilePath) return null;
    //uploading the file to cloudinary from local files using its API
    const response = await cloudinary.uploader.upload(localFilePath, {
      //by sepecifying resource_typle= auto means we are telling cloudinary to automatically detect the type of the file is being uploaded  (eg: video,image etc)
      resource_type: "auto",
    });

    //After successfull upload we are logging the url where the file is now hosted on cloudinary
    console.log("File uploaded successfully:" + response.url);

    //once the file is uploaded , we would like to delete it from our server(local file)
    fs.unlinkSync(localFilePath);

    return response; //it contains the url and the public_id of the uploaded file
  } catch (error) {
    //local file will be deleted bhale upload hua ho ya na hua ho
    fs.unlinkSync(localFilePath);
    return null;
  }
};

const deleteFromCloudinary = async (publicId) => {
  try {
    if (!publicId) return;
    const result  = await cloudinary.uploader.destroy(publicId);
    console.log("File deleted successfully from Cloudinary", publicId);
  } catch (error) {
    console.log("Error deleting file from Cloudinary", error);
    return null
  }
};





export { uploadOnCloudinary ,deleteFromCloudinary};

/* 
SUMMARY

1.Cloudinary Configuration: Sets up Cloudinary API credentials using environment variables for authentication.
2.`uploadOnCloudinary` Function:
--->Takes a local file path.
--->Uploads the file to Cloudinary and logs its URL.
--->Deletes the file from the local server after upload, ensuring that the server doesn't retain large numbers of files unnecessarily.
   */
