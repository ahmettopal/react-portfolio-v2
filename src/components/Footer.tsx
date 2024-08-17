import React from "react";
import { SocialMediaCard, NavComponent } from "./";
import { fullName, mail } from "@/constants";

const Footer = () => {
  return (
    <div className="bg-zinc-100 dark:bg-zinc-800 p-8">
      <div className="flex-1 md:flex justify-between lg:mx-24 items-center text-gray-600 font-semibold gap-1">
        <div className="text-start dark:text-gray-400">
          <p className="max-w-xl my-2">
            If you have a website or mobile app idea in mind or you need some
            advice about product design, feel free to contact me.
          </p>
          <NavComponent isFooter={true} />
        </div>
        <div className="text-center font-bold text-gray-400 text-sm mt-5 md:mt-0">
          <div className="text-2xl 2xl:text-5xl flex justify-center gap-4 py-1 text-gray-600 dark:text-slate-200">
            <SocialMediaCard />
          </div>
          <p>
            © {new Date().getFullYear()} {fullName}
          </p>
          <p className="hover:underline decoration-1">
            <a href={`mailto:${mail}`} rel="noopener noreferrer">
              {mail}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
