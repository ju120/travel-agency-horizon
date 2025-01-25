import { socialLinks } from "../data";
import PageLinks from "./PageLinks";
import SocialLinks from "./SocialLinks";
export default function Footer() {
  return (
    <footer className="section footer">
      <PageLinks parentClass="footer-links" itemClass="footer-link" />;
      <ul className="footer-icons">
        {socialLinks.map((link) => {
          return (
            <SocialLinks key={link.id} {...link} itemClass="footer-icon" />
            // <li key={id}>
            //   <a href={href} target="_blank" className="footer-icon">
            //     <i className={icon}></i>
            //   </a>
            // </li>
          );
        })}
      </ul>
      <p className="copyright">
        copyright &copy; Horizon Travel Agency
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
}
