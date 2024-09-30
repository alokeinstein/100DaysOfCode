npm i axios bcryptjs jsonwebtoken nodemailer react-hot-toast mongoose

//we have to make a different folder and inside the folder there will be a file named `page`  for every route inside the `App`.The folder which we will make inside the App , the folder name will be used for routing not the filename inside the folder, filename will be constant which is `page`

//in the App folder there will be the frontend and the backend in the comment above this one i have talked about how i can builde the fronted and name it, but what about the backend part of the code , for the backend you have to make a folder inside the App which will be named specifically `api` you cant anything else for the backend folder.

//nextjs is an edge run framework so there's always Edge run time so it doesn't stay connected with your database, every single time there is a database call you have to actually call your database make a connection with it and then you talk to a database send some file receive some file, all these things actually go ahead and work 


<!-- *************************************************************************************************** -->
//Next.js Server Components: In the recent version of Next.js, everything is a server component by default, which doesn’t have access to front-end specific features like useState, useEffect, or the window object.

//Client vs. Server Components:
Server Components: Can access server-side resources like the file system.
Client Components: Need to explicitly be marked to use front-end features.

//Converting to Client Component: To make a component a client component, add use client at the top of the file. This allows the use of front-end features.

<!-- *************************************************************************************************** -->

//usePathname to get the current url and  useSearchParams to get the current search params from the url from the client side, at server side to get the dyanamic values from the dyanamic routes you will use the params and also searchParams will give you the search params from the dyanamic page