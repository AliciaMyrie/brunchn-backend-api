import { MongoClient } from 'mongodb';
import { uri } from './credentials.js';
import { ObjectId } from 'mongodb';

async function connectToMongo() {
  const client = new MongoClient(uri);
  const database = client.db('Brunch_n');
  console.log('Mongo Connected');
  return database.collection('Restaurants');
}

export const getRestaurants = async (req, res) => {
  const restaurantCollection = await connectToMongo();
  restaurantCollection.find({}).toArray((err, restaurants) => {
    if (err) {
      console.log(err);
    }
    console.log(restaurants);
    res.send(restaurants);
  });
};

export const addRestaurants = async (req, res) => {
  const restaurantCollection = await connectToMongo();
  let newRestaurant = req.body;
  await restaurantCollection.insertOne(newRestaurant);
  res.send({ 'Restaurant was added': true });
};

export const addLike = async (req, res) => {
  const restaurantCollection = await connectToMongo();
  // const { likes } = req.body;
  // restaurantCollection
  //   .findOneAndUpdate(
  //     { _id: new ObjectId(req.params.id) },
  //     { $inc: { likes: likes } }
  //   ).then(async () => {
  //      const result =  await restaurantCollection.find({_id: req.params.id}).toArray()
  //      res.status(201).json(result );
  //   })

  const upddateResults = await restaurantCollection.findOneAndUpdate(
    { _id: new ObjectId(req.params.id) },
    { $inc: { likes: 1 } }
  );

  const AllRestauntsNowWithCoolLikes = await restaurantCollection
    .find({ _id: req.params.id })
    .toArray();
  res.status(201).json(AllRestauntsNowWithCoolLikes);
};
