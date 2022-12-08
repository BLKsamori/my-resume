import "./Contact.css";
import BgD from "../../Components/Bgs/BgD/BgD";
import { useContext } from "react";
import PortfolioContext from "../../Contexts/PortfolioContext/PortfolioContext";
import React from "react";

function Contact() {
  const contact = useContext(PortfolioContext).contact;

  return (
    <div className="Contact" id="contact">
      <BgD />
      <h2>
        <p>{contact.contactHeader}</p>
      </h2>

      <ul className="contactList">
        {contact.contactList.map((contactObj) => (
          <li key={contactObj.id}>
            <a href={contactObj.link} target="_blank">
              {contactObj.name}
              <img {...contactObj.pic} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Contact;
