import MyPortrait from "../Assets/MyPics/my_Portrait_1.png";
import maintenance from "../Assets/projectsImgs/maintenance.png";
import CoinCentral_1 from "../Assets/projectsImgs/CoinCentral_1.png";
import MyPortfolio_1 from "../Assets/projectsImgs/MyPortfolio_1.png";
import Feeds_Now from "../Assets/projectsImgs/Feeds_Now.png";
import PHP from "../Assets/skillsImgs/PHP.png";
import Angular from "../Assets/skillsImgs/Angular.png";
import CSS3 from "../Assets/skillsImgs/CSS3.png";
import HTML5 from "../Assets/skillsImgs/HTML5.png";
import JavaScript from "../Assets/skillsImgs/JavaScript.png";
import TypeScript from "../Assets/skillsImgs/TypeScript.png";
import jQuery from "../Assets/skillsImgs/jQuery.png";
import Nodejs from "../Assets/skillsImgs/Nodejs.png";
import React from "../Assets/skillsImgs/React.png";
import Email from "../Assets/contactImgs/Email.png";
import LinkedIn from "../Assets/contactImgs/LinkedIn.png";
import GitHub from "../Assets/contactImgs/GitHub.png";
import Moon from "../Assets/ThemeIcons/Moon.png";
import Sun from "../Assets/ThemeIcons/Sun.png";

class ImgsImport {
  homePage = {
    portrait: { src: MyPortrait, alt: "My Portrait picture" },
  };

  themeIcons = {
    Moon: { src: Moon, alt: "Moon icon" },
    Sun: { src: Sun, alt: "Sun icon" },
  };

  projectsPage = {
    maintenance: [{ src: maintenance, alt: "under maintenance" }],
    CoinCentral: [{ src: CoinCentral_1, alt: "Coin Central - page 1" }],
    Portfolio: [{ src: MyPortfolio_1, alt: "My Portfolio - page 1" }],
    FeedsNow: [{ src: Feeds_Now, alt: "Feeds Now - page 1" }],
  };

  skills = {
    PHP: { src: PHP, alt: "PHP logo" },
    Angular: { src: Angular, alt: "Angular logo" },
    Nodejs: { src: Nodejs, alt: "Nodejs logo" },
    React: { src: React, alt: "React logo" },
    JavaScript: { src: JavaScript, alt: "JavaScript logo" },
    TypeScript: { src: TypeScript, alt: "TypeScript logo" },
    jQuery: { src: jQuery, alt: "jQuery logo" },
    CSS3: { src: CSS3, alt: "CSS3 logo" },
    HTML5: { src: HTML5, alt: "HTML5 logo" },
  };

  contact = {
    Email: { src: Email, alt: "Email logo" },
    LinkedIn: { src: LinkedIn, alt: "LinkedIn logo" },
    GitHub: { src: GitHub, alt: "GitHub logo" },
  };
}

const portfolioImgs = new ImgsImport();

export default portfolioImgs;
