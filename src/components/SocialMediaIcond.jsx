import { FaGithubSquare } from "react-icons/fa";
const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/rahna-israth-0b6995230?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BK3APB0hdRdqYqNTkfuag7g%3D%3D"
        target="_blank"
        rel="noreferrer"
      >
       <img alt="linkedin-link" src="../assets/linkedin.png" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://github.com/israthnr"
        target="_blank"
        rel="noreferrer"
      >
         <FaGithubSquare className= "w-9 h-8" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.facebook.com"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="facebook-link" src="../assets/facebook.png" />
      </a>
      
    </div>
  );
};

export default SocialMediaIcons;
