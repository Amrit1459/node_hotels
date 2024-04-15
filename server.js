// // // console.log("server file is running smoothly");
// // // console.log("Welcome to the world of programming bro");
// // // console.log("jndsv");

// // // Tarika 1 to write the function
// // // function add(a, b) {
// // //   return a + b;
// // // }
// // // var result = add(2, 7);
// // // console.log(result);

// // // Tarika 2 to write the function
// // // var add=function(a,b){
// // //   return(
// // //     a+b
// // //   )
// // // }
// // // var answer=add(2,5)
// // // console.log(answer);

// // // Tarika 3 to write the function
// // // Iswalwe ko bolte hai fat arrow function
// // // var add=(a,b)=>{
// // //   return(
// // // a+b
// // //   )
// // // }
// // // var answer=add(2,9)
// // // console.log(answer);

// // var add = function (a, b,xx) {
// //   var answer=a+b
// //   console.log(answer)
// //   xx()
// // };

// // add(1,2,()=>{
// // console.log("yes I have did it")
// // }
// // )

// // fs =require("fs");
// // os= require("os");
// note = require("./note.js");
// // var user=os.userInfo();
// // console.log(user)
// // console.log(os);
// // fs.appendFile("read.txt","Please like and subscribe",()=>{
// //   console.log("Yaa we are good to go");
// // })

// // console.log(fs);
// // console.log("iscq")
// console.log("Server is running");
// // console.log(age);
// // a=addnumber(2, 3);
// // console.log(a)
// var result = note.addNumber(3,4);
// console.log(result);

// Get method to get the person yaani ki is baar hame data chahiye ok is baar aapko data bhejna nhi hai ok

// app.get("/kheer", (req, res) => {
//   res.send("Yaa your kheer is ready to serve");
// });
// app.get("/idli", (req, res) => {
//   var customized_idli = {
//     name: "rava idli",
//     size: "10cm",
//     is_sambhar: "true",
//     is_chutney: false,
//   };
//   res.send(customized_idli);
//   res.send("Welcometo the south indian style of eating food");
// });
// app.get("/daal", (req, res) => {
//   res.send("We are here to eat the north indian food ");
// });
// app.post("/items", (req, res) => {
//   res.send("data is saved");
// });

const express = require("express");
const app = express();
const db = require("./db");
const bodyParser = require("body-parser");
app.use(bodyParser.json());

const menuItem = require("./models/menuItem");
const person = require("./models/Person");

app.get("/", (req, res) => {
  res.send("Welcome to my hotels bro");
});

// Post route to add a person

const personRoutes = require("./routes/menuItemRoutes");
const menuItemRoutes = require("./routes/menuItemRoutes");
app.use("/menu", menuItemRoutes);
app.use("/person", personRoutes);

// app.post("/person", async (req, res) => {
//   try {
//     const data = req.body; //assuming the request body contauins the person data
//     // Create a new Person document document using the mongoose model
//     const newPerson = new Person(data);
//     // Save the person to the database
//     const response = await newPerson;
//     response.save();
//     console.log("data saved");
//     res.status(200).json(response);
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ error: "Internal server error" });
//   }
// });
app.listen(4000, () => {
  console.log("Server is smoothly running on the port number 4000 smoothly");
});

// /*const data = req.body; //assuming the request body contauins the person data
//   // Create a nea Person document document using the mongoose model
//   const newPerson = newPerson(data);
//   // Save the person to the database
//   newPerson.save((error, savedPerson) => {
//     if (error) {
//       console.log("Error in saving Person", error);
//       res.send.status(500).json({ error: "internal server error" });
//     } else {
//       console.log("data saved successfully");
//       res.status(200).json(savedPerson);
//     }
//   });*/
