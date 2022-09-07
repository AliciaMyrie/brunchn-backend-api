import { MongoClient } from 'mongodb';
import { uri } from './credentials.js';
import { ObjectId } from "mongodb";

const client = new MongoClient(uri);
const database = client.db('Brunch_n');
const restaurantCollection = database.collection('Restaurants');
console.log('Mongo Connected');

export const getRestaurants = (req, res) => {
  restaurantCollection.find({}).toArray((err, restaurants) => {
    res.send(restaurants);
  });
};

export const addRestaurants = async (req, res) => {
  let newRestaurant = req.body;
  await restaurantCollection.insertOne(newRestaurant);
  res.send({ 'Restaurant was added': true });
};


export const addLike = async (req, res) => {
    const { likes } = req.body
   const result = await restaurantCollection.findOneAndUpdate(
    {_id: new ObjectId (req.params.id)},
    { $inc: { Likes: likes }})
  res.send({ result });
};


