import CertificateText from "./CertificateText";
import SingleCertificate from "./SingleCertificate";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const certificates = [
  {
    name: "Python 3.4.3 (IIT Bombay)",
    year: "Nov-2024",
    align: "right",
    image: "../../../public/images/website-img-1.jpg",
    link: "https://drive.google.com/file/d/1YHAND_tSCKahFcBPm-57gtc2jU2QEVWD/view?usp=drive_link",
    details:
      "Successfully completed Python 3.4.3 training organized at Medi-Caps University by IIT Bombay (Spoken Tutorial Project). Score: 85%, Credits: 4. Certificate ID: 40094206S2",
  },
  {
    name: "MERN Stack Developer",
    year: "Nov-2024",
    align: "left",
    image: "../../../public/images/website-img-2.webp",
    link: "https://drive.google.com/file/d/1MEhZ9o5N_uq-l8voBbu_7ydSdeUGfR0B/view?usp=drive_link",
    details:
      "Successfully completed Introduction to MERN Stack on 19th November 2024. Certificate Code: 7577160.",
  },
  {
    name: "JavaScript (Infosys Springboard)",
    year: "Jul-2025",
    align: "right",
    image: "../../../public/images/website-img-3.jpg",
    link: "https://drive.google.com/file/d/1lajUt2kfS-6AUZlcvz3RFnMwX7JA5c6i/view?usp=drive_link",
    details:
      "Successfully completed JavaScript course on July 6, 2025. Issued by Infosys Springboard. Verify via https://verify.onwingspan.com/",
  },
  {
    name: "Responsive Web Design (freeCodeCamp)",
    year: "Jul-2025",
    align: "left",
    image: "../../../public/images/website-img-4.jpg",
    link: "https://www.freecodecamp.org/certification/fcc191c4879-ebdf-4311-9984-37759d540784/responsive-web-design",
    details:
      "Completed Responsive Web Design Developer Certification on July 19, 2025 (300 hours of coursework). Issued by freeCodeCamp.org, signed by Quincy Larson.",
  },
  {
    name: "Technology Job Simulation (Deloitte)",
    year: "Jun-2025",
    align: "right",
    image: "../../../public/images/website-img-3.jpg",
    link: "https://drive.google.com/file/d/1X-GIhryeMsUWWBTykxhegvf_mvqbFFhT/view?usp=drive_link",
    details:
      "Completed Deloitte Technology Job Simulation on June 24, 2025, covering practical tasks in coding and development. Issued by Deloitte via Forage. Verification Code: 38k6Pw9YRmEEbBrE8.",
  },
 {
    name: "SQL (Basic) — HackerRank",
    year: "Jun-2025",
    align: "left",
    image: "../../../public/images/website-img-4.jpg", // save the uploaded image in /public/images/
    link: "https://drive.google.com/file/d/1YROr3NNFexu_8abEe2fzXvgRjdAIgjaM/view?usp=drive_link",
    details:
      "Earned SQL (Basic) Certificate from HackerRank on June 18, 2025. Validates knowledge of SQL fundamentals such as SELECT queries, filtering, sorting, and aggregation.",
  },
  {
    name: "Software Engineer Intern — HackerRank",
    year: "Jun-2025",
    align: "right",
    image: "../../../public/images/website-img-3.jpg", // save the second image in /public/images/
    link: "https://drive.google.com/file/d/1p3GiEDFqCT5LFgD4zcFkPYLGyqgpTMzF/view?usp=drive_link",
    details:
      "Earned Software Engineer Intern Certificate from HackerRank on June 18, 2025. Validates proficiency in coding, problem-solving, and software engineering concepts.",
  },
];

const CertificateMain = () => {
  return (
    <div id="certification" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <CertificateText />
      </motion.div>

      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {certificates.map((certificate, index) => (
          <SingleCertificate
            key={index}
            name={certificate.name}
            year={certificate.year}
            align={certificate.align}
            image={certificate.image}
            link={certificate.link}
            details={certificate.details}
          />
        ))}
      </div>
    </div>
  );
};

export default CertificateMain;
