let c = console.log

// const name = {
//     firstName: "Alok",
//     lastName: "Tiwari",
//     fullName: function() {
//         return this.firstName + " " + this.lastName;
//     }
//  }

//  c(name.fullName())//Alok Tiwari

//  const name2={
//     firstName :"Rohit",
//     lastName: "Sharma",
//  }
//  c(name.fullName.call(name2))//Rohit Sharma




/* ANOTHER WAY OF DOING THIS */

const name = {
    firstName: "Alok",
    lastName: "Tiwari",
 }
 const name2={
        firstName :"Rohit",
        lastName: "Sharma",
     }

 //we generally keep the function outside the object which we use to call so that we dont have to call the object and then the function inside the object 
 const fullName = function(city , state) {
   c(`${this.firstName} ${this.lastName} from ${city} , ${state}`)
}

//function borrowing
//call method: we can pass the arguments in the call method individually
fullName.call(name, "Buxar", "Bihar")

//Apply method: we can pass the arguements in the apply method as an array
fullName.apply(name2, ["Mumbai", "Maharashtra"])

/*  */