import { connectDB } from "@/util/database"
import variables from './page.module.scss';

export default async function Home() {
  const client = await connectDB;
  const db = client.db("portfolio")
  let result = await db.collection('post').find().toArray()
  console.log(result)
  return(
    <main className={`${variables.title} main`}>
      <article className={`${variables.article} article01`}>
        123
      </article>
    </main>
    )
}
