 const express = require('express')
const app = express()
const port = 3000

//app.use is a middleware is using a built in middleware which is express.static which is making a folder named public and making it public
//files which are in public folder can be accessed and not the server code which is server source code which is a bad practice
//if i want that there should be two folders which can be accessed through express.static then i have to use `app.use(express.static('file'))` thats how i can public a folder which is named file. Means i can make multiple folders public and accessible 
app.use(express.static('public'))

// app.get or app.post or app.put or app.delete(path, handler)
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/about', (req, res) => {
    res.send('About us')
})

app.get('/contact', (req, res) => {
    res.send('Hello contact me!')
})

app.get('/blog', (req, res) => {
    res.send('Hello blog!')
})

app.get('/blog/:slug', (req, res) => {
    // logic to fetch {slug} from the db
    // For URL: http://localhost:3000/blog/intro-to-padosi?mode=dark&region=in
    console.log(req.params) // will output { slug: 'intro-to-padosi' }
    console.log(req.query) // will output { mode: 'dark', region: 'in' }

    res.send(`hello ${req.params.slug}`)
})

// app.get('/blog/intro-to-js', (req, res) => {
//     // logic to fetch intro to js from the db
//     res.send('Hello intro-to-js!')
// })

// app.get('/blog/intro-to-python', (req, res) => {
//     // logic to fetch intro to python from the db
//     res.send('Hello intro-to-python!')
// })

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})