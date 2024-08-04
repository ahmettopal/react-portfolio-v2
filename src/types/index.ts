import { IconType } from "react-icons";

export type SocialMediaCardDto = {
  icon: IconType | any;
  url: string;
};

export type TechStackCardDto = {
  name: string;
  icon: IconType | any;
}[];
