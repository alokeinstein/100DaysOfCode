import {asyncHandler} from '../utils/asyncHandler.js'
import {ApiError} from '../utils/ApiError.js'
import {User} from '../models/user.models.js'
import { uploadOnCloudinary,deleteFromCloudinary } from '../utils/cloudinary.js'
import { ApiResponse } from '../utils/ApiResponse.js'
import { upload } from '../middlewares/multer.middleware.js'




const generateAccessAndRefreshToken =  async (userId) => {
    try {
        const user =  await User.findById(userId)
    
        if(!user){
            throw new ApiError(404, "User not found")
        }
    
        const accessToken =  user.generateAccessToken()
        const refreshToken = user.generateRefreshToken()
    
        user.refreshToken = refreshToken
        await user.save({validateBeforeSave: false})
        return {accessToken, refreshToken}
    } catch (error) {
        throw new ApiError(500, "Something went wrong while generating access and refresh token")
    }
}









const registerUser = asyncHandler(async(req,res)=>{
    const {fullname,email,username,password }  = req.body
    
    //validation
    if([fullname, email, username, password].some((field) => field?.trim() === "")){
        throw new ApiError(400, "All fields are required")
    }

    const existedUser =  await User.findOne({
        //$or:[] is a mongodb operator that checks if the email or username exists in the database
        //i could check just one by using await User.findOne({email})
        $or:[{email},{username}]
    })

    if(existedUser){
        throw new ApiError(409, "User already exists")
    }

    console.warn(req.files)
    const avatarLocalPath = req.files?.avatar?.[0]?.path
    const coverLocalPath = req.files?.coerImage?.[0]?.path

    if(!avatarLocalPath){
        throw new ApiError(400, "Avatar file is missing")
    }

    // const avatar = await uploadOnCloudinary(avatarLocalPath)
    // let coverImage = ""
    // if(coverLocalPath){
    //     coverImage = await uploadOnCloudinary(coverLocalPath)
    // }


    let avatar;
    try {
        avatar = await uploadOnCloudinary(avatarLocalPath)
        console.log(`Uploaded avatar: ${avatar}`)
    } catch (error) {
        console.log(`Error uploading avatar: ${error}`)
        throw new ApiError(500, "Failed to upload avatar")
    }


    let coverImage;
    try {
         coverImage = await uploadOnCloudinary(coverLocalPath)
        console.log(`Uploaded coverImage: ${coverImage}`)
    } catch (error) {
        console.log(`Error uploading avatar: ${error}`)
        throw new ApiError(500, "Failed to upload coverImage")
    }

    
try {
    const user = await User.create({
        fullname,
        email,
        username :username.toLowerCase(),
        password,
        avatar: avatar.url,
        coverImage : coverImage?.url || ""
    })

    //if we want to deselect the password and refreshToken from the response then we use .select("-password -refreshToken") in the schema to do that.
    const createdUser = await User.findById(user._id).select(
        "-password -refreshToken"
    )

    if(!createdUser){
        throw new ApiError(500, "Failed to create user")
    }

    return res.status(201).json(
        new ApiResponse(201,  createdUser, "User created successfully")
    )
} catch (error) {
    console.log("User creation failed")
    if(avatar){
        await deleteFromCloudinary(avatar.public_id)
    }
    if(coverImage){
        await deleteFromCloudinary(coverImage.public_id)
    }

    throw new ApiError(500, "Something went wrong while registering a user and images were deleted from cloudinary")
}


})









const loginUser = asyncHandler (async(req,res)=>{
    //get data from body
    const {email, username, password} = req.body
    //validation
    if(!email){
        throw new ApiError(400, "Email is required")
    }

    const user =  await User.findOne({
        $or:[{email},{username}]
    })

    if(!user){
        throw new ApiError(404, "User not found")
    }

    //validate password
    const isPaaswordValid =  await user.isPasswordcorrect(password)

    if(!isPaaswordValid){
        throw new ApiError(400, "Invalid password credentials")
    }

    const {accessToken, refreshToken} = await generateAccessAndRefreshToken(user._id)

    const loggedInUser = await User.findById(user._id).select("-password -refreshToken")
    if(!loggedInUser){
        throw new ApiError(500, "Failed to login user")
    }

    const options ={
        httpOnly :true,
        secure: process.env.NODE_ENV === "production",
    }

    return res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json(
        new ApiResponse(
            200,
            {user: loggedInUser,accessToken, refreshToken},
            "User logged in successfully")
    )





})

export {
    registerUser,
    loginUser
}