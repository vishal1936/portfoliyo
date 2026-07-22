import { Link } from "react-scroll";

const links = [
  { link: "About Me", section: "about" },
  { link: "Skills", section: "skills" },
  { link: "Experience", section: "experience" },
  { link: "Certification", section: "certification" },
  { link: "Projects", section: "projects" },
  { link: "Contact", section: "contact" },
];

const NavbarLinks = () => {
  return (
    <ul className="flex lg:flex-row max-lg:flex-col gap-6 text-white font-body lg:relative max-lg:absolute max-lg:top-[120%] text-center left-[50%] -translate-x-[50%] lg:text-md max-lg:text-xl max-lg:bg-[#ffffff] max-lg:backdrop-blur-lg max-lg:w-full max-lg:py-4 max-lg:rounded-2xl max-lg:border max-lg:border-black/5 max-lg:shadow-xl">
      {links.map((link, index) => {
        return (
          <li key={index} className="group">
            <Link
              spy={true}
              smooth={true}
              duration={500}
              offset={-130}
              to={link.section}
              activeClass="active"
              className="nav-link cursor-pointer text-white hover:text-cyan transition-all duration-500"
            >
              {link.link}
            </Link>
            <div className="mx-auto bg-cyan w-0 group-hover:w-full h-[1px] transition-all duration-500"></div>
          </li>
        );
      })}
    </ul>
  );
};

export default NavbarLinks;
