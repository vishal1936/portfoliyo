import { useEffect, useState } from "react";
import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";
import NavbarBtn from "./NavbarBtn";
import NavbarToggler from "./NavbarToggler";
import { useSelector } from "react-redux";

const NavbarMain = () => {
  const menuOpen = useSelector((state) => state.menu.menuOpen);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="max-w-[1300px] mx-auto w-full px-2 sm:px-4 fixed left-[50%] -translate-x-[50%] z-40 flex gap-2 sm:gap-4 mt-2 transition-all duration-500">
      <div
        className={`flex justify-between w-full max-w-[1200px] mx-auto items-center gap-2 p-3 sm:p-4 md:p-6 rounded-r-full rounded-l-full border border-black/5 transition-all duration-500 ${
          scrolled ? "navbar-scrolled" : "bg-[#ffffff]/70 backdrop-blur-md shadow-md"
        }`}
      >
        <NavbarLogo />
        <div className={`${menuOpen ? "block" : "hidden"} lg:block`}>
          <NavbarLinks />
        </div>

        <NavbarBtn />
      </div>
      <div
        className={`flex lg:hidden p-3 sm:p-4 md:p-6 items-center justify-center rounded-full border border-black/5 transition-all duration-500 ${
          scrolled ? "navbar-scrolled" : "bg-[#ffffff]/70 backdrop-blur-md shadow-md"
        }`}
      >
        <NavbarToggler />
      </div>
    </nav>
  );
};

export default NavbarMain;
