const SingleExperience = ({ experience }) => {
  return (
    <div className="relative pl-14 md:pl-20">
      <div className="absolute left-0 top-1 h-10 w-10 md:h-14 md:w-14 rounded-full bg-darkBrown border-2 border-cyan flex items-center justify-center">
        <div className="h-3 w-3 rounded-full bg-cyan shadow-cyanShadow"></div>
      </div>

      <div className="glass-card p-6 hover:border-cyan/40 transition-all duration-500">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
          <h3 className="font-bold text-cyan text-xl md:text-2xl">
            {experience.role}
          </h3>
          <span className="chip">{experience.date}</span>
        </div>
        <p className="text-orange font-semibold">{experience.company}</p>
        <p className="text-lightGrey text-sm mb-4">{experience.location}</p>
        <ul className="space-y-2">
          {experience.responsibilities.map((resp, index) => (
            <li
              key={index}
              className="flex gap-3 text-white/90 text-[15px] leading-relaxed"
            >
              <span className="text-cyan mt-1">▹</span>
              <span>{resp}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SingleExperience;
