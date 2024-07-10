import { FaHtml5 } from "react-icons/fa";
import { SiCss3 } from 'react-icons/si';
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { FaGit } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiCraftcms } from "react-icons/si";
import { GrGraphQl } from "react-icons/gr";
import { FaJava } from "react-icons/fa";
import { SiSpringboot } from "react-icons/si";
import { TbBrandMysql } from "react-icons/tb";
import { IoLogoVercel } from "react-icons/io5";
import { FaShieldAlt } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { Element } from "react-scroll";

export default function Technology() {
  const data = [
    { id: 1, name: "HTML", logo: <FaHtml5 /> },
    { id: 2, name: "CSS", logo: <SiCss3 /> },
    { id: 3, name: "Javascript", logo: <IoLogoJavascript /> },
    { id: 4, name: "React JS", logo: <FaReact /> },
    { id: 5, name: "Next JS", logo: <SiNextdotjs /> },
    { id: 6, name: "Contentful CMS", logo: <SiCraftcms /> },
    { id: 7, name: "Java", logo: <FaJava /> },
    { id: 8, name: "GraphQL", logo: <GrGraphQl /> },
    { id: 9, name: "Spring Boot", logo: <SiSpringboot /> },
    { id: 10, name: "Bootstrap", logo: <FaBootstrap /> },
    { id: 11, name: "Vercel", logo: <IoLogoVercel /> },
    { id: 12, name: "Git", logo: <FaGit /> },
    { id: 13, name: "Github", logo: <FaGithub /> },
    { id: 14, name: "Keycloak", logo: <FaShieldAlt /> },
    { id: 15, name: "Redux", logo: <SiRedux /> },
    { id: 16, name: "MySQL", logo: <TbBrandMysql /> },
  ];
  return (
    <Element name="section4">
    <section className="tech-main" id="section4">
      <h1>I've been working with these technologies lately</h1>
      <br />
      <div className="techs">
        {data.map((tech) => (
          <div className="tech-inn">
            <p style={{color:'white'}}>
              <span id="tech-icon">{tech.logo}</span>
              <br />
              {tech.name}
            </p>
          </div>
        ))}
      </div>
    </section>
    </Element>
  );
}
