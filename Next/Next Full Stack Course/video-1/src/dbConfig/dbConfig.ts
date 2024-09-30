import mongoose from 'mongoose'

export const connect = async () => {

    try {
        //mongoose.connect(), which takes a MongoDB URI as an argument.
        //process.env.MONGO_URI! : `!` means i am sure that MONGO_URI is not null
        mongoose.connect(process.env.MONGO_URI!)
        const connection = mongoose.connection

        //connected is the name of the event that will be emitted when the connection to the MongoDB database is established successfully 
        connection.on('connected', () => {
            console.log('MongoDB is connected successfully')
        })

        connection.on('error', (error) => {
            console.log('MongoDB connection error: ', error) 
            process.exit()  
        })     
    } catch (error) {
        console.log('Something went wrong: ', error)
    }
    await mongoose.connect('mongodb://127.0.0.1:27017/video-1')
}

/* 
Database: Contains collections.
Collection: Contains documents.
Document: Individual records within a collection.

Connection:
What it is: In the context of Mongoose and MongoDB, a connection refers to the link established between your application and the MongoDB database. This connection allows your application to perform operations like querying, inserting, updating, and deleting data in the database.

.on Property:
-->.on method is used to bind event listeners to the connection object. It listens for specific events and executes a callback function when those events occur.
-->connection.on(event, callback)
*/