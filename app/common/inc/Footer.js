"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";

import Link from "next/link";
import OrignBtn from "@/app/components/OrignBtn";

function Parallaxcloud({ children, baseVelocity = 100 }) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const wrap = (min, max, v) => {
    if (v < min) {
      return max - ((min - v) % (max - min));
    }
    return min + ((v - min) % (max - min));
  };

  const x = useTransform(baseX, (v) => `${wrap(-66.66, -33.33, v)}%`);

  const directionFactor = useRef(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    /**
     * This is what changes the direction of the scroll once we
     * switch scrolling directions.
     */
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  /**
   * The number of times to repeat the child text should be dynamically calculated
   * based on the size of the text and viewport. Likewise, the x motion value is
   * currently wrapped between -20 and -45% - this 25% is derived from the fact
   * we have four children (100% / 4). This would also want deriving from the
   * dynamically generated number of children.
   */
  return (
    <motion.div className="cloudScroll" style={{ x }}>
      {children}
      {children}
      {children}
    </motion.div>
  );
}

export default function Footer() {
  const scrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <footer className={`poppins footer`}>
      <Parallaxcloud baseVelocity={0.5}>
        <div>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </Parallaxcloud>
      <div>
        <div className="inner">
          <div className="footerLink">
            <div className="leftArea">
              <h2>Contact Me</h2>
              <Link href={"/contact"} className="orignBtn orgWBtn">
              <OrignBtn viewtxt="Contact" />
              </Link>
            </div>
            <div className="rightArea">
              <ul>
                <li>
                  <a href="https://github.com/kjhto46" target="_blank"><span><img src="/layout/footer_icon01.png" /></span><p>https://github.com/kjhto46</p></a>
                </li>
                <li>
                  <a href="mailto:tony1996kjh@naver.com"><span><img src="/layout/footer_icon02.png" /></span><p>tony1996kjh@naver.com</p></a>
                </li>
              </ul>
            </div>
          </div>
          <div className="copyright">
            <p>Copyright 2023 kwonjunhee All Right Reserved</p>
            <div onClick={scrollToTop}>
              <p>Go To Top</p>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="12"
                  viewBox="0 0 10 12"
                  fill="none"
                >
                  <g clipPath="url(#clip0_1023_2953)">
                    <path
                      d="M10 4.76L6.31 1.24L5 0L3.69 1.24L0 4.76L1.31 6L4 3.44V12H6V3.44L8.69 6L10 4.76Z"
                      className="fillColor"
                    />
                  </g>
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
