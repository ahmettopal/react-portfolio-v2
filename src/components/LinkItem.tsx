import { FC } from "react";

type LinkItemProps = {
  url: string;
  icon: any;
};

const LinkItem: FC<LinkItemProps> = (props) => {
  return (
    <a href={props.url} target="_blank" rel="noopener noreferrer">
      {props.icon}
    </a>
  );
};

export default LinkItem;
