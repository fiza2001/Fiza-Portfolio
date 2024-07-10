import { useState } from "react"
import { Element } from "react-scroll";

export default function Certificate(){
    const certificationsData = [
        {
          id: 1,
          name: 'Certification Name 1',
          imageUrl: "/images/cert-1.jpg",
          details: 'International Conference on Machines, Computing and Management Technologies - ICMCMT 2022.'
        },
        {
          id: 2,
          name: 'Certification Name 2',
          imageUrl: "images/cert-2.png",
          details: 'Web Development Internship.'
        },
          {
            id: 3,
            name: 'Certification Name 2',
            imageUrl: "images/cert-3.png",
            details: 'React Training Experience.'
          },
          {
            id: 4,
            name: 'Certification Name 2',
            imageUrl: "images/cert-4.png",
            details: 'React JS Internship.'
          },
          {
            id: 5,
            name: 'Certification Name 2',
            imageUrl: "images/cert-5.png",
            details: 'Completion Of Python Programming.'
          },
          {
            id: 6,
            name: 'Certification Name 2',
            imageUrl: "images/cert-6.png",
            details: 'Workshop on Artificial Intelligence using Graphical Programming Design.'
          },
          {
            id: 7,
            name: 'Certification Name 2',
            imageUrl: "images/cert-7.png",
            details: 'Workshop on HTML, CSS and Javascript.'
          },
      ];

      const [selectedCert, setSelectedCert] = useState(null);

  const handleImageClick = (certId) => {
    setSelectedCert(certId);
  };

  const handleResetSelectedCert = () => {
    setSelectedCert(null);
  };

    return(
        <Element name="section5">
          <section id="section5">
        <h1 style={{fontSize:'2.5vw'}}>Certificates</h1>
        <div className="certifications-container">
      {certificationsData.map((cert) => (
        <div
          key={cert.id}
          className={`certification-item ${selectedCert === cert.id ? 'selected' : ''}`}
          onClick={() => handleImageClick(cert.id)}
        >
          <div className="certification-inner">
            <div className="certification-front">
              <img src={cert.imageUrl} alt={cert.name} />
            </div>
            <div className="certification-back">
              <p>{cert.details}</p>
            </div>
          </div>
        </div>
      ))}
      {selectedCert && (
        <div className="zoomed-image-overlay" onClick={handleResetSelectedCert}>
          <img src={certificationsData.find(cert => cert.id === selectedCert).imageUrl} alt="Zoomed Certificate" />
        </div>
      )}
    </div>
    </section>
    </Element>
    )
}