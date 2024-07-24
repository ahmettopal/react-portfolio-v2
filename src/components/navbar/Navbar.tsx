"use client";

import { FC, useState } from "react";
import { ThemeButton, NavMenuButton } from "..";

type NavbarProps = {
  darkMode: boolean;
  onMode: () => void;
  children: React.ReactNode;
};

const Navbar: FC<NavbarProps> = (props) => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="flex-1 py-5 mb-6 mx-5 xl:mx-48">
      <div className="flex justify-between md:justify-start">
        <ThemeButton darkMode={props.darkMode} onMode={props.onMode} />
        <NavMenuButton
          isOpen={navbarOpen}
          onMenuClick={() => setNavbarOpen(!navbarOpen)}
        />
        <div className="hidden md:flex">{props.children}</div>
      </div>
      {navbarOpen ? (
        <div className="bg-white dark:bg-zinc-700 rounded-md md:hidden mt-3 w-full">
          {props.children}
        </div>
      ) : null}
    </nav>
  );
};

export default Navbar;
