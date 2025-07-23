// lib/mongodb.js
import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;

if (!uri) throw new Error("❌ MONGODB_URI not found in environment");

let client;
let cachedClient;

export async function connectToDatabase() {
  if (cachedClient) return cachedClient;

  client = new MongoClient(uri);
  await client.connect();

  console.log("✅ MongoDB connected");

  cachedClient = client;
  return client;
}
