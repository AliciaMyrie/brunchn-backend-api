import { Collection, MongoClient, ServerApiVersion } from "mongodb"
import { uri } from "./credentials.js";

function dbconnect() {
const client = new MongoClient(uri)
const db = client.db("Brunch_n")
const collection = db.collection ("Restaurants")
return collection
}

// export default dbconnect()