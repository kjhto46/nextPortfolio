import { connectDB } from "@/util/database";
import classes from "./page.module.scss";

export default async function Home() {
  const client = await connectDB;
  const db = client.db("portfolio");
  let result = await db.collection("post").find().toArray();
  return (
    <main className={`${classes.title} main`}>
      <article className={`${classes.article01}`}>
        <h2>KWON JUN HEE, PORTFOLIO</h2>
        <h2>Publisher & FrontEnd</h2>
      </article>
      <article className={`${classes.article02}`}></article>
    </main>
  );
}
