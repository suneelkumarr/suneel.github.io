import emoji from 'react-easy-emoji';

const illustration={
    animated:true  //SET FALSE TO STATIC SVG
}

const greeting={
    username:"Suneel Kumar",
    title:"Hi all i'm Suneel",
    subTitle: emoji(
        "A passionate Full Stack Software Developer 🚀 having an experience of designing and building Web and Mobile applications with JavaScript / Reactjs / Nodejs and some other cool libraries and frameworks."
      ),
      resumeLink:
        "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing",
      displayGreeting: true // Set false to hide this section, defaults to true

}

// Social Media Links


const social={
    github: "https://github.com/suneel05644",
  // linkedin: "https://www.linkedin.com/in/",
  gmail: "techsuneel99@gmail.com",
  // gitlab: "https://gitlab.com/",
  // facebook: "https://www.facebook.com/",
  medium: "https://medium.com/@davidrakosi",
  stackoverflow: "https://stackoverflow.com/users/13263979/drakosi",
  instagram: 'https://www.instagram.com/davidrakosi/',
  twitter: 'https://twitter.com/davidrakosi_',
  display: true // Set true to display this section, defaults to false
}


// Skills Section

const skillsSection = {
    title: "What I do",
    subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
    skills: [
      emoji(
        "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
      ),
      emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
      emoji(
        "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
      )
    ],
  
    /* Make Sure to include correct Font Awesome Classname to view your icon
  https://fontawesome.com/icons?d=gallery */
  
    softwareSkills: [
      {
        skillName: "html-5",
        fontAwesomeClassname: "fab fa-html5",
      },
      {
        skillName: "css3",
        fontAwesomeClassname: "fab fa-css3-alt"
      },
      {
        skillName: "sass",
        fontAwesomeClassname: "fab fa-sass"
      },
      {
        skillName: "JavaScript",
        fontAwesomeClassname: "fab fa-js"
      },
      {
        skillName: "reactjs",
        fontAwesomeClassname: "fab fa-react"
      },
      {
        skillName: "nodejs",
        fontAwesomeClassname: "fab fa-node"
      },
      {
        skillName: "mongodb",
        fontAwesomeClassname: "fas fa-database"
      },
      {
        skillName: "npm",
        fontAwesomeClassname: "fab fa-npm"
      },
      {
        skillName: "sql-database",
        fontAwesomeClassname: "fas fa-database"
      },
      {
        skillName: "firebase",
        fontAwesomeClassname: "fas fa-fire"
      }
    ],
    display: true // Set false to hide this section, defaults to true
  };


  // Education Section

const educationInfo = {
    display: false, // Set false to hide this section, defaults to true
    schools: [
      {
        schoolName: "BSVP Sr Sec School",
        logo: require("./assets/images/harvardLogo.png"),
        subHeader: "Complete 10th and 12th",
        duration: "augest 2013 - may 2015",
        desc: "Participated in the research of XXX and published 3 papers.",
        descBullets: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        ]
      },
      {
        schoolName: "Rajasthan Technical University, Kota",
        logo: require("./assets/images/stanfordLogo.png"),
        subHeader: "Bachelor of Technology in Computer Science",
        duration: "Augest 2016 - November 2020",
        desc:
          "Complete my graducation with honors",
        descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
      }
    ]
  };


  // Your top 3 proficient stacks/tech experience

const techStack = {
    viewSkillBars: true, //Set it to true to show Proficiency Section
    experience: [
      {
        Stack: "Frontend / Design", //Insert stack or technology you have experience in
        progressPercentage: "90%" //Insert relative proficiency in percentage
      },
      {
        Stack: "Backend",
        progressPercentage: "70%"
      },
      {
        Stack: "Programming",
        progressPercentage: "90%"
      }
    ],
    displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
  };
  

  // Work experience section

const workExperiences = {
    display: true, //Set it to true to show workExperiences Section
    experience: [
      {
        role: "React Js Developer",
        company: "Latitude technolabs",
        companylogo: require("./assets/images/cpLogo.png"),
        date: "feb 2021 – june 2021",
        desc:
          "Changing lives of developers one line of code at a time.",
        descBullets: [
          "Custom building applications",
          "Fix the bug",
          "Develop some new fetutre ",
          "Changes the some codes "
        ]
      },
      {
        role: "Node Developer",
        company: "Monet Analytics",
        companylogo: require("./assets/images/mo.png"),
        date: "July 2021 – present",
        desc:
          "Backend developer "
      },
    ]
  };
  

  const openSource = {
    githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
    githubUserName: "suneel05644", // Change to your github username to view your profile in Contact Section.
    showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
    display: false // Set false to hide this section, defaults to true
  };
  
  // Some big projects you have worked on
  
  const bigProjects = {
    title: "Big Projects",
    subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
    projects: [
      {
        image: require("./assets/images/saayaHealthLogo.webp"),
        projectName: "Saayahealth",
        projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        footerLink: [
          {
            name: "Visit Website",
            url: "fa"
          }
          //  you can add extra buttons here.
        ]
      },
    ],
    display: false // Set false to hide this section, defaults to true
  };
  
  // Achievement Section
  // Include certificates, talks etc
  
  const achievementSection = {
    title: emoji("Achievements And Certifications 🏆 "),
    subtitle:
      "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",
  
    achievementsCards: [
      {
        title: "Data Science Foundation",
        subtitle:
          "",
        image: require("./assets/images/googleAssistantLogo.webp"),
      },
  
      {
        title: "MERN Stack Developer",
        subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
        image: require("./assets/images/pwaLogo.webp"),
      }
    ],
    display: false // Set false to hide this section, defaults to true
  };
  
  // Blogs Section
  
//   const blogSection = {
//     title: "Blogs",
//     subtitle:
//       "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  
//     blogs: [
//       {
//         url:
//           "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
//         title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
//         description:
//           "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
//       },
//       {
//         url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
//         title: "Why REACT is The Best?",
//         description:
//           "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
//       }
//     ],
//     display: true // Set false to hide this section, defaults to true
//   };
  
  // Talks Sections
  
  const talkSection = {
    title: "TALKS",
    subtitle: emoji(
      ""
    ),
  
    talks: [
      {
        title: "",
        subtitle: "",
        slides_url: "",
        event_url: ""
      }
    ],
    display: false // Set false to hide this section, defaults to true
  };
  
  // Podcast Section
  
  const podcastSection = {
    title: emoji("Podcast 🎙️"),
    subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",
  
    // Please Provide with Your Podcast embeded Link
    podcast: [
      ""
    ],
    display: false // Set false to hide this section, defaults to true
  };
  
  const contactInfo = {
    title: emoji("Contact Me ☎️"),
    subtitle:
      "Discuss a project or just want to say hi? My Inbox is open for all.",
    number: "(+91) 6377816221",
    email_address: "techsuneel@gmail.com"
  };
  
  // Twitter Section
  
  const twitterDetails = {
    userName: "SunilKu05644", //Replace "twitter" with your twitter username without @
    display: true // Set true to display this section, defaults to false
  };
  
  export {
    illustration,
    greeting,
    social,
    skillsSection,
    educationInfo,
    techStack,
    workExperiences,
    openSource,
    bigProjects,
    achievementSection,
    // blogSection,
    talkSection,
    podcastSection,
    contactInfo,
    twitterDetails
  };