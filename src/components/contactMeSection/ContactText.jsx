import { LuGraduationCap } from "react-icons/lu";

const education = [
  {
    degree: "Master of Computer Applications (M.C.A)",
    school: "Medi-Caps University, Indore, MP",
    year: "2023 – 2025",
  },
  {
    degree: "Bachelor of Science in Computer Science",
    school: "Lt. Savita Devi Jaiswal College, Shyamgher, MP",
    year: "2019 – 2022",
  },
];

const ContactText = () => {
  return (
    <div className="space-y-6 w-full">
      {education.map((item, index) => (
        <div
          key={index}
          className="flex items-start gap-4 text-left glass-card p-5 hover:border-cyan/40 transition-all duration-500"
        >
          <div className="h-12 w-12 shrink-0 rounded-full bg-cyan/10 border border-cyan/40 flex items-center justify-center text-cyan text-xl">
            <LuGraduationCap />
          </div>
          <div>
            <p className="font-semibold text-white text-lg">{item.degree}</p>
            <p className="text-lightGrey">{item.school}</p>
            <p className="text-orange text-sm font-special font-bold">{item.year}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactText;
