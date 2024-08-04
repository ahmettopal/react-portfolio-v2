import { FC } from "react";
import Image from "next/image";
import { TechStackCardDto } from "@/types";

type SkillsListProps = {
  data: TechStackCardDto;
};

const SkillsList: FC<SkillsListProps> = (props) => {
  return (
    <div className="content-center gap-2 md:gap-2 2xl:gap-3 grid grid-cols-4 md:grid-cols-4 lg:grid-cols-4">
      {props.data.map((item, index) => {
        return (
          <div
            key={index}
            className="transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-150"
          >
            <div className="flex flex-col justify-between text-center shadow-md p-2 md:p-5 rounded-md dark:bg-zinc-800 bg-white h-36">
              <Image src={item.icon} width={80} height={80} alt="skils" />
              <h3 className="text-xs sm:text-sm md:text-md 2xl:text-lg mt-1 font-medium text-gray-400 dark:text-gray-400">
                {item.name}
              </h3>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SkillsList;
