// import { MongoClient } from "mongodb";
// import { uri } from "./credentials.js"
import functions from 'firebase-functions';
import express from 'express';
import cors from 'cors';
import { addRestaurants, getRestaurants, addLike  } from "./src/restaurants.js"



const app = express();
app.use(cors());
app.use(express.json());


app.get("/getrestaurants", getRestaurants);

app.post("/addrestaurants", addRestaurants);

app.patch("/addlike/:id", addLike)



app.get("/getall", (req, res) =>
  res.send({ success: true, message: 'API is working!' })
);


export const api = functions.https.onRequest(app);

