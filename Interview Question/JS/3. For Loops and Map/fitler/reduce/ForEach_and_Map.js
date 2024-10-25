/*
// forEach
Purpose: Executes a provided function once for each array element.
Return Value: undefined.
Usage: Used when you want to execute a function for its side effects, without needing a new array. */

// Example: 1 
let arr = [1, 2, 3, 4];
arr.forEach((num, index) => {
  arr[index] = num * 2;
});
console.log(arr); // Output: [2, 4, 6, 8]



/* 
map:-->
Purpose: Creates a new array populated with the results of calling a provided function on every element in the calling array.
Return Value: A new array with transformed elements.
Usage: Used when you need to transform elements and want a new array as the result.
*/
// Example: 2
// let arr = [1, 2, 3, 4];
// let doubled = arr.map(num => num * 2);
// console.log(doubled); // Output: [2, 4, 6, 8]
// console.log(arr); // Output: [1, 2, 3, 4] (original array remains unchanged)


/* 
Key Differences:
Side Effects: forEach is for side effects; map is for creating a new array.
Immutability: map returns a new array, while forEach doesn’t change the original array unless explicitly modified.
Use Case: Use forEach for operations that don't need a new array; use map for transforming and returning a new array.
*/


/* ANOTHER EXAMPLE */
const users = [
    { id: 1, name: 'Alice', age: 25 },
    { id: 2, name: 'Bob', age: 30 },
    { id: 3, name: 'Charlie', age: 35 },
    { id: 4, name: 'Dana', age: 40 }
  ];
  

  //FOR EACH
  const usernames = [];
users.forEach(user => {
  console.log(`User ID: ${user.id}, Name: ${user.name}, Age: ${user.age}`);
  usernames.push(user.name);//doesn't return anything from the for each loop , pushing the usenames to an array
});

console.log('Usernames:', usernames);

//MAP
const userProfiles = users.map(user => {
    return {
      userId: user.id,
      userName: user.name,
      userAge: user.age,
      greeting: `Hello, ${user.name}!`
    };
  });
  
  console.log('User Profiles:', userProfiles);//a new array userProfiles is created is returned with the transformed user objects
  


  /* 
  forEach and map both iterate over array elements, but they serve different purposes and have distinct behaviors:

forEach: Executes a function for each array element. It’s typically used for side effects, like logging or modifying external variables. However, it doesn't return a new array. Example: If you want to log each element of an array, you’d use forEach.

map: Transforms each element in an array and returns a new array with the transformed elements. It’s immutable, meaning the original array remains unchanged. Example: If you need to double each element in an array, you’d use map to create a new array with the doubled values.
  
  */