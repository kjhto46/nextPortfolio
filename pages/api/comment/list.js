import { connectDB } from "@/util/database";

export default async function handler(req, res) {
  const db = (await connectDB).db("portfolio");
  let result = await db.collection("comment").find().sort({ _id: -1 }).toArray();
  res.status(200).json(result);
}
