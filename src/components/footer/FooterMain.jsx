import ContactInfo from  "../contactMeSection/ContactInfo"
import ContactSocial from "../contactMeSection/ContactSocial.jsx"

const FooterMain = () => {
  
  return (
    <div className="px-4" id ="Contact">
            <h2 className="text-5xl mt-12 font-bold text-cyan mb-10 justify-center flex">Contact</h2>

  {/* Divider Line */}
  <div className="w-full h-[1px] bg-lightGrey mt-24"></div>

  {/* Main Footer Section */}
  <div className="md:flex justify-between mt-4 max-w-[1200px] mx-auto sm:hidden">
    {/* Name and Contact Info */}
    
    <div>
          <ContactInfo/>

    </div>

    {/* Navigation Links */}
    <div><ContactSocial/></div>
   
  </div>

  {/* Footer Bottom Text */}
  <p className="max-w-[1200px] mx-auto text-right mt-2 mb-12 text-sm text-lightBrown">
    © 2025 Vishal Prajapati | All Rights Reserved.
  </p>
</div>

  );
};

export default FooterMain;
