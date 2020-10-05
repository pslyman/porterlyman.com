import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FrontComponent } from './front/front.component';
import { FreechangelogComponent } from './freechangelog/freechangelog.component';
import { PremiumchangelogComponent } from './premiumchangelog/premiumchangelog.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FrontComponent,
    FreechangelogComponent,
    PremiumchangelogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
