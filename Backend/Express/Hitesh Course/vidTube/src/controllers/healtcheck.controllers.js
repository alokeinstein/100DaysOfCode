import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";


const healthcheck = asyncHandler(async(req,res)=>{
    return res
    .status(200)
    .json(new ApiResponse(200, 'OK', 'Health check passed'))
})

export {healthcheck}


/* 
Code Flow (What Happens When a Request is Made):
1.Customer Request:
-->A customer (client) makes a request to check the restaurant’s health at /api/v1/healthcheck.

2.Router (Front Desk):
-->The router in healthcheck.routes.js receives the request.
-->The front desk staff looks at the request path and determines that this should go to the healthcheck controller (chef).

3.Controller (Chef):
-->The healthcheck function from healthcheck.controllers.js gets called.
-->The chef (controller) processes the request and sends back a response (ApiResponse), which says “Health check passed” along with a 200 status code (meaning everything is fine).

4.Error Handling:
-->The asyncHandler ensures that if something goes wrong during the process (e.g., the chef forgets to respond), the error is caught and sent to the error handler.

*/