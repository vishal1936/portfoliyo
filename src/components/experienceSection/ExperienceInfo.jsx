import CountUp from "../CountUp";

const ExperienceInfo = ({ end, suffix = "", text }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <CountUp end={end} suffix={suffix} className="font-bold text-6xl text-cyan" />
      <p className="font-bold text-xl text-lightGrey uppercase -mt-4">{text}</p>
    </div>
  );
};

export default ExperienceInfo;
