import functions from "firebase-functions"
import express from "express"
import cors from "cors"
// import { getRestaurants } from "./src/restaurants.js"
// import { MongoClient } from "mongodb"

// const client = new MongoClient ()
// const database = client.db("brunch_n")
// const Restaurants = database.collection("Restaurants")
 
// client.connect()
// console.log("Mongo Connected")

const app = express()
app.use(cors())
app.use(express.json())

//  app.listen(4040, () => console.log("api listening on port 4040"))
app.get("/restaurants, getRestaurants")

 app.get('/test', (req, res) => res.send({ success: true, message: 'API is working!' }))

 //POST     
 // DELETE    
 // PUT 


 export const api = functions.https.onRequest(app)








// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
