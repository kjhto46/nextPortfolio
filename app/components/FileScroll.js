"use client";
import Link from "next/link";
import { useRef } from "react";
import { motion, useScroll } from "framer-motion";

const fileVariants = {
  start: {},
  end: {
    transition: {
      type: "linear",
      duration: 0.5,
    },
  },
};

const circleVariants = [
  {
    start: {
      rotate: 0,
    },
    center: {
      rotate: 0,
    },
    end: {
      x: 10,
      y: 50,
      rotate: -4,
    },
  },
  {
    start: {
      rotate: 0,
    },
    center: {
      rotate: 0,
    },
    end: {
      x: -10,
      y: 50,
      rotate: 4,
    },
  },
  {
    start: {
      y: 60,
      rotate: 0,
    },
    center: {
      y: 60,
      rotate: 0,
    },
    end: {
      y: 60,
      rotate: 0,
    },
  },
];

const FileScroll = () => {
  const items = [
    ["크레이티브그룹 아더", "반응형 페이지", "2023.01", "http://arthur.co.kr/", ""],
    ["AMPK", "반응형 페이지", "2022.09", "http://ampk.1004home.kr/", ""],
    ["동수원병원", "반응형 페이지", "2023.01", "https://www.dswhosp.co.kr/", ""]
  ];

  return (
    <div className="mainProScroll">
      <div className="sticky">
        {items.map(([contTit, contxt1, contxt2, contxt3, contImg], i) => (
          <motion.div
            variants={fileVariants}
            initial="start"
            whileInView="end"
            viewport={{ once: false, amount: 0.95 }}
            className={`file file${i}`}
            key={i}
          >
            <motion.div variants={circleVariants[i]} className="fileCon">
              <div className="fileHead"></div>
              <div className="flexAreabg"></div>
              <div className="flexArea">
                <figure>
                  <img src={contImg} alt={contTit} />
                </figure>
                <div className="txtArea">
                  <h2>{contTit}</h2>
                  <ul>
                    <li>{contxt1}</li>
                    <li>{contxt2}</li>
                    <li><a href={contxt3} target="_blank">페이지 이동</a></li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FileScroll;
