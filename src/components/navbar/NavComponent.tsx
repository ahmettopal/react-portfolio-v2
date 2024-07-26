"use client";

import NextLink from "next/link";
import { NavMenu } from "@/constants";
import { useSelectedLayoutSegment } from "next/navigation";

const NavComponent = () => {
  const segment = useSelectedLayoutSegment();
  const path = segment ? `/${segment}` : "/";

  return (
    <>
      {Object.entries(NavMenu).map(([key, value]) => {
        const isActive = key === path;
        return (
          <NextLink
            key={key}
            href={key}
            className="bg-white dark:bg-zinc-700 text-black dark:text-white px-2 py-2 rounded-md md:ml-3 shadow-md h-10"
          >
            {value}
          </NextLink>
        );
      })}
    </>
  );
};

export default NavComponent;
