import { Link } from "react-scroll";
import { HiOutlineMail } from "react-icons/hi";
import ContactInfo from "../contactMeSection/ContactInfo";
import ContactSocial from "../contactMeSection/ContactSocial.jsx";

const quickLinks = [
  { link: "About Me", section: "about" },
  { link: "Skills", section: "skills" },
  { link: "Experience", section: "experience" },
  { link: "Projects", section: "projects" },
];

const FooterMain = () => {
  return (
    <div className="px-4 mt-[100px]" id="contact">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center text-center">
        <p className="section-eyebrow">Get In Touch</p>
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
          Let's Build Something <span className="text-cyan">Together</span>
        </h2>
        <p className="section-subtext text-center mb-8">
          Have a role, project, or idea in mind? My inbox is open — I'd love
          to hear from you.
        </p>
        <a
          href="mailto:vishalprajapati1936@gmail.com"
          className="btn-primary"
        >
          <HiOutlineMail className="text-xl" />
          Say Hello
        </a>
      </div>

      <div className="w-full h-[1px] bg-lightGrey/30 mt-20"></div>

      <div className="md:flex justify-between mt-10 max-w-[1200px] mx-auto gap-8">
        <div className="flex flex-col gap-4 md:items-start items-center md:text-left text-center">
          <h3 className="text-white font-bold text-lg">Vishal Prajapati</h3>
          <ContactInfo />
        </div>

        <div className="flex flex-col gap-4 md:items-start items-center md:text-left text-center mt-8 md:mt-0">
          <h3 className="text-white font-bold text-lg">Quick Links</h3>
          <ul className="flex flex-col gap-2">
            {quickLinks.map((item, index) => (
              <li key={index}>
                <Link
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-120}
                  to={item.section}
                  className="cursor-pointer text-lightGrey hover:text-cyan transition-all duration-300"
                >
                  {item.link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-4 md:items-start items-center mt-8 md:mt-0">
          <h3 className="text-white font-bold text-lg">Connect</h3>
          <ContactSocial />
        </div>
      </div>

      <p className="max-w-[1200px] mx-auto text-center mt-10 mb-8 text-sm text-lightGrey">
        © {new Date().getFullYear()} Vishal Prajapati. Built with React &amp; Tailwind CSS.
      </p>
    </div>
  );
};

export default FooterMain;
