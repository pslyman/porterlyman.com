import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { OpentrackfitchangelogComponent } from "./opentrackfitchangelog/opentrackfitchangelog.component";
import { ChangelogsComponent } from "./changelogs/changelogs.component";
import { PremiumchangelogComponent } from "./premiumchangelog/premiumchangelog.component";
import { FreechangelogComponent } from "./freechangelog/freechangelog.component";
import { HomeComponent } from "./home/home.component";

import { NgModule } from "@angular/core";

import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  { path: "hireMe", component: HomeComponent },
  { path: "aboutMe", component: HomeComponent },
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
      {
        path: "OpenTrackFit",
        component: OpentrackfitchangelogComponent,
      },
      {
        path: "**",
        redirectTo: "/pageNotFound",
        pathMatch: "full",
      },
      {
        path: "",
        redirectTo: "/pageNotFound",
        pathMatch: "full",
      },
    ],
  },
  { path: "", redirectTo: "/aboutMe", pathMatch: "full" },
  { path: "**", redirectTo: "/aboutMe", pathMatch: "full" },
  { path: "pageNotFound", component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
