import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <SingleInfo text="vishalprajapati1936@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="+917610199518" Image={FiPhone} />
      <SingleInfo text="Indore, Madhyapradesh" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;
