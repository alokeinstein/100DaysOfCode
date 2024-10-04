class ApiResponse {
    constructor(statusCode, data, message='Success'){ 
        this.statusCode = statusCode
        this.message = message
        this.data = data
        this.success = statusCode < 400
    }
}
export {ApiResponse}

/* File 2: ApiResponse (Food Order Ticket)
Analogy:

When a customer orders food, they get a food order ticket when the meal is ready. The ticket says:
--->Whether the order was successful (meal is ready).
--->What they ordered (the food items).
--->Any extra messages (e.g., "Enjoy your meal!").

Actual Explanation:
--->ApiResponse is used to send a structured response back to the user (client) when everything goes right.

It tells the client:
--->statusCode: Whether the request was successful (like an HTTP status code).
--->data: The actual data the user asked for (like the users fetched from the database).
--->message: Any message you want to send (e.g., “Success” or "Data retrieved successfully").
--->success: Whether the operation was successful or not (true if success, false if failure).
*/



/* 
Purpose: This class standardizes the structure of API responses, ensuring that all responses sent from your server have a consistent format.

How it works:

1.statusCode: HTTP status code (e.g., 200 for success, 404 for not found, 500 for server error).
2.data: This holds the actual response data. For example, if you're fetching users, this will contain the list of users.
3.message: A user-friendly message, defaulting to "Success" if not provided.
4.success: A boolean flag indicating whether the request was successful. Any status code under 400 is considered successful.

Under the Hood:
---->This class is simply a way of structuring the server's response. Instead of sending raw data back to the client, it wraps the data in an object that includes:
      -->statusCode: for the client to interpret the result easily.
      -->success: a boolean derived from the statusCode (under 400 is true, above 400 is false).
---->This structure simplifies error handling on the frontend as well, since the client can always expect the same structure regardless of whether the request succeeds or fails.
*/



