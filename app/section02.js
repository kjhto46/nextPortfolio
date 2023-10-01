"use client";

import Link from "next/link";
import OrignBtn from "./components/OrignBtn";
import { motion } from "framer-motion";

const boxVariants = {
  start: {
    opacity: 0,
    scale: 0.5,
  },
  end: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      duration: 0.5,
      bounce: 0.5,
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const circleVariants = {
  start: {
    opacity: 0,
    y: 20,
  },
  end: {
    opacity: 1,
    y: 0,
  },
};
export default function Section02() {
  return (
    <section className="section section02">
      <div className="inner">
        <div className="mainTit">
          <h2>
            안녕하세요. <br />
            프론트엔드에 관심이 많은 <br />
            <span>3년차 퍼블리셔 권준희입니다.</span>
          </h2>
          <Link href={"/about"} className="orignBtn orgBtn">
            <OrignBtn viewtxt="View About" />
          </Link>
        </div>
        <div className="flexDiv">
          <div className="imgArea">
            <figure></figure>
            <figure></figure>
            <figure ></figure>
          </div>
          <motion.ul  variants={boxVariants}  initial="start" whileInView="end" viewport={{ once: true, amount: 0.2 }}>
            <motion.li  variants={circleVariants}>
              저는 웹 표준성과 웹 접근성을 향상시키고 사용자의 관점에서 UI/UX를
              개선하기 위해 항상 노력하고 있습니다. 또한 새로운 기술과 지식에
              대한 관심을 가지고 지속적으로 공부하고 있습니다. 이를 통해 업무에
              적용하는 것은 물론, 작업 방식에 대한 이해도와 개발자들과의 소통
              편의성을 향상시킬 수 있었습니다.
            </motion.li>
            <motion.li  variants={circleVariants}>
              제가 소속된 에이전시에서는 2년 5개월 동안 퍼블리셔로 근무하면서 '마크업
              + CSS + JavaScript'뿐만 아니라 PHP를 이용한 'CRUD' 작업에도
              참여하였습니다. 이 과정에서 논리 연산자를 활용하고 사용자 경험에서
              발생할 수 있는 오류에 신경을 쓰며 작업하였습니다.
            </motion.li>
            <motion.li  variants={circleVariants}>
              80개 이상의 크고 작은 프로젝트와 150회 이상의 유지보수를
              수행하면서, 작업물이 개발 및 유지보수에 용이하도록 CSS,
              JavaScript, jQuery 등을 사용하였습니다. 복잡한 부분은 주석을
              남기는 습관을 갖추었으며, 제 작업물을 함께 확인한 팀원들은 쉽게
              이해할 수 있어 개발 작업 및 유지보수에 용이하다고 칭찬해
              주셨습니다. 또한 회사 내에서는 일정한 기준을 만들어 적용시키기도
              하였습니다.
            </motion.li>
            <motion.li  variants={circleVariants}>
              저는 위와 같은 경험을 통해 웹 표준성과 웹 접근성을 높이고 사용자의
              UI/UX를 개선하는 것에 대한 지속적인 고민과 노력을 기반으로 합니다.
              또한 업무 외에도 작업 방식의 이해도를 향상시키고 개발자들과의
              원활한 소통을 도모하는 것을 중요하게 여깁니다.
            </motion.li>
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
