import { Component, OnInit } from "@angular/core";
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';
import { interval as observableInterval } from "rxjs";
import { takeWhile, scan, tap } from "rxjs/operators";

@Component({
  selector: "app-root",
  templateUrl: `./app.component.html`,
  styleUrls: ["./app.component.scss"],
  animations: [

    // Trigger animation cards array
    trigger('cardAnimation', [
      // Transition from any state to any state
      transition('* => *', [
        // Initially the all cards are not visible
        query(':enter', style({ opacity: 0 }), { optional: true }),

        // Each card will appear sequentially with the delay of 300ms
        query(':enter', stagger('30ms', [
          animate('.5s ease-in', keyframes([
            style({ opacity: 0, transform: 'translateY(-50%)', offset: 0 }),
            style({ opacity: .5, transform: 'translateY(-10px) scale(1.1)', offset: 0.3 }),
            style({ opacity: 1, transform: 'translateY(0)', offset: 1 }),
          ]))]), { optional: true }),

        // Cards will disappear sequentially with the delay of 300ms
        query(':leave', stagger('300ms', [
          animate('500ms ease-out', keyframes([
            style({ opacity: 1, transform: 'scale(1.1)', offset: 0 }),
            style({ opacity: .5, transform: 'scale(.5)', offset: 0.3 }),
            style({ opacity: 0, transform: 'scale(0)', offset: 1 }),
          ]))]), { optional: true })
      ]),
    ]),
  ]
})

export class AppComponent implements OnInit {
  title = "Porter Lyman";

  tiles = [
    {
      id: 0,
      title: "Software Engineer",
      subTitle: "Health Catalyst (2019 - Current)",
      text: "Returned to work on a small team to focus on a labor management / budgeting application with enterprise features. I work with front-end and back-end, and contribute to each test methodology. Technologies I use:",
      list: ['Angular', 'Typescript', 'SCSS', 'Redux', 'C#', '.NET / Entity', 'SQL', 'Cypress', 'Fluent Migrator', 'Jira', 'ADO', 'TFS', 'and more...'],
      big: true,
      toggled: false,
    },
    {
      id: 1,
      title: "Software Quality Assurance Engineer",
      subTitle: "Modere (September 2018 - 2019)",
      text: "Web, Security, and Mobile product testing across platforms and countries. Building mobile and web automations, manual testing, and doing preliminary security testing. Last stop for product approval and immersed in ticket tracking for all iterations. Tehcnologies I used:",
      list: ['Selenium', 'Appium', 'Protractor', 'Javascript'],
      big: true,
      toggled: false,
    },
    {
      id: 2,
      title: "Software Developer (contractor)",
      subTitle: "H&K (March 2018 - August 2018)",
      text: "A consulting company creating tech solutions for clients. Worked with their data migration automations, and built a content and data management webapp (CMS). Technologies I used:",
      list: ['Vue', 'Python', 'Falcon (API)', 'SQL', 'Alchemy',  'MySQL', 'Docker'],
      big: true,
      toggled: false,
    },
    {
      id: 3,
      title: "item4",
      subTitle: "",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      list: [],
      big: false,
      toggled: false,
    },
    {
      id: 4,
      title: "item5",
      subTitle: "",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      list: [],
      big: false,
      toggled: false,
    },
    {
      id: 5,
      title: "item6",
      subTitle: "",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      list: [],
      big: false,
      toggled: false,
    },
    {
      id: 6,
      title: "item7",
      subTitle: "",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      list: [],
      big: false,
      toggled: false,
    },
    {
      id: 7,
      title: "item8",
      subTitle: "",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      list: [],
      big: false,
      toggled: false,
    },
    {
      id: 8,
      title: "item9",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      list: [],
      big: false,
      toggled: false,
    },
  ];



  ngOnInit() {}

  tileClick(tileId) {
    this.tiles[tileId].toggled = !this.tiles[tileId].toggled;
  }

  scrollToTop(el) {
    console.log('scroll')
    const duration = 200;
    const interval = 5;
    const move = el.scrollTop * interval / duration;
    observableInterval(interval).pipe(
      scan((acc, curr) => acc - move, el.scrollTop),
      tap(position => el.scrollTop = position),
      takeWhile(val => val > 0)).subscribe();
  }
}

