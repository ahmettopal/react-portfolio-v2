"use client";

import { FC, useState, useEffect } from "react";
import { ThemeButton, NavMenuButton, NavComponent } from "..";
import { usePathname } from "next/navigation";

type NavbarProps = {
  darkMode: boolean;
  onMode: () => void;
};

const Navbar: FC<NavbarProps> = (props) => {
  const pathname = usePathname();

  const [navbarOpen, setNavbarOpen] = useState(false);

  useEffect(() => {
    setNavbarOpen(false);
  }, [pathname]);

  return (
    <nav className="flex-1 py-5 mb-6 mx-5 xl:mx-48">
      <div className="flex justify-between md:justify-start">
        <ThemeButton darkMode={props.darkMode} onMode={props.onMode} />
        <NavMenuButton
          isOpen={navbarOpen}
          onMenuClick={() => setNavbarOpen(!navbarOpen)}
        />
        <div className="hidden md:flex">
          <NavComponent />
        </div>
      </div>
      {navbarOpen && (
        <div className="flex flex-col bg-white dark:bg-zinc-700 rounded-md md:hidden mt-3 w-full">
          <NavComponent />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
