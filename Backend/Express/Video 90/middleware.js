/* 
1. What is Middleware?
-->Imagine you're at a restaurant, and you place an order (the request). The kitchen staff (the server) prepares your meal and brings it back to you (the response). But there's a special process in this restaurant:

-->Before your order reaches the kitchen, a waiter checks the details (your order form) to ensure everything is correct.
-->Then, a quality check is done to verify that certain conditions are met (like if the order is from a regular customer, they might add extra ingredients).
-->Afterward, the kitchen prepares the food.
-->Finally, another waiter ensures everything is perfect before bringing it to your table.

  Each step in this chain represents a piece of middleware. Middleware in a web application works in a similar way. It intercepts the request, does something (e.g., logs information, authenticates the user, modifies the request), and then passes the request to the next step.
*/



/* 
Syncing the Analogy: Under the Hood of Middleware:
-->In an Express application, middleware functions are like waiters in a restaurant. Here’s how they work in practice, mapped to our analogy:

-->Request: A customer (the client) makes a request (order) to the server (restaurant).

-->Middleware: Just like the waiters and kitchen checks in a restaurant, middleware functions act on the request before it reaches its final destination. Each middleware function can:

   -->Inspect: Check the request headers or body to log information or validate credentials (like the waiter checking your order form).
   -->Modify: Add or alter data in the request, such as modifying headers or adding user information (similar to adding extras for a regular customer).
   -->Perform actions: Trigger actions like writing logs or checking if the customer has special privileges (e.g., adding loyalty points or making sure the order is correct).
   -->Pass control: Once middleware completes its job, it can pass the request to the next piece of middleware or the final route handler (the "kitchen").
Middleware is "plugged in" using app.use() in Express. Each middleware is like a checkpoint that the request passes through. The final handler (route) responds to the client once everything is done. */
app.use((req, res, next) => {
    console.log('Checking request details');
    // Middleware #1 (logger, like a waiter logging the order details)
    next();  // Pass control to the next middleware or route
});

app.use((req, res, next) => {
    console.log('Adding extra ingredients for regular customers');
    req.customer = 'VIP';  // Middleware #2 (modifying the request)
    next();
});

app.get('/order', (req, res) => {
    // Final handler: The kitchen sends the response
    res.send('Order prepared for ' + req.customer);
});
/* 
In this case:

1. The first middleware logs information about the request, acting like the waiter checking the order.
2. The second middleware modifies the request by adding a new property (req.customer), acting like adding extra ingredients for VIP customers.
3. Finally, the route responds to the request, preparing the "order" and sending it back to the client.
 */


/* 
4. Under the Hood: How Middleware Works in Express
Let's break down the core components of how middleware operates internally:

-->app.use(): This method registers middleware in Express. Middleware functions are executed in the order they are registered. Think of each middleware as part of a conveyor belt that processes the request.

-->The next() function: Middleware can either terminate the request-response cycle or pass control to the next middleware in the chain using next(). If next() isn't called, the request stops there, and the client never receives a response (just like if the waiter doesn't pass your order to the kitchen).

-->Request and Response objects (req, res): These are the same for all middleware in the pipeline. Middleware can mutate these objects to pass information along. For instance, one middleware can add authentication data to req, which another middleware further down the line can use.
*/


/* 
5. Summary
Middleware functions in Express act as checkpoints in the request-response cycle, similar to various stages in a restaurant before your food (response) is served. Each middleware can:

Log or check information (like the waiter checking an order).
Modify the request (add extra data or validate the customer).
Take an action (such as logging to a file or verifying authentication).
Pass control to the next middleware, ensuring that the request continues its journey until the server sends a response back to the client.
By the time the request reaches its final destination (the route handler), all necessary checks, modifications, and logging steps have been completed, just like how food goes through several steps before it reaches your table at a restaurant.

Let me know if you want to explore a specific part further!
*/