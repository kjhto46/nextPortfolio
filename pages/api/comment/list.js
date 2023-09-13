import { connectDB } from "@/util/database";

export default async function handler(req, res) {
  const db = (await connectDB).db("portfolio");
  let result = await db.collection("comment").find().toArray();
  res.status(200).json(result);
}
