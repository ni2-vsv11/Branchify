import { connectToDatabase } from "@/lib/mongodb";

export async function GET() {
  const client = await connectToDatabase();
  const db = client.db("myDatabase"); // change as needed

  const newUser = {
    name: "Nitesh Vasave",
    email: "nitesh@example.com",
    createdAt: new Date(),
  };

  const result = await db.collection("users").insertOne(newUser);

  console.log("👤 New user inserted:", result.ops || result);

  return Response.json({
    message: "User created successfully",
    user: newUser,
  });
}