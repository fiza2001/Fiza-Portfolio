import { Element } from "react-scroll";

export default function Work() {
  return (
    <Element name="section6">
      <section id="section6">
    <h1 style={{fontSize:'2.5vw', color:'#282826'}}>These are some of my works</h1>
    <div className="work">
      {/* first */}
      <div>
        {/* one */}
        <div className="work-item-f1">
          <a href="https://dish-discovery-1.vercel.app/">
          <div className="image-container">
            <img
              src="./images/recipe-1.png"
              alt="Project"
              className="image"
            />
            <div className="text-container">
              <p className="project-name">DISH DISCOVERY</p>
            </div>
          </div>
          </a>
        </div>
       
        {/* two */}
        <div className="work-item-f2">
          <a href="https://roamcraze-5s7rup40q-mithra-jai.vercel.app/">
          <div className="image-container">
            <img
              src="./images/travel.png"
              alt="Project"
              className="image"
            />
            <div className="text-container">
              <p className="project-name">ROAM CRAZE</p>
            </div>
          </div>
          </a>
        </div>
      </div>
      {/* second */}
      <div>
        {/* one */}
        <div className="work-item-s1">
          <a href="https://fiza2001.github.io/budget-tracker/">
          <div className="image-container">
            <img
              src="./images/budget.png"
              alt="Project"
              className="image"
            />
            <div className="text-container">
              <p className="project-name">BUDGET TRACKER</p>
            </div>
          </div>
          </a>
        </div>
        {/* two */}
        <div className="work-item-s2">
          <a href="https://github.com/fiza2001/my-pokedex">
          <div className="image-container">
            <img
              src="./images/pokedex.png"
              alt="Project"
              className="image"
            />
            <div className="text-container">
              <p className="project-name">POKEDEX</p>
            </div>
          </div>
          </a>
        </div>
      </div>
    </div>
    </section>
    </Element>
  );
}
