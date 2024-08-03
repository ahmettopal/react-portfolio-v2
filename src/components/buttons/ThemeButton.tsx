import { FC } from "react";
import { BsFillMoonFill, BsSun } from "react-icons/bs";

type ThemeButtonProps = {
  darkMode: boolean;
  onMode: () => void;
};

const ThemeButton: FC<ThemeButtonProps> = (props) => {
  return (
    <div
      onClick={() => props.onMode()}
      className="bg-white dark:bg-zinc-700 rounded-md px-3 py-2 md:mr-3 shadow-md h-10 w-12 flex justify-center items-center"
    >
      {props.darkMode ? (
        <BsSun className="cursor-pointer text-2xl text-white" />
      ) : (
        <BsFillMoonFill className="cursor-pointer text-2xl text-black" />
      )}
    </div>
  );
};

export default ThemeButton;
