"use client";

import { useState } from "react";

const ThemeSwitcher = () => {
  const [darkMode, setDarkMode] = useState(false);

  const darkModeHandler = () => {
    event.preventDefault();
    setDarkMode(!darkMode);
    if (darkMode) {
      document.body.setAttribute("data-theme", "light");
    } else {
      document.body.setAttribute("data-theme", "dark");
    }
  };

  return (
    <a className="darkModeBtn" onClick={darkModeHandler} style={{cursor:"pointer"}}>
      {darkMode ? (
        <div className="lightAni">라이트모드</div>
      ) : (
        <div className="darkAni">다크모드</div>
      )}
    </a>
  );
};
export default ThemeSwitcher;
