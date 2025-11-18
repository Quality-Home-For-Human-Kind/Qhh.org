import { Link } from "react-router-dom";
import { BrowserView, MobileView, isMobile } from "react-device-detect";
import "../index.css";

function Footer() {
  return (
    <footer className="box-border content-stretch flex flex-col gap-[10px] items-center px-[240px] py-[80px] relative w-full">
      <h1>Connect Us</h1>
      <div>
        <p>
          Email:&nbsp;
          <a href="mailto:info@qualityhomesforhumankind.org">
            info@qualityhomesforhumankind.org
          </a>
        </p>
        <p>
          Phone Number:&nbsp;
          <a href="tel:857-259-5263">(857) 259 - 5263</a>
        </p>
        <p>
          Instagram:&nbsp;
          <a href="www.instagram.com/qualityhomesforhumankind">
            @qualityhomesforhumankind
          </a>
        </p>
        <p>
          TikTok:&nbsp;
          <a href="www.tiktok.com/@qualityhomesforhumankind">
            @qualityhomesforhumankind
          </a>
        </p>
        <p>
          Linkedin:&nbsp;
          <a href="tel:857-259-5263">(857) 259 - 5263</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
