import ContactMeLeft from "./ContactMeLeft";

const ContactMeMain = () => {
  return (
    <div
   
      className="max-w-[1200px] mx-auto px-4 mt-24 flex flex-col items-center justify-center text-center"
    >
      <h2 className="text-5xl md:text-6xl font-bold text-cyan mb-10">Education</h2>

      <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-12 bg-brown p-8 rounded-2xl shadow-lg">
        <ContactMeLeft />
        {/* <ContactMeRight /> if needed */}
      </div>
    </div>
  );
};

export default ContactMeMain;
