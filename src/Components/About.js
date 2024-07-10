import { Element } from "react-scroll";

export default function About() {
  return (
    <Element name="section2">
    <section className="abt-root" id="section2">
      <p id="abt-get">
        <span id="abt-title">About Me</span>
        <br />
        Get to know me
      </p>
      <div className="abt-main">
        <div>
          <img src="about-gif.gif" alt="about-gif" className="abt-gif" />
          <hr />
          <div className="details">
            <div>
              <p>
                <b>Name : </b>Fiza Hussain
              </p>
              <p>
                <b>Age : </b>23
              </p>
            </div>
            <div>
              <p>
                <b>Email : </b>fiza16hussain@gmail.com
              </p>
              <p>
                <b>From : </b>Chennai, India
              </p>
            </div>
          </div>
          <br/>
          {/* button */}
          <a href="/cv.pdf" download="Fiza_Hussain_CV.pdf">
          <button class="btn">Download CV</button>
          </a>
        </div>
        <div className="abt-content">
          <p id="greet">
            <i>Hi! Nice to meet you.</i>
          </p>
         
          <p className="abt-p">
            <span style={{fontWeight:'bold'}}>I'm Fiza, </span>
            a passionate Frontend Developer with a flair for creating beautiful
            and user-friendly web applications. With a keen eye for design and a
            strong foundation in frontend technologies, I've successfully
            completed several projects that showcase my skills and creativity.
            <br />
            Currently, I'm expanding my expertise by diving into backend
            development, aiming to become a well-rounded full-stack developer.
            This journey has been exciting, and I look forward to integrating my
            newfound backend knowledge with my frontend prowess. <br />
            When I'm not coding, you'll find me immersed in my other passions. I
            love painting, which allows me to express my creativity in vibrant
            and unique ways. Reading books is another favorite pastime,
            providing me with endless inspiration and new perspectives. I also
            enjoy exploring other creative avenues, always eager to learn and
            try something new.
          </p>
        </div>
      </div>
    </section>
    </Element>
  );
}
