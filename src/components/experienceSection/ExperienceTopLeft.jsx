import ExperienceInfo from "./ExperienceInfo";

const ExperienceTopLeft = () => {
  return (
    <div className="flex flex-col gap-6 w-full max-w-[300px]">
      <p className="text-orange font-bold uppercase text-3xl font-special text-center">
        Since 2024
      </p>
      <div className="flex justify-center items-center gap-4">
        <ExperienceInfo end={1} suffix="+" text="Year" />
        <p className="font-bold text-6xl text-lightBrown">-</p>
        <ExperienceInfo end={3} text="Companies" />
      </div>
      <p className="text-center text-lightGrey">
        1+ year of hands-on experience building scalable, production-grade
        full stack applications across 3 organizations.
      </p>
    </div>
  );
};

export default ExperienceTopLeft;
