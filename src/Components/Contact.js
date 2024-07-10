import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Element } from "react-scroll";
import { MdLocationOn } from "react-icons/md";
import { FaEnvelope, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [mailMsg, setMailMsg] = useState(false);
  const [mailError, setMailError] = useState(false);

  function handleForm(e) {
    e.preventDefault();
    if (name === "" || email === "" || message === "") {
      return setMailError(true);
    }

    const serviceId = process.env.REACT_APP_SERVICEID;
    const templateId = process.env.REACT_APP_TEMPLATEID;
    const publicKey = process.env.REACT_APP_PUBLICKEY;

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Fiza Hussain",
      message: message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, { publicKey: publicKey })
      .then((response) => {
        setMailMsg(true);
        setMailError(false);
        setTimeout(() => setMailMsg(false), 10000);
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => alert("Error sending Message"));
  }
  return (
    <Element name="section7">
      <section className="contact-main" id="section7">
        <div>
          <p style={{ color: "white" }}>
            <span id="touch">Let's Connect!</span>
            <br />
            Feel free to contact me anytime.
          </p>
          <br />
          <p style={{ color: "white" }}>
            Mail me @
            <br />
            <a
              href="https://mail.google.com/mail/u/0/#inbox?compose=new"
              target="new"
              id="mail"
            >
              fiza16hussain@gmail.com
            </a>
          </p>
          <p style={{ color: "white" }}>
            <span>
              <MdLocationOn /> Location
            </span>
            <br />
            Chennai, India
          </p>
          <br />
          <p style={{ color: "white" }}>FOLLOW ME</p>
          <div>
            <a href="https://www.instagram.com">
              <FaInstagram
                style={{ marginRight: "1vw" }}
                size={25}
                color="white"
              />
            </a>
            <a href="https://github.com/fiza2001">
              <FaGithub
                style={{ marginRight: "1vw" }}
                size={25}
                color="white"
              />
            </a>
            <a href="https://www.linkedin.com/in/fiza-hussain-327262232/">
              <FaLinkedin
                style={{ marginRight: "1vw" }}
                size={25}
                color="white"
              />
            </a>
            <a href="https://mail.google.com">
              <FaEnvelope
                style={{ marginRight: "1vw" }}
                size={25}
                color="white"
              />
            </a>
          </div>
        </div>
        <div>
          <form onSubmit={handleForm}>
            <div class="ring">
              <i style={{ "--clr": "#d7b94c" }}></i>
              <i style={{ "--clr": "#d7b94c" }}></i>
              <i style={{ "--clr": "#d7b94c" }}></i>
              <div class="login">
                {mailError ? (
                  <span id="tq-msg">The Fields cannot be empty.</span>
                ) : null}
                {mailMsg ? (
                  <span id="tq-msg">
                    Thank you for your Message. I will get back to you soon.
                  </span>
                ) : null}
                <div class="inputBx">
                  <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div class="inputBx">
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div class="inputBx">
                  <textarea
                    className="inp2"
                    rows="10"
                    placeholder="Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                </div>
                <div class="inputBx">
                  <input type="submit" value="Submit" />
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </Element>
  );
}
