"use client";

import { FC, useState, useEffect } from "react";
import { Navbar } from "..";

type ThemeLayoutsProps = {
  children: React.ReactNode;
};

const ThemeLayouts: FC<ThemeLayoutsProps> = (props) => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (event) => {
        event.matches ? setDarkMode(true) : setDarkMode(false);
      });
  }, []);

  useEffect(() => {
    const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
    darkThemeMq.matches ? setDarkMode(true) : setDarkMode(false);
  }, []);

  const onDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? "dark" : "white"}>
      <div className="md:min-h-screen 2xl:min-h-screen bg-zinc-100 dark:bg-zinc-800">
        <Navbar onMode={onDarkMode} darkMode={darkMode} />
        {props.children}
      </div>
    </div>
  );
};

export default ThemeLayouts;
