import { FC } from "react";

type TitleProps = {
  title: string;
};

const Title: FC<TitleProps> = (props) => {
  return (
    <div className="text-center font-bold py-4">
      <p className="text-2xl md:text-4xl 2xl:text-6xl text-gray-900 dark:text-gray-400">
        {props.title}
      </p>
    </div>
  );
};

export default Title;
