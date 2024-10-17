/* QUESTION 1 */
/* const func1 = (a,...resizeTo,b) => {
    console.log(a,rest,c)
}
func1(1,2,3,4,5) */
//this code will throw an error because rest operator should come after the last parameter at the end.
//if const func1 =(a,b,...rest)=>{console.log(a,c,rest)} then it will work



/* --------------------------------------------------------------------------- */


/* QUESTION 2 */
// const func1 = () => {
//     console.log(x)
//     var x = 10
// }
// console.log(func1())//undefined

/* another example */
// console.log(name1)
// var name1 ='jhon'//giving me the undefined
// when a variable is defined using var keyword then it is hoisted and intialized to undefined at the top of the function scope or global scope
//so if we access the value before the declaration and assignment it will give the value to undefined and not throw an error

// const func2 = () => {
//     console.log(x)
//     const x = 10
// }
// console.log(func2())//refrence error:not defined
//if a variable is defined using const keyword then it is hoisted but not initialized
//we can only access the value once it is declared and assigned , if we try to initialize it before the declaration it will throw an refrence error:not defined
/* another example */
// console.log(name); // ReferenceError: Cannot access 'name' before initialization
// const name = 'John';


/* --------------------------------------------------------------------------- */

/* QUESTION 3 */
setTimeout(() => {
    console.log('timeout')
},0)
Promise.resolve().then(() => {
    console.log('start')
})
console.log('end')

//OUTPUT: 
//end
//start
//timeout

// Synchronous Code: The console.log('end') statement is synchronous and is executed immediately.
// Microtasks (Promises): The Promise.resolve().then(...) creates a microtask. Microtasks are executed after the current synchronous code completes but before any macrotasks (like setTimeout).
// Macrotasks (setTimeout): The setTimeout(..., 0) creates a macrotask. Macrotasks are executed after the microtasks.


// Execution Order
// Synchronous Code: console.log('end') is executed first.
// Microtasks: The promise’s .then callback (console.log('start')) is executed next.
// Macrotasks: The setTimeout callback (console.log('timeout')) is executed last.
//This behavior is due to the way the JavaScript event loop prioritizes microtasks over macrotasks.