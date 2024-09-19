const express = require('express')
const app = express()//app(its an object) creates an instance of the module named express 
const port = 3000
const blog = require('./routes/blog')
const fs = require("fs")

// app.use(express.static("public"))

//This tells the app to use the blog router for all routes starting with /blog. Any requests that start with /blog will be handled by the router defined in the blog.js file.
app.use('/blog', blog)

// Middleware 1 - Logger for our application
app.use((req, res, next) => {
    console.log(req.headers)//logs the request headers.
    req.harry = "I am harry bhai";//adds a custom property harry to the req object. This value can be accessed in other routes/middleware.
    fs.appendFileSync("logs.txt", `${Date.now()} is a ${req.method}\n`)//logs the current timestamp and HTTP method to a file logs.txt.
    console.log(`${Date.now()} is a ${req.method}`)
    // res.send("Hacked by Middlware 1")
    next()//passes control to the next middleware or route handler. If next() is not called, the request will hang and not proceed.
})

// Middleware 2: It logs 'm2' and then calls next() to continue the request flow.
app.use((req, res, next) => {
    console.log('m2')
    req.harry = "I am Rohan bhai";
    next()
})

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/about', (req, res) => {
    //This route responds with 'Hello about!' followed by the value of req.harry, which will be "I am Rohan bhai" because Middleware 2 overwrites the earlier value from Middleware 1.
    res.send('Hello about!' + req.harry)
})

app.get('/contact', (req, res) => {
    res.send('Hello contact!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})



