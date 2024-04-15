const mongoose = require("mongoose");
const mongoURL = "mongodb://localhost:27017/hotels";
/*yaha par mydatabase ki jagah aap apna jo database ka name hai aap usko dena */

//So lets do mongoDB connection
// mongoose.connect(mongoURL, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });
mongoose.connect(mongoURL);
// Get the default connection
// Mongoose maintain a default connection object representing the mongodb connection
const db = mongoose.connection;

// Define event listener for the database connection
db.on("connected", () => {
  console.log("connected to Mongodb server");
});

db.on("error", (err) => {
  console.log("MongoDb connection error");
});

db.on("disconnected", () => {
  console.log("MongoDB disconnected");
});

// Aapko db ko export bhi karna hoga manyawar
module.exports = db;
