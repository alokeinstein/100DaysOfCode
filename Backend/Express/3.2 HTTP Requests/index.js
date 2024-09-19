import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Hello</h1>");
});

app.get("/about", (req, res) => {
  res.send("<h1>About Me</h1><p>My name is Angela</p>");
});

app.get("/contact", (req, res) => {
  res.send("<h1>Contact Me</h1><p>Phone: +44123456789</p>");
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});


//HTTP: Hyper Text Transfer Protocol : computer talk using this transfer protocol
/* 
//REQUEST VOCAB
//GET:  request resource 
//POST: sending the resource to the server , for example if we want submit a form which we filled ,on the server then we need to use the POST method
//PUT: replace resource, PUT and PATCH are used for the same thing which is update but acts a little differently

--->Analogy : if we ordered a bike from the amazone and the bike is not in good conditon then we have two option one is two replace the bike (PUT METHOD) and the other method is to (PATCH METHOD) where i will get the resouces to patch/fix the bike

//PATCH: patch up a resource
//DELETE: delete the resource
*/

//Cannot GET means , when we try to get a resource which is not avalibale and we cant get