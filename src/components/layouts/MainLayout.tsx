import { FC } from "react";
import { Footer } from "../";

type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout: FC<MainLayoutProps> = (props) => {
  return (
    <>
      {props.children}
      <Footer />
    </>
  );
};

export default MainLayout;
