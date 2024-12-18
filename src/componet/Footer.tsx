import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter, faFacebook, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className=" flex flex-row justify-center p-4 text-black w-full fixed bottom-0">
      <FontAwesomeIcon
        icon={faFacebook}
        className="w-[28px] h-[28px] object-contain mx-10  transform transition duration-500 hover:scale-125 cursor-pointer"
        onClick={() => window.location.assign("https://www.facebook.com")}
      />
      <FontAwesomeIcon
        icon={faXTwitter}
        className="w-[28px] h-[28px] object-contain mx-10 transform transition duration-500 hover:scale-125 cursor-pointer"
        onClick={() => window.location.assign("https://www.x.com")}
      />
      <FontAwesomeIcon
        icon={faLinkedin}
        className="w-[28px] h-[28px] object-contain mx-10  transform transition duration-500 hover:scale-125 cursor-pointer"
        onClick={() =>
          window.location.assign("https://www.linkedin.com/in/kwok-ho-chiu-9869b91b6/")
        }
      />
    </div>
  );
};

export default Footer;
