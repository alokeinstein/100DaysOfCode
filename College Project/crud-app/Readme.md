<!-- Problem Breakdown -->
You are tasked with developing a CRUD application (Create, Read, Update, Delete) using Node.js and the Express.js framework. The application will use the FreshSales CRM(Customer Relationship Management) API to handle contact information in the CRM. Your app will have four endpoints to:

Create a new contact.
Retrieve an existing contact using its ID.
Update an existing contact's email and mobile number using its ID.
Delete an existing contact using its ID.
You also need to allow the user to specify whether to perform these actions on the CRM (using FreshSales API) or a database. For simplicity, we're skipping the database and only working with the CRM API.

Key Steps to Solve the Problem:
Set up an Express.js server to handle HTTP requests.
Use the FreshSales CRM API to perform actions on contact data (create, read, update, delete).
Use fetch (instead of axios) to make HTTP requests to the FreshSales API.
Handle data in JSON format for all API requests and responses.