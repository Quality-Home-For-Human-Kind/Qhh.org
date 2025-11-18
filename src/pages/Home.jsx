import { useAuth0 } from "@auth0/auth0-react";
import { BrowserView, MobileView, isMobile } from "react-device-detect";

function Home() {
  return (
    <div>
      <BrowserView>
        <header>
          <h1 className="text-[96px] text-center text-accent1">
            Quality Homes For Humankind™
          </h1>
          <main>
            <section className="box-border content-stretch flex flex-col gap-[40px] items-center px-[240px] py-[80px] relative w-full">
              <h1 className="text-[60px] text-center"> Our Mission </h1>
              <p className="text-[40px]">
                Quality Homes for Humankind (QHH) empowers young adults facing
                housing and job insecurity by providing secure transitional
                housing, cultivating a sense of belonging, and building assets
                for a sustainable career and future.
              </p>
            </section>
            <section className="box-border content-stretch flex flex-col gap-[40px] items-center px-[240px] py-[80px] relative w-full">
              <h1 className="text-[60px] text-center"> What Do We Povide</h1>
              <ul className="list-disc text-[40px]">
                <li>Temporary Housing</li>
                <li>A Mailing Address</li>
                <li>A Path Into The Workforce</li>
              </ul>
            </section>
            <section className="box-border content-stretch flex flex-col gap-[40px] items-center px-[240px] py-[80px] relative w-full">
              <h1 className="text-[60px] text-center"> Our Story </h1>
              <iframe
                width="840" //560
                height="472.5" //315
                src="https://www.youtube.com/embed/hAAJEtDNVao"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              />
            </section>
          </main>
        </header>
      </BrowserView>
    </div>
  );
}

export default Home;
