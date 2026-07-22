import { useEffect, useState } from "react";
import { HiOutlineArrowUp } from "react-icons/hi";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className={`fixed bottom-6 right-6 z-30 h-12 w-12 rounded-full bg-gradient-to-r from-cyan to-orange text-black flex items-center justify-center shadow-cyanShadow hover:scale-110 transition-all duration-300 ${
        visible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
    >
      <HiOutlineArrowUp className="text-xl" />
    </button>
  );
};

export default BackToTop;
