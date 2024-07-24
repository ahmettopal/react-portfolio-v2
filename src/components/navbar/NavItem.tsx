import Link from "next/link";

type NavItemProps = {
  to: string;
  text: string;
};

const NavItem = ({ to, text }: NavItemProps) => {
  return (
    <div className="bg-white dark:bg-zinc-700 text-black dark:text-white px-2 py-2 rounded-md md:ml-3 shadow-md h-10">
      <Link href={to}>{text}</Link>
    </div>
  );
};

export default NavItem;
