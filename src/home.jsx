import { useAuth0 } from '@auth0/auth0-react';
import './style.css'
import Header from './header';

function Home() {
  return (
    <div>
      <Header/>
      <main>
        <section id="mission" className="flex flex-col items-center gap-10 p-1/4">
          <h1 className="text-center text-6xl font-bold">
            We Are Quality Homes For Human Kind
          </h1>
          <p className="text-center text-3xl font-semibold">
            Our mission is to empower young adults facing housing and job
            insecurity by providing secure transitional housing, cultivating a
            sense of belonging, and building assets for a sustainable career and
            future.
          </p>
          <img src="./IsHere.png" className="mx-auto w-1/3" />
        </section>
        <section className="flex flex-col items-center gap-10 p-1/2">
          <h1 className="text-6xl font-bold">Our Story</h1>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/hAAJEtDNVao"
            title="YouTube video player"
            allow="accelerometer; clipboard-write; encrypted-media;"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </section>
      </main>
    </div>
  )
}

export default Home;
