import { Link } from "react-scroll";

const facts = [
  { label: "Location", value: "Indore, Madhya Pradesh, India" },
  { label: "Experience", value: "1+ Year, 3 Companies" },
  { label: "Education", value: "M.C.A, Medi-Caps University" },
  { label: "Focus", value: "MERN Stack & REST APIs" },
];

const AboutMeText = () => {
  return (
    <div className="flex flex-col items-center text-center md:items-start md:text-left">
      <p className="section-eyebrow">Get To Know Me</p>
      <h2 className="text-5xl md:text-6xl text-white mb-6">
        About <span className="text-cyan">Me</span>
      </h2>
      <p className="text-lightGrey text-lg leading-relaxed">
        I'm a Full Stack Developer with 1+ year of proven experience
        architecting and deploying scalable, production-grade web
        applications. I specialize in end-to-end{" "}
        <span className="text-white font-semibold">MERN stack</span>{" "}
        development — backend API design, database optimization, and
        responsive frontend implementation — and have improved system
        performance by up to{" "}
        <span className="text-orange font-semibold">40%</span> through
        code and query optimization.
      </p>
      <p className="text-lightGrey text-lg leading-relaxed mt-4">
        I care about clean code, secure authentication, and building
        interfaces people actually enjoy using — all while collaborating
        closely with teams in an Agile environment.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 w-full max-w-md">
        {facts.map((fact, index) => (
          <div
            key={index}
            className="glass-card px-4 py-3 text-center md:text-left"
          >
            <p className="text-xs uppercase tracking-wide text-lightGrey">
              {fact.label}
            </p>
            <p className="text-white font-semibold text-sm mt-1">
              {fact.value}
            </p>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-4 mt-10 justify-center md:justify-start">
        <button className="btn-primary">
          <Link
            spy={true}
            smooth={true}
            duration={500}
            offset={-120}
            to="projects"
            className="cursor-pointer"
          >
            My Projects
          </Link>
        </button>
        <a
          href="/Vishal_Prajapati_Resume.pdf"
          download
          className="btn-outline"
        >
          Download CV
        </a>
      </div>
    </div>
  );
};

export default AboutMeText;
