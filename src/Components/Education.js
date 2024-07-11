import { Element } from "react-scroll";

export default function Education(){
    const educationData = [
        {
          institution: 'BSA Crescent Engineering College',
          degree: 'Bachelor of Technology in Information Technology',
          year: 'June 2018 - July 2022',
          details: 'Relevant coursework: Data Structures, Algorithms, AI, Machine Learning, Database, Software Design, Operating Systems, Data Science, IT Design Studio, Web Development.'
        },
        {
          institution: 'Hilton Matriculation Higher Secondary School',
          degree: 'Higher Secondary School Leaving Certificate',
          year: '2017 - 2018',
          details: 'Relevant Coursework: French, English, Maths, Chemistry, Physics, Computer Science.'
        },
        {
            institution: 'Hilton Matriculation Higher Secondary School',
            degree: 'Secondary School Leaving Certificate',
            year: '2015 - 2016',
            details: 'Relevant Coursework: Tamil, English, Maths, Science, Social.'
          }
      ];
      
      const workExperienceData = [
        {
          company: 'Tailwinds',
          position: 'React JS Developer Intern',
          year: 'Nov 2023 - Dec 2024',
          details: 'Expert in React.js with a focus on UX and responsiveness using Bootstrap and CSS; implemented Keycloak and Okta for authentication; managed API integrations, Docker, VMs, and Azure deployment; followed Scrum methodology, collaborated on team projects, and added animations for better engagement.'
        },
        {
          company: 'Revature',
          position: 'Software Engineer Trainee',
          year: 'Jun 2023 - Aug 2023',
          details: 'Extensive React.js and Next.js expertise in optimization, authentication, CMS, GraphQL, agile API integration, CRUD operations, Vercel deployment.'
        },
        {
            company: 'Web Developers Community',
            position: 'Intern',
            year: 'Mar 2022 - May 2022',
            details: 'Developed scalable web applications and services. Contributed to open-source projects and led team initiatives.'
          }
      ];
    return(
      <Element name="section3">
        <section className="timeline-section" id="section3">
      <h2 className="section-title">Portfolio</h2>
      <div className="timeline-container">
        <div className="timeline-column education-column">
          <h3 className="column-title">Education</h3>
          {educationData.map((edu, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-icon"></div>
              <div className="timeline-content">
                <h3 className="institution">{edu.institution}</h3>
                <p className="degree">{edu.degree}</p>
                <p className="year">{edu.year}</p>
                <p className="Edetails">{edu.details}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="timeline-column work-column">
          <h3 className="column-title">Work Experience</h3>
          {workExperienceData.map((work, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-icon"></div>
              <div className="timeline-content">
                <h3 className="company">{work.company}</h3>
                <p className="position">{work.position}</p>
                <p className="year">{work.year}</p>
                <p className="details">{work.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <a href={`${process.env.PUBLIC_URL}/cv.pdf`} download="Fiza_Hussain_CV.pdf">
          <button class="btn">Download CV</button>
          </a>
    </section>
    </Element>
    )
}