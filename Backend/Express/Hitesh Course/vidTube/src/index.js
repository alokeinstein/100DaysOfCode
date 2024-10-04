import { app } from "./app.js";
import dotenv from 'dotenv'
import connectDB from "./db/index.js";

dotenv.config()

const PORT = process.env.PORT || 3000
console.log("MongoDB PORT: ",process.env.PORT)
console.log(`ENV: ${process.env}`)

connectDB()
.then(()=>{
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`)
    })
})
.catch(err => console.log('MongoDB  error: ',err)  )