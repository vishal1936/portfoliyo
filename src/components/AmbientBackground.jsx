const AmbientBackground = () => {
  return (
    <>
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="blob blob-a h-[420px] w-[420px] bg-cyan top-[5%] -left-[10%]"></div>
        <div className="blob blob-b h-[380px] w-[380px] bg-orange top-[45%] -right-[8%]"></div>
        <div className="blob blob-c h-[340px] w-[340px] bg-cyan top-[80%] left-[15%]"></div>
      </div>
      <div className="noise-overlay"></div>
    </>
  );
};

export default AmbientBackground;
