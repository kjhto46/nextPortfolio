"use client";

import Link from "next/link";
import OrgBtn from "./components/orgBtn";

export default function Section02() {
  return (
    <section className="section section02">
      <div className="inner">
        <div className="mainTit">
          <h2>
            안녕하세요. <br />
            프론트엔드에 관심이 많은 <br />
            <span>2년차 퍼블리셔 권준희입니다.</span>
          </h2>
          <Link href={"/about"} className="orgBtn">
            <OrgBtn viewtxt="View About" />
          </Link>
        </div>
        <div className="flexDiv"></div>
      </div>
    </section>
  );
}
