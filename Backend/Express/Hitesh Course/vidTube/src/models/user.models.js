import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true, //all the extra spaces will be removed
      index: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      index: true,
    },
    password: {
      type: String,
      required: [true, "passoword is required"], //if it is not true then give the message 'password is...'
    },
    fullname: {
      type: String,
      required: true,
      trim: true,
      index: true,
    },
    avatar: {
      type: String, //cloudinary URL
      required: true,
    },
    coverImage: {
      type: String, //cloudinary URL
    },
    watchHistory: [
      {
        type: Schema.Types.ObjectId,
        ref: "Video",
      },
    ],
    refreshToken: {
      type: String,
    },
  },
  { timestamps: true }//Mongoose give the in built property of timestamps which give me two fields : {createdAt: Date, updateAt:true}, this is so common that mongoose give you the option to do this 
);



/* pre hook runs before saving the data in the database */
userSchema.pre('save',async function(next){
  //if password is not modified then skip
  if(!this.isModified('password')) return next()

    //10 refers to the number of salt rounds, which is the cost factor for hasing.Higher number means more computation and means more security
  this.password = await bcrypt.hash(this.password, 10)
  next()
})


/* bcrypt.compare compares the provided password (from the login attempt) with the stored hashed password. It returns true if they match, false otherwise. */
userSchema.methods.isPasswordcorrect = async function(password){
  return await bcrypt.compare(password,this.password)
}


/* This method generates a JSON Web Token (JWT). */
userSchema.methods.generateAccessToken =  function(){
  //short lived access token
  jwt.sign({ 
    _id: this._id,
    username: this.username,
    email: this.email,
    fullname: this.fullname

  }, 
  process.env.ACCESS_TOKEN_SECRET,
  {expiresIn: process.env.ACCESS_TOKEN_EXPIRY}
);
}



userSchema.methods.generateRefreshToken = function(){
  return jwt.sign(
      {
          _id: this._id,
          
      },
      process.env.REFRESH_TOKEN_SECRET,
      {
          expiresIn: process.env.REFRESH_TOKEN_EXPIRY
      }
  )
}

export const User = mongoose.model("User", userSchema);
/* 



JWT Signing: Inside this method, the code calls jwt.sign(). This function creates a JSON Web Token (JWT). 
  --->Payload: This is the data you want to include in the token. In your case, the payload contains the user's _id, username, email, and fullname. It's essentially some user information packaged into a token.
  --->Secret: This is the secret string that was used to sign the token, and it is generated by the user
  --->Options: This is an object that contains options for the token. In this case, it contains an expiration time. 
    --->ExpiresIn: This is the time in seconds that the token will be valid for.



//UNDER THE HOOD :
Tokens: A token is a string of characters that is used to authenticate a user.Tokens are often used in systems to verify a user's identity, making sure the person accessing the data or service is who they say they are.

1.Token Creation: The server creates a token with the payload data (user info) and a header specifying the algorithm used for signing (commonly HMAC SHA256).

2.Signing: The server takes the encoded header and payload and uses the secret key to create a signature. This signature is unique and depends on both the token data and the secret key.

3.Combining: The final token is a combination of the encoded header, payload, and the signature. This is what gets sent to the client.


    // Verification on Client Side:
--->when the user logs in the detail then the userdata goes to the server and if everything matches then server send a token to the user which is stored in local storage.
--->When the client receives the token, it stores it.
--->For every request, the token is sent back to the server.
--->The server verifies the token by re-creating the signature using the secret key and checking if it matches the signature in the token.

    This ensures the data hasn't been tampered with, because any change in the payload would result in a different signature, which the server can detect.
*/