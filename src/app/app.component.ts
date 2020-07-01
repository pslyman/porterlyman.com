import { Component, OnInit } from "@angular/core";
import {
  trigger,
  style,
  transition,
  animate,
  keyframes,
  query,
  stagger,
} from "@angular/animations";
import { interval as observableInterval } from "rxjs";
import { takeWhile, scan, tap } from "rxjs/operators";

@Component({
  selector: "app-root",
  templateUrl: `./app.component.html`,
  styleUrls: ["./app.component.scss"],
  animations: [
    // Trigger animation cards array
    trigger("cardAnimation", [
      // Transition from any state to any state
      transition("* => *", [
        // Initially the all cards are not visible
        query(":enter", style({ opacity: 0 }), { optional: true }),

        // Each card will appear sequentially with the delay of 300ms
        query(
          ":enter",
          stagger("30ms", [
            animate(
              ".5s ease-in",
              keyframes([
                style({ opacity: 0, transform: "translateY(-50%)", offset: 0 }),
                style({
                  opacity: 0.5,
                  transform: "translateY(-10px) scale(1.1)",
                  offset: 0.3,
                }),
                style({ opacity: 1, transform: "translateY(0)", offset: 1 }),
              ])
            ),
          ]),
          { optional: true }
        ),

        // Cards will disappear sequentially with the delay of 300ms
        query(
          ":leave",
          stagger("300ms", [
            animate(
              "500ms ease-out",
              keyframes([
                style({ opacity: 1, transform: "scale(1.1)", offset: 0 }),
                style({ opacity: 0.5, transform: "scale(.5)", offset: 0.3 }),
                style({ opacity: 0, transform: "scale(0)", offset: 1 }),
              ])
            ),
          ]),
          { optional: true }
        ),
      ]),
    ]),
  ],
})
export class AppComponent implements OnInit {
  title = "Porter Lyman";

  displaySwitcher = "experience";

  contact = [
    {
      id: 0,
      title: "LinkedIn",
      link: 'https://www.linkedin.com/in/porter-lyman-23059853/',
    },
    {
      id: 1,
      title: "Github",
      link: 'https://github.com/pslyman',
    },
    {
      id: 2,
      title: "Stack Overflow",
      link: 'https://stackoverflow.com/users/8659250/porter-lyman',
    },
    
  ]

  portfolio = [
    {
      id: 0,
      title: "Pizza Dough Premium",
      text:
        "Passion product, using 20 year-old formulas and bringing the well known app into your hands. With added premium features.",
      link: 'https://play.google.com/store/apps/details?id=pizza.dough.calculator.free',
      source: '../assets/pizza-icon.png'
    },
    {
      id: 1,
      title: "Pizza Dough Calculator",
      text:
        "Passion product, using 20 year-old formulas and bringing the well known app into your hands. The original version. ",
      link: 'https://play.google.com/store/apps/details?id=pizza.dough.calculator',
      source: '../assets/pizza-free.png'
    },
    {
      id: 2,
      title: "Github/pslyman",
      text:
        "Miscellenious contributions, side projects, and hobbies.",
      link: 'https://github.com/pslyman?tab=repositories',
      source: '../assets/github-icon.png'
    },
  ];

  skills = [
    "Angular",
    "Typescript",
    "Redux",
    "Vue",
    "CSS",
    "HTML",
    "Javascript",
    "jQuery",
    "C#",
    "Vue",
    "Bootstrap",
    "SQL",
    "MySQL",
    "SQL Server",
    "SQLAlchemy",
    "Fluent Migrator",
    "Docker",
    "Node.js",
    "Python",
    "Ruby",
    "Falcon framework",
    "Ionic",
    "Cordova",
    "Appium",
    "Selenium",
    "Protractor",
    "Cypress",
    "Karma",
    "Jasmine",
    "Mocha",
    ".NET Core",
    "TFS",
    "Jira",
    "ADO",
    "And more...",
  ];

  tiles = [
    {
      id: 0,
      title: "Software Engineer",
      subTitle: "Health Catalyst (2019 - Current)",
      text:
        "Returned to work on a small team to focus on a labor management / budgeting application with enterprise features. I work with front-end and back-end, and contribute to each test methodology. Technologies I use:",
      list: [
        "Angular",
        "Typescript",
        "SCSS",
        "Redux",
        "C#",
        ".NET Core / Entity",
        "SQL",
        "Cypress",
        "Fluent Migrator",
        "Jira",
        "ADO",
        "TFS",
        "and more...",
      ],
      big: true,
      toggled: false,
    },
    {
      id: 1,
      title: "Software Quality Assurance Engineer",
      subTitle: "Modere (September 2018 - 2019)",
      text:
        "Web, Security, and Mobile product testing across platforms and countries. Building mobile and web automations, manual testing, and doing preliminary security testing. Last stop for product approval and immersed in ticket tracking for all iterations. Tehcnologies I used:",
      list: ["Selenium", "Appium", "Protractor", "Javascript"],
      big: true,
      toggled: false,
    },
    {
      id: 2,
      title: "Software Developer (contracted)",
      subTitle: "H&K (March 2018 - August 2018)",
      text:
        "A consulting company creating tech solutions for clients. Worked with their data migration automations, and built a content and data management webapp (CMS). Technologies I used:",
      list: [
        "Vue",
        "Python",
        "Falcon (API)",
        "SQL",
        "Alchemy",
        "MySQL",
        "Docker",
      ],
      big: true,
      toggled: false,
    },
    {
      id: 3,
      title: "Front-End Developer (contracted)",
      subTitle: "The Stoke Group (December 2017 – January 2018)",
      text:
        "Freelance project for The Stoke Group, partnering with Micro Focus. Co-developed an estimated ROI calculator web app to draw interest from clients. Wrote web app from scratch (Angular) to fit their expectations.",
      list: [],
      big: false,
      toggled: false,
    },
    {
      id: 4,
      title: "QA / Software Engineer Intern",
      subTitle: "Health Catalyst (May 2017 – April 2018)",
      text:
        "Part of the QA team, specializing in Website Development Testing. Manual and Automated testing included. Found bugs, recommended improvements, and worked with developers and project manager to better the product in all ways possible. Wrote test case/scenarios, bug cases, and worked closely with team. Put heavy work into webdriver automations. Thoroughly enjoyed developing e2e and unit tests for their Angular app. I worked very closely with the following technologies:",
      list: [
        "Selenium",
        "C#",
        "Visual Studio test management",
        "Jasmine",
        "Karma",
        "TFS test planning and bug/task management",
      ],
      big: false,
      toggled: false,
    },
    {
      id: 5,
      title: "DevMountain",
      subTitle: "Student (Jan 2017 - Apr 2017))",
      text:
        "Full-stack (web) bootcamp. Interned with Health Catalyst immediately afterwards. The main emphasis was on the following:",
      list: ["Javascript", "CSS", "HTML", "Angular", "Git", "NodeJS"],
      big: false,
      toggled: false,
    },
  ];

  ngOnInit() {}

  tileClick(tileId) {
    this.tiles[tileId].toggled = !this.tiles[tileId].toggled;
  }

  openLinkUrl(url) {
    window.open(url, '_blank');
  }

  scrollToTop(el) {
    const duration = 200;
    const interval = 5;
    const move = (el.scrollTop * interval) / duration;
    observableInterval(interval)
      .pipe(
        scan((acc, curr) => acc - move, el.scrollTop),
        tap((position) => (el.scrollTop = position)),
        takeWhile((val) => val > 0)
      )
      .subscribe();
  }
}
