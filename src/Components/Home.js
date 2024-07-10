import Navbar from "./NavBar";
import About from "./About";
import Work from "./Work";
import Contact from "./Contact";
import LetsWork from "./LetsWork";
import Technology from "./Technology";
import Education from "./Education";
import Certificate from "./Certificate";
import { Element } from "react-scroll";
import Footer from "./Footer";
import { Link } from 'react-scroll';

export default function Home() {
  return (
    <Element name="section1">
      <section className="home-main" id="section1">
        <Navbar />
        <div className="margin-main">
          <div className="title-intro">
            <h1 class="typing">
              Hi! I'm Fiza.
              <br />A Frontend Developer.
            </h1>
            <p style={{ color: "white" }}>
              I design and code beautifully simple things, and I love what I do.
            </p>
            <Link to="section2" smooth={true} duration={500}>
              <div className="aniWrap">
                <div className="mouse">
                  <div className="scroller"></div>
                </div>
              </div>
            </Link>
          </div>
          <About />
          <Education />
          <Technology />
          <Certificate />
          <LetsWork />
          <Work />
          <Contact />
          <Footer />
        </div>
      </section>
    </Element>
  );
}
