class ApiError extends Error {
  constructor(
      statusCode,
      message= "Something went wrong",
      errors = [],
      stack = ""
  ){
      super(message)
      this.statusCode = statusCode
      this.data = null
      this.message = message
      this.success = false;
      this.errors = errors

      if (stack) {
          this.stack = stack
      } else{
          Error.captureStackTrace(this, this.constructor)
      }

  }
}

export {ApiError}

/* 
File 3: ApiError (Kitchen Manager’s Report)
Analogy:

--->When something goes wrong in the kitchen, the kitchen manager (error handler) writes a detailed report.
--->What went wrong (burnt food).
--->What the customer ordered (the original request).
--->A summary of the problem (so the customer understands).

Actual Explanation:
--->ApiError is used when things go wrong (like if the chef burns the food).

It sends a structured error response to the user, so they know:
--->statusCode: The type of error (e.g., 404 means something wasn’t found, 500 means server error).
--->message: What went wrong (e.g., “Something went wrong”).
--->errors: Extra details about the problem (e.g., validation errors or debugging info).
--->stack: The stack trace (optional, mainly used for debugging by developers).
*/


/* 
Explanation:
Purpose: This class extends the native JavaScript Error class to create a standardized error object for API errors. It makes it easy to handle and throw structured errors throughout your code.

How it works:

1.statusCode: The HTTP status code that should be returned with the error (e.g., 400 for Bad Request, 500 for Internal Server Error).
2.message: A human-readable error message. Defaults to "Something went wrong".
3.errors: This is an array where you can store detailed information about the errors (e.g., validation errors).
4.stack: Stack trace of the error. This is useful for debugging. If provided, it is used. If not, Error.captureStackTrace() generates it automatically, excluding the current constructor from the stack trace.


//Under the Hood:
--->The ApiError class inherits from the native Error class and augments it with additional properties like statusCode, errors, and success.
--->The captureStackTrace method is part of the native Error class in Node.js. It captures the current call stack and ensures that the ApiError constructor itself is not included in that trace, making the trace cleaner.
--->You can throw this custom error from anywhere in your code and pass it to next() in your Express routes to be handled by the error-handling middleware.
*/



