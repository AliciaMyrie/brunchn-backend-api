// import { MongoClient } from "mongodb";
// import { uri } from "./credentials.js"
import functions from 'firebase-functions';
import express from 'express';
import cors from 'cors';
import { addRestaurants, getRestaurants } from "./src/restaurants.js"

// import dbconnect from './src/dbconect.js';

// const client = new MongoClient(uri)

// const collection = dbconnect()

const app = express();
app.use(cors());
app.use(express.json());

//  app.listen(4040, () => console.log("api listening on port 4040"))
//POST
// DELETE
// PUT
// app.get('/restaurants', getRestaurants);

app.get("/getrestaurants", getRestaurants);

app.post("/addrestaurants", addRestaurants);


app.get("/getall", (req, res) =>
  res.send({ success: true, message: 'API is working!' })
);


export const api = functions.https.onRequest(app);

