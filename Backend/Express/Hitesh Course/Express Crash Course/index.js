import express from 'express'
import 'dotenv/config';//this is used to load environment variables from .env
import logger from './logger.js'
import morgan from 'morgan';
import chalk from 'chalk';//used for coloring the terminal 

const app = express()//app is an object
const port = process.env.PORT || 3000
app.use(express.json())

const morganFormat = ':method :url :status :response-time ms'
app.use(//app.use is a middleware and can be used only after initialization of express
  morgan(morganFormat, {
    stream: {
      write: (message) => {
        const logObject = {
          method: message.split(" ")[0],
          url: message.split(" ")[1],
          status: message.split(" ")[2],
          responseTime: message.split(" ")[3],
        };
        logger.info(JSON.stringify(logObject)); // Log the object as a string
      },
    },
  })
);

let teaData = []
let nextId = 1

// add a new tea
app.post('/teas', (req, res) => {
  console.log("POST")
  console.log(chalk.blue('Hello world!'));
  logger.info("A new tea has been added by the POST method")
  logger.warn("A new tea has been added by the POST method")
  const {name, price} = req.body
  const newTea = {id: nextId++, name, price}
  teaData.push(newTea)
  res.status(201).send(newTea)
})

// get all tea
app.get('/teas', (req, res) => {
  res.status(200).send(teaData)
})

//get a tea with id
app.get('/teas/:id', (req, res) => {
  const tea = teaData.find(t => t.id === parseInt(req.params.id))
  if (!tea) {
    return res.status(404).send('Tea not found')
  }
  res.status(200).send(tea)
})

//update tea

app.put('/teas/:id', (req, res) => {
  const tea = teaData.find(t => t.id === parseInt(req.params.id))

  if (!tea) {
    return res.status(404).send('Tea not found')
  }
  const {name, price} = req.body
  tea.name = name
  tea.price = price
  res.send(200).send(tea)
})

//delete tea

app.delete('/teas/:id', (req, res) => {
  console.log("delete")
  console.log(req.params.id)
  const index = teaData.findIndex(t => t.id === parseInt(req.params.id))
  if (index === -1) {
    return res.status(404).send('tea not found')
  }
  teaData.splice(index, 1)
  res.status(200).send('deleted')
})


app.listen(port, () => {
  console.log(`Server is running at port: ${port}...`)
})

