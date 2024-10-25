import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isAuthenticated: false,
  isLoading: true,
  user: null,
};

/* Register User */
export const registerUser = createAsyncThunk(
  "auth/registerUser", // Action type (prefix)
  async (formData) => { // Async function that performs the API call
    const response = await axios.post(
      "http://localhost:5000/api/auth/register", // API endpoint
      formData, // Data to send to the API
      {
        withCredentials: true, // Allows sending cookies with the request
      }
    );
    return response.data; // The result of the API call
  }
);

/* Login User */
export const loginUser = createAsyncThunk(
  "auth/login", 
  async (formData) => {
    const response = await axios.post(
      "http://localhost:5000/api/auth/login", 
      formData, 
      {
        withCredentials: true, 
      }
    );
    return response.data; 
  }
);

const authSlice = createSlice({
  name: "auth",// Name of the slice
  initialState,// Initial state (defined earlier)
  reducers: {
    setUser: (state, action) => {
      // You can define any reducer logic here for synchronous actions
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true; // Set the loading state when the request starts
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false; // Stop the loading state when the request succeeds
        state.user =null;
        state.isAuthenticated = false; 
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false; // Stop the loading state when the request fails
        state.user = null; // Clear the user data in case of failure
        state.isAuthenticated = false; // Set authentication to false if the request fails
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true; 
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;  
        console.log(action);
        state.user = action.payload.success ? action.payload.user: null;
        state.isAuthenticated = action.payload.success 
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false; 
        state.user = null; 
        state.isAuthenticated = false;
      })
  },  
});


export const { setUser } = authSlice.actions;
export default authSlice.reducer;



/* 
1. createAsyncThunk
Purpose: createAsyncThunk is a utility provided by Redux Toolkit to handle asynchronous actions (like API calls) in Redux. It helps streamline handling async logic (such as calling a backend service) and automatically manages the lifecycle of the async operation (like pending, fulfilled, or rejected states).

-->First Argument: "auth/registerUser" is the action type. Redux uses this type to identify which action is being dispatched.

-->Second Argument: An asynchronous function that performs the action. In this case, it’s an axios.post request to register a user by sending formData to the backend API. The returned value from this function (response.data) is the data that will be passed to your Redux state after the action completes successfully.

*********************************************************************************************


When you dispatch registerUser, it goes through three stages:
--->pending: When the async call starts.
--->fulfilled: When the async call succeeds.
--->rejected: When the async call fails.


2. createSlice
createSlice is a function in Redux Toolkit that simplifies creating slices of the Redux state along with the actions and reducers to handle that slice. It combines reducers, actions, and initial state into a single object.

-->reducers: Synchronous actions that modify the state (e.g., setUser is defined here, although it's empty in this case). You can define synchronous logic in this block.

*********************************************************************************************

3. extraReducers and builder.addCase
extraReducers is used to handle actions that are not defined inside the slice itself (for example, async actions created by createAsyncThunk). This is where you handle the different states of an asynchronous request (like pending, fulfilled, and rejected).

builder: An object provided by Redux Toolkit that lets you chain multiple addCase calls to handle each state of the createAsyncThunk.

builder.addCase: Each addCase represents a state of the async thunk (like pending, fulfilled, or rejected). It allows you to write different state logic based on the result of the asynchronous request.


*********************************************************************************************
4. axios
Axios is a promise-based HTTP client that simplifies making requests to an API (like sending GET, POST, PUT, DELETE requests). It’s an alternative to the native fetch API in JavaScript but provides more features and ease of use.

--->axios.post: This is a POST request made using Axios. It’s sending formData (user registration data) to the backend server (http://localhost:5000/api/auth/register).
--->withCredentials: true: This is a key Axios feature. It tells the browser to include cookies (such as session tokens) when making the request. This is useful for authentication, especially when using secure sessions.


**********************************************************************************************
5. Key Differences Between axios and fetch
Although you’ve used fetch before, axios provides additional features that make it easier to work with in some cases:

--->axios automatically parses JSON responses, whereas with fetch, you need to manually call .json() on the response.
--->axios can send cookies (or authentication tokens) easily with the withCredentials option, which is a bit more complex with fetch.
--->axios handles errors more easily. If a request fails, it throws an error automatically, which you can catch using try-catch. With fetch, you need to manually check for errors.
--->Simpler syntax for certain operations: For example, axios.post(url, data) vs. fetch(url, { method: 'POST', body: JSON.stringify(data), headers: { 'Content-Type': 'application/json' } }).
*/