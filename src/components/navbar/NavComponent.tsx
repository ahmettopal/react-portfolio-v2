"use client";

import NextLink from "next/link";
import { NavMenu } from "@/constants";
import { useSelectedLayoutSegment } from "next/navigation";

const NavComponent = () => {
  const segment = useSelectedLayoutSegment();
  const path = segment ? `/${segment}` : "/";

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 dark:bg-zinc-800 gap-3">
      {Object.entries(NavMenu).map(([key, value]) => {
        const isActive = key === path;
        return (
          <NextLink
            key={key}
            href={key}
            className="bg-white dark:bg-zinc-700 text-black text-center dark:text-white px-2 py-2 rounded-md shadow-md h-10"
          >
            {value}
          </NextLink>
        );
      })}
    </div>
  );
};

export default NavComponent;
