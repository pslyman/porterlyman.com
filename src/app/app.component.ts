import { Component, OnInit } from "@angular/core";
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';

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
  tiles = [
    {
      id: 0,
      title: "Software Engineer",
      subTitle: "Health Catalyst",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      big: true,
      toggled: false,
    },
    {
      id: 1,
      title: "item2",
      subTitle: "",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      big: false,
      toggled: false,
    },
    {
      id: 2,
      title: "item3",
      subTitle: "",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      big: false,
      toggled: false,
    },
    {
      id: 3,
      title: "item4",
      subTitle: "",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      big: false,
      toggled: false,
    },
    {
      id: 4,
      title: "item5",
      subTitle: "",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      big: false,
      toggled: false,
    },
    {
      id: 5,
      title: "item6",
      subTitle: "",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      big: false,
      toggled: false,
    },
    {
      id: 6,
      title: "item7",
      subTitle: "",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      big: false,
      toggled: false,
    },
    {
      id: 7,
      title: "item8",
      subTitle: "",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      big: false,
      toggled: false,
    },
    {
      id: 8,
      title: "item9",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      big: false,
      toggled: false,
    },
  ];

  title = "Porter Lyman";

  ngOnInit() {}

  tileClick(tileId) {
    this.tiles[tileId].toggled = !this.tiles[tileId].toggled;
  }
}
