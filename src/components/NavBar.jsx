import logo from "../images/Horizon.png";
import { socialLinks } from "../data";
import PageLinks from "./PageLinks";
import SocialLinks from "./SocialLinks";
export default function NavBar() {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="" style={{ width: "50px", height: "auto" }} />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <PageLinks parentClass="nav-links" itemClass="nav-link" />
        <ul className="nav-icons">
          {socialLinks.map((link) => {
            return <SocialLinks key={link.id} {...link} itemClass="nav-icon" />;
          })}
        </ul>
      </div>
    </nav>
  );
}
