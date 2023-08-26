"use client";

import Link from "next/link";
import OrignBtn from "./components/OrignBtn";

export default function Section03() {
   return(
      
    <section id="section03" className="section section03">
      <div className="inner">
        <div className="mainTit">
        <h2 className="poppins">Technology Use</h2>
        </div>
          <Link href={"/about"} className="orignBtn skyblue">
            <OrignBtn viewtxt="View About" />
          </Link>
      </div>
    </section>
      )
}