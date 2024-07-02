import "./Footer.css";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import SocialLink from "./SocialLink";

function Footer() {
  return (
    <footer className="footer flex-v-center" id="footer">
      <div>
        <p>&copy; {new Date().getFullYear()}: Sharath Devadiga</p>
        <p>Let&apos;s connect and build your vision together!</p>
      </div>
      <div className="social-link-container">
        <SocialLink
          href="https://www.linkedin.com/in/sharath-devadiga"
          ariaLabel="LinkedIn"
          icon={FaLinkedin}
          label="LinkedIn"
        />
        <SocialLink
          href="https://github.com/Sharatdevadiga"
          ariaLabel="GitHub"
          icon={FaGithub}
          label="GitHub"
        />
        <SocialLink
          href="mailto:sharathdevadiga0046@gmail.com"
          ariaLabel="Email"
          icon={MdEmail}
          label="Email"
        />
      </div>
    </footer>
  );
}

export default Footer;
