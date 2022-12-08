import portfolioImgs from "./ImgsImport";
import React from "react";

class Details {
  // ************* the function are in the bottom
  ///****** img import is from  ImgsImport.js file*/

  NavBar = {
    pages: ["home", "my_work", "about", "contact"],
    toggleIcons: {
      Moon: portfolioImgs.themeIcons.Moon,
      Sun: portfolioImgs.themeIcons.Sun,
    },
  };

  home = {
    myPortrait: portfolioImgs.homePage.portrait,

    titles: [
      { title: "Front-End", dueDate: new Date("2022-11-01") },
      { title: "FullStack", dueDate: new Date("2023-03-01") },
    ],
    welcomeGreeting: (
      <>
        Hi, <br />
        I'm <span>Aviv Desta</span>
      </>
    ),

    welcomeTitle: "A [title] developer.",
    welcomeParagraph: <>passionate about creating interactive applications.</>,
    homeBtnText: "Nice to meet you too",
  };

  projects = {
    projectsHeader: <>My Work</>,
    // pic if project is under Maintenance
    projectInMaintenance: portfolioImgs.projectsPage.maintenance,
    projectsList: [
      {
        id: 1,
        name: "Coin Central",
        UnderMaintenance: false,
        link: "https://blksamori.github.io/coiner-central/",
        description: (
          <>
            A digital currency also known as Crypto Coins, website for tracking
            and and comparing Virtual coins prices.
          </>
        ),
        pics: portfolioImgs.projectsPage.CoinCentral,
        tools: ["JavaScript", "jQuery", "HTML5", "CSS3"],
      },
      {
        id: 2,
        name: "Feed Now",
        UnderMaintenance: false,
        link: "https://blksamori.github.io/feeds-now/",
        description: <>New from all over the world</>,
        pics: portfolioImgs.projectsPage.FeedsNow,
        tools: ["React", "JavaScript", "HTML5", "CSS3"],
      },
      {
        id: 3,
        name: "My Portfolio",
        UnderMaintenance: true,
        link: "https://blksamori.github.io/resumeBs/",
        description: (
          <>
            This Resume with 3 viewing Modes: <br /> Dark / Light / Print
          </>
        ),
        pics: portfolioImgs.projectsPage.Portfolio,
        tools: ["React", "JavaScript", "HTML5", "CSS3"],
      },
    ],
  };

  skills = {
    skillsHeader: <>Expertise</>,
    skillsList: [
      {
        id: 9,
        name: "PHP",
        pic: portfolioImgs.skills.PHP,
        dueDate: new Date("2023-03-01"),
      },
      {
        id: 8,
        name: "Angular",
        pic: portfolioImgs.skills.Angular,
        dueDate: new Date("2023-02-01"),
      },
      {
        id: 7,
        name: "Nodejs",
        pic: portfolioImgs.skills.Nodejs,
        dueDate: new Date("2022-12-01"),
      },
      {
        id: 6,
        name: "React",
        pic: portfolioImgs.skills.React,
        dueDate: new Date("2022-09-01"),
      },
      {
        id: 5,
        name: "TypeScript",
        pic: portfolioImgs.skills.TypeScript,
        dueDate: new Date("2022-10-01"),
      },
      {
        id: 4,
        name: "jQuery",
        pic: portfolioImgs.skills.jQuery,
        dueDate: new Date("2022-08-01"),
      },
      {
        id: 3,
        name: "JavaScript",
        pic: portfolioImgs.skills.JavaScript,
        dueDate: new Date("2022-09-01"),
      },
      {
        id: 2,
        name: "CSS3",
        pic: portfolioImgs.skills.CSS3,
        dueDate: new Date("2022-07-01"),
      },
      {
        id: 1,
        name: "HTML5",
        pic: portfolioImgs.skills.HTML5,
        dueDate: new Date("2022-06-01"),
      },
    ],
  };

  contact = {
    contactHeader: <>Let's Talk</>,
    contactList: [
      {
        id: 1,
        name: "Email",
        link: "mailto: aviv.desta@gmail.com",
        pic: portfolioImgs.contact.Email,
      },
      {
        id: 2,
        name: "LinkedIn",
        link: "https://il.in.com/in/aviv-desta-dev",
        pic: portfolioImgs.contact.LinkedIn,
      },
      {
        id: 3,
        name: "GitHub",
        link: "https://github.com/BLKsamori",
        pic: portfolioImgs.contact.GitHub,
      },
    ],
  };

  about = (
    <>
      I am a junior web developer with experience in web applications.
      <br /> I have a strong interest in web development and am always looking
      to improve my skills.
      <br /> I am a quick learner and have a good eye for detail. I am also a
      good team player and have a positive attitude.
    </>
  );

  // FUNCTIONS------------------------------------------------

  // items that in the past
  pastValidator(items) {
    // getting array of objects for every object need to br a dueDate: newDate("year-month-day")
    const pastItems = items.filter((item) => {
      const itemFullDate = item.dueDate;
      const itemYear = itemFullDate.getFullYear();
      const itemMonth = itemFullDate.getMonth();
      const itemDate = itemFullDate.getDate();

      const todaysFullDate = new Date();
      const todaysYear = todaysFullDate.getFullYear();
      const todaysMonth = todaysFullDate.getMonth();
      const todaysDate = todaysFullDate.getDate();

      // screening first the item that past
      if (
        todaysYear >= itemYear &&
        todaysMonth >= itemMonth &&
        todaysDate >= itemDate
      ) {
        return item;
      }
    });
    return pastItems;
  }

  // // Closes

  closesItem(pastItems) {
    // getting array of objects for every object need to br a dueDate: newDate("year-month-day")
    //first validating its in the past with the above func
    pastItems = this.pastValidator(pastItems);

    let closesItem = { title: "web", dueDate: new Date("2000-11-01") };

    for (const pastItem of pastItems) {
      const pastFullDate = pastItem.dueDate;
      const pastYear = pastFullDate.getFullYear();
      const pastMonth = pastFullDate.getMonth();
      const pastDate = pastFullDate.getDate();

      // screening the from the past the Closes date
      if (
        closesItem === null ||
        pastYear > closesItem.dueDate.getFullYear() ||
        (pastYear === closesItem.dueDate.getFullYear() &&
          pastMonth > closesItem.dueDate.getMonth()) ||
        (pastYear === closesItem.dueDate.getFullYear() &&
          pastMonth === closesItem.dueDate.getMonth() &&
          pastDate > closesItem.dueDate.getDate())
      ) {
        closesItem = pastItem;
      }
    }

    return closesItem;
  }
}

const portfolio = new Details();

export default portfolio;
