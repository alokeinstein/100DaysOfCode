const express = require('express')//This imports the Express module in the blog.js file to use the router.

const router = express.Router()//This creates a new router object. Routers in Express are used to handle different sets of routes, helping to modularize and organize your application.

// Middleware that is specific to this router :This middleware runs for any route in the blog router. It logs the current time and passes control to the next function using next().
router.use((req, res, next) => {
  console.log('Time: ', Date.now())
  next()
})


// define the home page route
router.get('/', (req, res) => {
  res.send('Birds home page')
})

// define the about route
router.get('/about', (req, res) => {
  res.send('About birds')
})

module.exports = router