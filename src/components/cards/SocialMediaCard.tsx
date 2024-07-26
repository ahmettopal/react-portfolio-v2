import React from "react";
import Link from "next/link";
import { SocialMediaCardDto } from "@/models";
import { socialMediaList } from "@/constants";
import { Bs0Circle } from "react-icons/bs";

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
