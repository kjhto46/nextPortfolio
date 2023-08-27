"use client";
import Link from "next/link";
import OrignBtn from "./components/OrignBtn";
import React, { useEffect, useState } from "react";

export default function Section04() {
  return (
    <section id="section04" className="section section04">
      <div className="inner">
        <div className="mainTit">
          <h2 className="poppins">Project</h2>
          <Link href={"/portfolio"} className="orignBtn orgBtn">
            <OrignBtn viewtxt="View Project" />
          </Link>
        </div>
        <div className="mainProScroll">
          <div className="sticky">
            <div className="file file1">
              <div>1</div>
            </div>
            <div className="file file2">
              <div>2</div>
            </div>
            <div className="file file3">
              <div>3</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
