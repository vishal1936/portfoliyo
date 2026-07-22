import { GiHamburgerMenu } from "react-icons/gi";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../../state/menuSlice";

const NavbarToggler = () => {
  const dispatch = useDispatch();

  const setToggleMenu = () => {
    dispatch(toggleMenu());
  };
  return (
    <button
      className="text-2xl p-3 border border-orange rounded-full text-white"
      onClick={setToggleMenu}
      aria-label="Toggle navigation menu"
    >
      <GiHamburgerMenu />
    </button>
  );
};

export default NavbarToggler;
