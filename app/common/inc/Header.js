"use client";
import Link from "next/link";

import { useDarkMode } from "@/app/useDarkMode";
import { useEffect, useState } from "react";
import { usePathname } from 'next/navigation';

export default function Header() {
  const [mode, toggleTheme] = useDarkMode();
  const pathname = usePathname();


  const [toggleTg, setToggleTg] = useState(false);

  const handleToggleTg = () => {
    setToggleTg(!toggleTg);
  };

  useEffect(() => {
    setToggleTg(false); // 페이지 이동 또는 컴포넌트 마운트 시 toggleTg 값을 false로 변경
  }, [pathname]);

  useEffect(() => {
    const handleScroll = (event) => {
      if (toggleTg) {
        event.preventDefault();
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = ""; // 원래 상태로 복원
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.style.overflow = ""; // 컴포넌트 언마운트 시 원래 상태로 복원
    };
  }, [toggleTg]);

  return (
    <header className={`header ${toggleTg ? "toggle" : ""}`}>
      <div className="inner">
        <h1>
          <Link href={"/"}>Kjhto46</Link>
        </h1>
        <nav>
          <ul className="gnb">
            <li>
              <Link href={"/about"}>About</Link>
            </li>
            <li>
              <Link href={"/skill"}>Skill</Link>
            </li>
            <li>
              <Link href={"/portfolio"}>Portfolio</Link>
            </li>
            <li>
              <Link href={"/contact"}>Contact</Link>
            </li>
          </ul>

          <div onClick={toggleTheme} className={`colorModeBtn ${mode}`}>
            <span></span>
            <svg
              className="darkSvg"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <g clipPath="url(#clip0_727_435)">
                <path
                  d="M13.3332 13.3338C9.64984 13.3338 6.6665 10.3505 6.6665 6.66712C6.6665 4.72546 7.50817 2.97546 8.83317 1.75879C4.78317 2.32546 1.6665 5.79212 1.6665 10.0005C1.6665 14.6005 5.39984 18.3338 9.99984 18.3338C14.2082 18.3338 17.6748 15.2171 18.2415 11.1671C17.0248 12.4921 15.2748 13.3338 13.3332 13.3338Z"
                  fill="#1E1E1E"
                />
              </g>
            </svg>
            <svg
              className="lightSvg"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <g clipPath="url(#clip0_740_656)">
                <path
                  d="M9.99984 13.3337C11.8408 13.3337 13.3332 11.8413 13.3332 10.0003C13.3332 8.15938 11.8408 6.66699 9.99984 6.66699C8.15889 6.66699 6.6665 8.15938 6.6665 10.0003C6.6665 11.8413 8.15889 13.3337 9.99984 13.3337Z"
                  fill="#1E1E1E"
                />
                <path
                  d="M13.0085 2.5L12.3418 4.16667"
                  stroke="#1E1E1E"
                  strokeWidth="2"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                />
                <path
                  d="M6.8252 2.56641L7.5252 4.22474"
                  stroke="#1E1E1E"
                  strokeWidth="2"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                />
                <path
                  d="M2.5 6.99121L4.16667 7.65788"
                  stroke="#1E1E1E"
                  strokeWidth="2"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                />
                <path
                  d="M2.56689 13.1746L4.22523 12.4746"
                  stroke="#1E1E1E"
                  strokeWidth="2"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                />
                <path
                  d="M6.9917 17.4997L7.65837 15.833"
                  stroke="#1E1E1E"
                  strokeWidth="2"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                />
                <path
                  d="M13.1751 17.4337L12.4751 15.7754"
                  stroke="#1E1E1E"
                  strokeWidth="2"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                />
                <path
                  d="M17.5002 13.0085L15.8335 12.3418"
                  stroke="#1E1E1E"
                  strokeWidth="2"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                />
                <path
                  d="M17.4332 6.8252L15.7749 7.5252"
                  stroke="#1E1E1E"
                  strokeWidth="2"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                />
              </g>
            </svg>
          </div>

          <div
            onClick={handleToggleTg}
            className={`toggle ${toggleTg ? "active" : ""}`}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>
      </div>
      <div className={`tgbox ${toggleTg ? "active" : ""}`}>
        <div onClick={handleToggleTg} className="closeToggle">
          <span></span>
          <span></span>
        </div>
        <ul>
          <li>
            <Link href={"/about"}>About</Link>
          </li>
          <li>
            <Link href={"/skill"}>Skill</Link>
          </li>
          <li>
            <Link href={"/portfolio"}>Portfolio</Link>
          </li>
          <li>
            <Link href={"/contact"}>Contact</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
