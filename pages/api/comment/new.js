import { connectDB } from "@/util/database";

export default async function handler(req, res) {

  req.body = JSON.parse(req.body);
  console.log(req.body)

  if (req.method == "POST") {
    // 저장할 object자료를 작성해보자
    console.log(req.body.author);
    let dataToSave = {
      author: req.body.author,
      content: req.body.comment,
      date: req.body.date,
    };

    const client = await connectDB;
    const db = client.db("portfolio");
    let result = await db.collection("comment").insertOne(dataToSave);
    res.status(200).json(result);
  }
}
