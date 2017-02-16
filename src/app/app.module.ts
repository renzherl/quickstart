import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { HeroDetailComponent } from './hero/hero-detail.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [
    AppComponent,
    HeroComponent,
    HeroDetailComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
