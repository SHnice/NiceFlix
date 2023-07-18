import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { FaLinkedinIn } from "@react-icons/all-files/fa/FaLinkedinIn";
import { FaEnvelope } from "@react-icons/all-files/fa/FaEnvelope";
import { FaGlobe } from "@react-icons/all-files/fa/FaGlobe";

const Footer = () => {
  return (
      <footer className="w-full flex flex-col gap-10 sm:gap-5 sm:flex-row items-center justify-between p-4 md:p-10 lg:p-12 mb-16 mt-16 xl:mb-0">
        <div className="w-full flex justify-evenly items-center sm:flex-col sm:items-start sm:justify-center gap-2">

          <div className="text-sm text-center sm:text-left">
            <p>Copyright © 2023 - All rights reserved.</p>
            <p>Made with ❤{" "}
                <a aria-label="helloukey" target="_blank" rel="noreferrer" className="hover:text-white underline"
                    href="https://github.com/SHnice">Saddam Hussain
                </a>
            </p>
            <p>Data provided by -{" "} 
                <a aria-label="tmdb" target="_blank" rel="noreferrer" className="hover:text-white underline"
                    href="https://www.themoviedb.org/">TMDB
                </a>
            </p>
          </div>
          
        </div>
        <div className="flex items-center justify-center gap-4 pb-10 sm:p-0">
            <a 
                aria-label="website"
                href="https://saddamhussain.vercel.app"
                target="_blank" rel="noreferrer"
                className="hover:text-white"
                >
                <FaGlobe className="text-xl lg:text-2xl" />
            </a>
            <a 
                aria-label="github"
                href="https://github.com/SHnice"
                target="_blank" rel="noreferrer"
                className="hover:text-white"
                >
                <FaGithub className="text-xl lg:text-2xl" />
            </a>
            <a 
                aria-label="linkedin"
                href="https://www.linkedin.com/in/saddam-hussain-3719b2248/"
                target="_blank" rel="noreferrer"
                className="hover:text-white"
                >
                <FaLinkedinIn className="text-xl lg:text-2xl" />
            </a>
            <a 
                aria-label="mail"
                href="mailto:arsal0344@gmail.com"
                target="_blank" rel="noreferrer"
                className="hover:text-white"
                >
                <FaEnvelope className="text-xl lg:text-2xl" />
            </a>
        </div>
      </footer>
  );
};
export default Footer;
