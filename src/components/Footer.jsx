import "./styles/Footer.css";
import { FaGithub, FaLinkedin, FaCopy } from "react-icons/fa";
import { useState } from "react";

const Footer = () => {
  const [copied, setCopied] = useState(false);
  const email = "kaisa.ets@voco.ee";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500); // copy text for 2.5 sec
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };
  return (
    <div id="contacts" className="footer">
      <div className="icons">
        <a
          href="https://github.com/kaisaets"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/kaisa-ets/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="icon" />
        </a>
        <p className="email">
          Send me an email: <br />
          <FaCopy className="emailIcon" />
          <span className="emailAddress" onClick={handleCopy}>{email}</span>{" "}
          {copied && (
            <>
              <br />{" "}
              <span className="copy">
                Copied!
              </span>
            </>
          )}
        </p>
      </div>
      <p className="copyright"> &copy; 2025</p>
    </div>
  );
};
export default Footer;
