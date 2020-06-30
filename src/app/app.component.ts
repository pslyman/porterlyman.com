import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: `./app.component.html`,
  styleUrls: ["./app.component.scss"],
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
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
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
    console.log(tileId);
    this.tiles[tileId].toggled = !this.tiles[tileId].toggled;
    console.log(this.tiles[tileId].toggled);
  }
}
