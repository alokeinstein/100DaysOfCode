const asyncHandler =(requestHandler)=>{
    return (req,res,next)=>{
        Promise.resolve(requestHandler(req,res,next)).catch((err)=>next(err))
    }
}
export {asyncHandler}



/* 
File 1: asyncHandler (Chef’s Assistant)
Analogy:

-->Imagine the chef (you) is preparing a complicated meal. Sometimes things go wrong—maybe you forget to add salt, or the stove breaks.
-->The chef’s assistant (your error-handling system) is always watching. If the chef messes up or if something unexpected happens (like the stove breaks), the assistant catches the problem and immediately tells the kitchen manager (error-handler).


Actual Explanation:

-->asyncHandler helps you catch errors that happen while you’re running your code (like fetching data or processing something).
-->If an error occurs, the assistant (asyncHandler) catches the error and sends it to the next step (next(err)) where a dedicated error-handling middleware will take care of it.
*/



/* 
EXPLANATION:

Purpose: This is a middleware wrapper function for handling asynchronous routes in Express.js. The goal is to simplify error handling in asynchronous route handlers, ensuring that errors are properly caught and forwarded to the next middleware (such as an error-handling middleware).

How it works:

--->asyncHandler accepts a requestHandler function, which is the actual route handler that contains your business logic.
--->The returned function is a middleware that takes the standard Express req, res, and next parameters.
--->Inside the middleware, Promise.resolve() is used to ensure the requestHandler is executed within a Promise context. Even if the requestHandler is an async function or a function returning a Promise, it is wrapped to handle potential rejections.
--->If the requestHandler encounters an error (either by throwing an exception or returning a rejected Promise), the .catch() block catches the error and passes it to next(err). The next() function is used in Express to forward errors to the error-handling middleware.


Under the Hood:

-->Express relies on the middleware stack to handle requests. If an error occurs in a route handler, it's common to forget adding try/catch blocks. This utility abstracts that boilerplate.
-->By catching any errors in asynchronous functions and passing them to next(), it allows Express to forward the error to any global error-handling middleware (e.g., app.use((err, req, res, next) => {...})).


*/



