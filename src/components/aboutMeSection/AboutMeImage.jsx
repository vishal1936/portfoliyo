const AboutMeImage = () => {
  return (
    <div className="h-[367px] w-[220px] sm:h-[433px] sm:w-[260px] md:h-[500px] md:w-[300px] relative mx-auto">
      <div className="h-full w-full rounded-[100px] absolute overflow-hidden shadow-2xl border-4 border-[#ffffff]">
        <img
          src="/images/about-me.jpg"
          alt="About Me Image"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="h-full w-[170px] sm:w-[210px] md:w-[250px] bg-gradient-to-br from-orange to-cyan absolute bottom-[-20px] left-[-20px] sm:bottom-[-25px] sm:left-[-25px] md:bottom-[-30px] md:left-[-30px] rounded-bl-[120px] rounded-tr-[120px] rounded-br-[20px] rounded-tl-[20px] -z-10 opacity-80"></div>
    </div>
  );
};

export default AboutMeImage;
