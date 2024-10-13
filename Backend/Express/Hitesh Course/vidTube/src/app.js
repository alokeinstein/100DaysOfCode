import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

//common middleware
app.use(express.json({limit: '16kb'}))
app.use(express.urlencoded({extended:true, limit: '16kb'}))
app.use(express.static('public'))
app.use(cookieParser())

//import routes
import healthcheckRoutes from './routes/healthcheck.routes.js'
import userRouter from './routes/user.routes.js'
import {errorHandler} from './middlewares/error.middlewares.js'

//routes
app.use("/api/v1/healthcheck", healthcheckRoutes)
app.use("/api/v1/users", userRouter)
app.use(errorHandler)


export {app}





/* 
URL-encoded payloads: it means in url there is data which we convert via enconding and convert it into special format like &%$/ something like that and using this special characters things are passed in the url and urlencoded is used to parse url encoded data and extended is used to parse nested objects and complex data structures , if extended is set to false then it can only parse url encoded data with simple data structures.
*/