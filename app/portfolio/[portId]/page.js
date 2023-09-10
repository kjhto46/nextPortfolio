import Footer from "@/app/common/inc/Footer";
import Header from "@/app/common/inc/Header";
import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import Link from "next/link";
import { notFound, useRouter } from "next/navigation";

export default async function PortDetail(props) {
  if(props.params.portId.toString('hex')){}
  const client = await connectDB;
  const db = client.db("portfolio");
  let portResult = await db
    .collection("portfolioDetail")
    .findOne({ _id: new ObjectId(props.params.portId) });
  console.log(portResult);

  if (portResult === null) {
    return notFound();
  } else {
    return (
      <>
      <Header />
        <title>{portResult.ptitle}</title>
        <div className="portSub">
          <article className="visual">
            <Link href={'/portfolio'}>뒤로가기</Link>
            <h2>{portResult.ptitle}</h2>
          </article>
          <article>
            <div className="inner">
              <ul>
                <li>
                  <h4>Technologies</h4>
                  <ol>
                    <li>테크 1</li>
                    <li>테크 2</li>
                  </ol>
                </li>
                <li>
                  <h4>Website URl</h4>
                  <a href="https://www.naver.com" target="_blank">
                    https://www.naver.com
                  </a>
                </li>
              </ul>
            </div>
          </article>
        </div>
        <Footer />
      </>
    );
  }
}
