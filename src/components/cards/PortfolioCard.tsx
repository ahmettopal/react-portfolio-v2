import { FC } from "react";
import Image from "next/image";
import { AiOutlineLink, AiFillAndroid, AiFillApple } from "react-icons/ai";
import { LinkItem, PortfolioImage } from "..";

type PortfolioCardProps = {
  image: string;
  title: string;
  description: string;
  webLink: string;
  androidLink: string;
  iosLink: string;
  tech: any;
  index: number;
};

const PortfolioCard: FC<PortfolioCardProps> = (props) => {
  return (
    <div className="flex flex-col md:flex-row p-4 gap-5 md:w-10/12 min-h-80 my-3 bg-white border border-gray-200 rounded-lg shadow  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      <div className="flex flex-col md:w-10/12 justify-between leading-normal">
        <div>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {props.title}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {props.description}
          </p>
        </div>
        <div>
          <div className="flex flex-col">
            <span className="text-gray-600 dark:text-gray-400 mt-2">
              Links:
            </span>
            <div className="text-lg flex gap-2 items-center">
              {props.webLink ? (
                <LinkItem
                  url={props.webLink}
                  icon={<AiOutlineLink color="gray" size={22} />}
                />
              ) : null}
              {props.androidLink ? (
                <LinkItem
                  url={props.androidLink}
                  icon={<AiFillAndroid color="gray" size={22} />}
                />
              ) : null}
              {props.iosLink ? (
                <LinkItem
                  url={props.iosLink}
                  icon={<AiFillApple color="gray" size={22} />}
                />
              ) : null}
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-gray-600 dark:text-gray-400 mt-2">
              Technologies:
            </span>
            <div className="text-lg flex gap-2 items-center">
              {props.tech?.map((data: any, index: number) => {
                return (
                  <Image
                    key={index}
                    src={data}
                    alt="tech"
                    width={28}
                    height={28}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <PortfolioImage image={props.image} index={props.index} />
    </div>
  );
};

export default PortfolioCard;
