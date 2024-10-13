import multer from "multer"


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/temp')
    },

    //This function defines how the file should be named when saved on the server.
    filename: function (req, file, cb) {
        //generates a unique suffix based on the current timestamp and a random number, ensuring each uploaded file has a unique name.
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix)
    }
  })
  
 export const upload = multer({ 
    storage
  })
  
  /* 
   Multer is a middleware for handling multipart/form-data, which is primarily used for uploading files in Node.js applications. It processes incoming file data in forms.

   SUMMARY:
    1. Multer Storage Configuration: Sets up a temporary storage directory (./public/temp) and ensures uploaded files have unique names before being processed by the server.
    
    2. Multer Middleware: Configures the middleware to store files in the defined directory with the custom file-naming strategy.

  */