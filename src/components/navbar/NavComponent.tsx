"use client";

import { FC } from "react";
import NextLink from "next/link";
import { NavMenu } from "@/constants";
import { useSelectedLayoutSegment } from "next/navigation";

type NavComponentProps = {
  isFooter: boolean;
};

const NavComponent: FC<NavComponentProps> = (props) => {
  const segment = useSelectedLayoutSegment();
  const path = segment ? `/${segment}` : "/";

  const updatedNavMenu: { [key: string]: string } = { ...NavMenu };
  if (props.isFooter) {
    updatedNavMenu["https://github.com/ahmettopal/react-portfolio-v2"] =
      "Source Code";
  } else {
    updatedNavMenu["/assets/resume/sample.pdf"] = "Resume";
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 dark:bg-zinc-800 gap-3">
      {Object.entries(updatedNavMenu).map(([key, value]) => {
        const isActive = key === path;
        return (
          <NextLink
            key={key}
            href={key}
            className="bg-white dark:bg-zinc-700 text-black text-center dark:text-white px-2 py-2 rounded-md shadow-md"
          >
            {value}
          </NextLink>
        );
      })}
    </div>
  );
};

export default NavComponent;
