
import { links } from "@/contants";
import { useMediaQuery } from "react-responsive";

const MobileNav = ({ containerStyles }: { containerStyles: string }) => {
  const isMobile = useMediaQuery({
    query: "(max-width: 640px)",
  });

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

export default MobileNav;

