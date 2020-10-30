import {
  Component,
  OnInit,
  HostListener,
  AfterContentInit,
} from "@angular/core";
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
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: `./front.component.html`,
  styleUrls: ["./front.component.scss"],
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
          stagger("45ms", [
            animate(
              ".5s ease-in",
              keyframes([
                style({
                  opacity: 0,
                  transform: "translateY(-10px) scale(1.05)",
                  offset: 0,
                }),
                style({
                  opacity: 0.5,
                  transform: "translateY(-5px) scale(1)",
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
          stagger("6ms", [
            animate(
              "350ms ease-out",
              keyframes([
                style({ opacity: 1, transform: "translateY(0px)", offset: 0 }),
                style({
                  opacity: 0.5,
                  transform: "translateY(5px)",
                  offset: 0.3,
                }),
                style({
                  opacity: 0,
                  transform: "translateY(10px) scale(.995)",
                  offset: 1,
                }),
              ])
            ),
          ]),
          { optional: true }
        ),
      ]),
    ]),
  ],
})
export class FrontComponent implements OnInit, AfterContentInit {
  constructor(private router: Router, private route: ActivatedRoute) {}

  p: string;
  i: number;

  title = "Porter Lyman";

  nameOfRoute = "aboutMe";

  displaySwitcher = "portfolio";

  contact = [
    {
      id: 0,
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/porter-lyman-23059853/",
    },
    {
      id: 1,
      title: "Github",
      link: "https://github.com/pslyman",
    },
    {
      id: 2,
      title: "Stack Overflow",
      link: "https://stackoverflow.com/users/8659250/porter-lyman",
    },
  ];

  portfolio = [
    {
      id: 0,
      title: "Pizza Dough Calculator",
      text:
        "Passion product, using 20 year-old formulas and bringing the well known app into your hands. The original version. ",
      link:
        "https://play.google.com/store/apps/details?id=pizza.dough.calculator",
      source: "../assets/pizza-free.png",
    },
    {
      id: 1,
      title: "Pizza Dough Premium",
      text:
        "Same full-featured product as above, but with added premium features for the extra dedicated pizza chefs.",
      link:
        "https://play.google.com/store/apps/details?id=pizza.dough.calculator.free",
      source: "../assets/pizza-icon.png",
    },
    {
      id: 2,
      title: "St. George Embossing",
      text:
        "Made in partnership with the owner (and good friend) of St. George Embossing as a front for his business.",
      link: "http://www.stgembossing.com",
      source: "../assets/embossing-stg.png",
    },
    {
      id: 3,
      title: "OpenTrackFit",
      text:
        "Open Source app project for workout tracking. Includes in-app timers, prioritization, and other useful features for tracking.",
      link: "https://github.com/pslyman/OpenTrackFit",
      source: "../assets/opentrackfit-icon.png",
    },
    {
      id: 4,
      title: "porterlyman.com",
      text: "This tasty snack right here.",
      link: "",
      source: "../assets/pl-icon.png",
    },
    {
      id: 5,
      title: "clean-card",
      text:
        "Open source version of this site with a setup and hosting guide, including buying/setting up a domain, hosting, and email aliasing. Powered by Angular and Heroku.",
      link: "https://github.com/pslyman/clean-card",
      source: "../assets/clean-cards-icon.png",
    },

    {
      id: 6,
      title: "Github/pslyman",
      text: "Miscellenious contributions, side projects, and hobbies.",
      link: "https://github.com/pslyman?tab=repositories",
      source: "../assets/github-icon.png",
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

  aboutme = [
    {
      content: "Thanks for dropping by! ",
    },
    {
      content:
        "I'm Porter. I've been in the realm of software engineering for a few years now. I'm familiar with front-end, back-end, and test methodologies. ",
    },
  ];

  ngOnInit() {
    this.p = this.route.snapshot.queryParamMap.get("p");

    if (this.route.snapshot.queryParamMap.get("p")) {
      this.displaySwitcher = this.p;
    } else {
      this.displaySwitcher = "portfolio";
      this.router.navigate([`/${this.nameOfRoute}`], {
        queryParams: { p: this.displaySwitcher },
      });
    }

    this.route.queryParams.subscribe((params) => {
      this.p = params.p;

      this.i = params.i;
    });
  }

  ngAfterContentInit(): void {}
  updateUrl() {
    this.router.navigate([`/${this.nameOfRoute}`], {
      queryParams: { p: this.displaySwitcher },
    });
  }

  stopPropagation(e) {
    e.stopPropagation();
  }

  openLinkUrl(url) {
    if (url) {
      window.open(url, "_blank");
    }
  }

  jumpToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
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
