import { Link } from "react-router-dom";
import { BrowserView, MobileView, isMobile } from "react-device-detect";
import Profile from "./Profile";
import "../index.css";

function Header() {
  const logoSrc = "/Qhh_Logo_Black.svg";
  return (
    <div>
      <BrowserView>
        <nav className="box-border content-stretch flex items-center justify-between pb-[80px] pt-[20px] px-0 relative size-full">
          <img
            src={logoSrc}
            className="flex-none h-[60px] scale-y-[100%] w-[216px]"
          />
          <div className="backdrop-blur-[15px] backdrop-filter bg-[rgba(255,255,255,0.4)] box-border content-stretch flex gap-[27px] items-center overflow-clip px-[24px] py-[20px] relative rounded-[100px] shrink-0 w-[267px]">
            <Link to="/">Home</Link>
            <Link to="/blog">Blog</Link>
          </div>
          <Profile />
        </nav>
      </BrowserView>
    </div>
  );
}

export default Header;
