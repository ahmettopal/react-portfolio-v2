import { IconType } from "react-icons";

export type SocialMediaCardDto = {
  icon: IconType | any;
  url: string;
};

export type TechStackCardDto = {
  name: string;
  icon: IconType | any;
}[];

export type PortfolioCardDto = {
  id: number;
  image: string;
  title: string;
  description: string;
  webLink: string;
  androidLink: string;
  iosLink: string;
  tech: IconType[];
}[];
