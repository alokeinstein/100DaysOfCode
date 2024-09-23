/* HOW TO CONNECT TO DATABASE IN NEXTJS */

//when we get the connection from the database then we would want to inject some typescript because i want to know that after the connection , the object which will come , i want to know what value i want of what data type from that object
import mongoose from 'mongoose';

//isConnected? means this value is optinal and if it will return , it will come in the number format
//ConnectionObject is a type alias for an object that may have an optional property isConnected of type number.
type ConnectionObject = {
    isConnected?: number;
};

//empty connection object is not throwing any error because i data type of `isConnected` is optional
const connection: ConnectionObject = {};

//database connection is in the different continents so it takes time so we use async and await
//The function `dbConnect` is asynchronous and returns a Promise that resolves to void, meaning it doesn't return any meaningful value upon completion.
const dbConnect = async (): Promise<void> => {

    // Check if we have a connection to the data base or if it's currently connecting
    //Connection Check: Before attempting to connect, the function checks if connection.isConnected is truthy (i.e., the database is already connected). If so, it logs a message and exits early to avoid redundant connections.
    if (connection.isConnected) {
        console.log('Already connected to the database');
        return;
    }

    try {
        // Attempt to connect to the database
        const db = await mongoose.connect(process.env.MONGODB_URI || '', {});

        //This line assigns the readyState of the first connection to connection.isConnected, allowing you to check the connection status in subsequent function calls.
        connection.isConnected = db.connections[0].readyState;

        console.log('Database connected successfully');
    } catch (error) {
        console.error('Database connection failed:', error);

        // Graceful exit in case of a connection error
        process.exit(1);
    }
}

export default dbConnect;



/* 
TYPESCRIPT: 

1.Type Aliases
2.Optional Properties
3.Asynchronous Functions with Type Annotations
4.Type Assertions


1.Type Aliases: A type alias allows you to create a new name for a type. This can make complex types easier to work with and improve code readability.

type UserID = string;
const userId: UserID = "abc123"; // Valid
const anotherUserId: UserID = 456; // Error: Type 'number' is not assignable to type 'string'



2. Optional Properties
In TypeScript, adding a ? after a property name makes it optional, meaning the property may or may not be present on the object.

type Person = {
  name: string;
  age?: number;
};

const person1: Person = { name: "Alice" }; // Valid
const person2: Person = { name: "Bob", age: 30 }; // Valid
const person3: Person = { age: 25 }; // Error: Property 'name' is missing

3. Asynchronous Functions with Type Annotations
-->An asynchronous function is defined using the async keyword. It always returns a Promise, even if you don’t explicitly return one. You can use the await keyword inside an async function to pause execution until a Promise is resolved.
-->To type an asynchronous function, you specify the return type as Promise<T>, where T is the type of the value that the Promise resolves to

4. Type Assertions
 In Tyepscript, type assertions allow you to tell the compiler to treat a value as a specific type. This is useful when you, as the developer, have more information about the type of a value than TypeScript can infer. Type assertions do not perform any runtime checks or conversions; they simply instruct the compiler to trust you about the type of a value.

 -->There are two ways to perform type assertions in TypeScript:

    ->Using the as keyword 
    let someValue: any = "this is a string";
    let strLength: number = (someValue as string).length;

    ->Using the angle-bracket syntax
    let someValue: any = "this is a string";
    let strLength: number = (<string>someValue).length;
*/



/*
DEEPER CONCEPTS EXPLORED :process, connections[], readyState, and process.exit()

1. process :
Definition: In Node.js, process is a global object that provides information and control over the current Node.js process. It allows you to interact with the environment in which your Node.js application is running.
   -->Environment Variables: process.env.MONGODB_URI accesses the MONGODB_URI environment variable.
   -->Exiting the Process: process.exit(1) terminates the Node.js process with an exit code of 1, indicating an error.
   -->Exit Codes:
       0: Success.
       1 and above: Different error states.

2. connections[]: Mongoose maintains an array of active connections. Each connection in the array represents a connection to a MongoDB database.
-->Usage: db.connections accesses the array of connections.


3. readyState: Definition: A property that indicates the current state of the connection.
Possible Values: 0: Disconnected.
                 1: Connected.
                 2: Connecting.
                 3: Disconnecting.



4. process.exit(): Definition: A method that instructs Node.js to terminate the process.
*/