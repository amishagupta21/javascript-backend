import { v2 as cloudinary } from 'cloudinary';
import fs from "fs"   //node k andar file system milta hai, ye help krta hai read, write,open, sync ,async etc 


cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});


const uploadOnCloudinary = async (localFilePath) => {
    try {
      if(!localFilePath) return null
      //upload file on cloudinary
      const response= await cloudinary.uploader.upload(localFilePath,{
        resource_type:"auto"
      })
      //file has been uploaded 
      console.log("file uploaded on cloudinary:",response.url)
      return response
    } catch (error) {
         fs.unlinkSync(localFilePath)//remove the loaclly saved temp file as the upload operation got failed
         return null;
    }
}
export {uploadOnCloudinary}