"use client";

import { useEffect, useState } from "react";

import Link from "next/link";

export default function Header() {
  const [darkTheme, setDarkTheme] = useState(undefined);

  const handleToggle = () => {
    setDarkTheme(!darkTheme);
  };

  useEffect(() => {
    if (darkTheme !== undefined) {
      if (darkTheme) {
        document.body.setAttribute("data-theme", "dark");
        window.localStorage.setItem("theme", "dark");
      } else {
        document.body.removeAttribute("data-theme");
        window.localStorage.setItem("theme", "light");
      }
    }
  }, [darkTheme]);

  useEffect(() => {
    const root = window.document.body;
    const initialColorValue = root.style.getPropertyValue(
      "--initial-color-mode"
    );

    setDarkTheme(initialColorValue === "dark");
  }, []);

  return (
    <header className="header">
      <div className="inner">
        <h1>
          <Link href={"/"}>Kwonjunhee</Link>
        </h1>
        <nav>
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

          <div
            onClick={handleToggle}
            className={`colorModeBtn ${darkTheme ? "darkmode" : "lightmode"}`}
          >
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
                    fill="#ED7B34"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_727_435">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
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
                    fill="#192227"
                  />
                  <path
                    d="M13.0085 2.5L12.3418 4.16667"
                    stroke="#192227"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                  />
                  <path
                    d="M6.8252 2.56641L7.5252 4.22474"
                    stroke="#192227"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                  />
                  <path
                    d="M2.5 6.99121L4.16667 7.65788"
                    stroke="#192227"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                  />
                  <path
                    d="M2.56689 13.1746L4.22523 12.4746"
                    stroke="#192227"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                  />
                  <path
                    d="M6.9917 17.4997L7.65837 15.833"
                    stroke="#192227"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                  />
                  <path
                    d="M13.1751 17.4337L12.4751 15.7754"
                    stroke="#192227"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                  />
                  <path
                    d="M17.5002 13.0085L15.8335 12.3418"
                    stroke="#192227"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                  />
                  <path
                    d="M17.4332 6.8252L15.7749 7.5252"
                    stroke="#192227"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_740_656">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
          </div>
        </nav>
      </div>
    </header>
  );
}

