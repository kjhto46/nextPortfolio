"use client";

import { useEffect, useState } from "react";

const ThemeSwitcher = () => {
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
    <>
      {darkTheme !== undefined && (
        <button onClick={handleToggle}>
          {darkTheme ? (
            <div className="lightAni">라이트모드</div>
          ) : (
            <div className="darkAni">다크모드</div>
          )}
        </button>
      )}
    </>
  );
};
export default ThemeSwitcher;
