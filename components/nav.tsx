
import { links } from "@/contants";

const Nav = ({ containerStyles }: { containerStyles: string }) => {
  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, index) => (
        <a
          href={`/${link.target}`}
          target=""
          key={index}
          className="cursor-pointer hover:text-accent"
        >
          {link.name}
        </a>
      ))}
    </nav>
  );
};

export default Nav;

