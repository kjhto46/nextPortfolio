import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { _id, password } = req.body;

    const client = await connectDB;
    const db = client.db("portfolio");

    // 게시글 조회
    const comment = await db
      .collection("comment")
      .findOne({ _id: new ObjectId(_id) });

    if (!comment) {
      return res.status(404).json({ message: "게시글을 찾을 수 없습니다." });
    }

    if (comment.password !== password) {
      return res.status(401).json({ message: "비밀번호가 일치하지 않습니다." });
    }

    // 게시글 삭제
    await db.collection("comment").deleteOne({ _id: new ObjectId(_id) });

    res.status(200).json({ message: "게시글이 성공적으로 삭제되었습니다." });
  }
}
