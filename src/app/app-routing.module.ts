import { ChangelogsComponent } from "./changelogs/changelogs.component";
import { PremiumchangelogComponent } from "./premiumchangelog/premiumchangelog.component";
import { FreechangelogComponent } from "./freechangelog/freechangelog.component";
import { FrontComponent } from "./front/front.component";
import { HomeComponent } from "./home/home.component";

import { NgModule } from "@angular/core";

import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  { path: "hireMe", component: HomeComponent },
  { path: "aboutMe", component: FrontComponent },
  {
    path: "changelogs",
    component: ChangelogsComponent,
    children: [
      {
        path: "PizzaDoughCalculator",
        component: FreechangelogComponent,
      },
      {
        path: "PizzaDoughPremium",
        component: PremiumchangelogComponent,
      },
    ],
  },
  { path: "", redirectTo: "/aboutMe", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
