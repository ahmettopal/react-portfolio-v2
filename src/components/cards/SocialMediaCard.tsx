import React from "react";
import Link from "next/link";
import { SocialMediaCardDto } from "@/types";
import { socialMediaList } from "@/constants";

const SocialMediaCard = () => {
  return (
    <>
      {socialMediaList.map((data: SocialMediaCardDto, index: number) => {
        return (
          <Link
            key={index}
            href={data.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {data.icon}
          </Link>
        );
      })}
    </>
  );
};

export default SocialMediaCard;
