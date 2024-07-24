"use client";

import { FC } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

type NavMenuButtonProps = {
  onMenuClick: () => void;
  isOpen: boolean;
};

const NavMenuButton: FC<NavMenuButtonProps> = (props) => {
  return (
    <div
      onClick={props.onMenuClick}
      className="bg-white dark:bg-zinc-700 rounded-md px-3 py-2 shadow-md md:hidden self-end h-10 w-12"
    >
      {props.isOpen ? (
        <AiOutlineClose className="cursor-pointer text-2xl text-black dark:text-white" />
      ) : (
        <AiOutlineMenu className="cursor-pointer text-2xl text-black dark:text-white" />
      )}
    </div>
  );
};

export default NavMenuButton;
