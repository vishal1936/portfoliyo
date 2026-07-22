import CountUp from "../CountUp";

const stats = [
  { end: 1, suffix: "+", label: "Year Experience" },
  { end: 27, suffix: "+", label: "REST APIs Shipped" },
  { end: 40, suffix: "%", label: "Perf Improvement" },
  { end: 3, suffix: "", label: "Companies" },
];

const SubHeroMain = () => {
  return (
    <div className="w-full border-y bg-brown border-lightGrey/40 flex flex-wrap justify-around py-8 items-center gap-6">
      {stats.map((stat, index) => (
        <div key={index} className="flex flex-col items-center gap-1">
          <CountUp
            end={stat.end}
            suffix={stat.suffix}
            className="text-4xl md:text-5xl font-bold text-cyan"
          />
          <p className="text-lightGrey uppercase text-xs md:text-sm tracking-wide font-special font-bold">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
};

export default SubHeroMain;
