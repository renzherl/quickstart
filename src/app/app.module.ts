import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { HeroDetailComponent } from './hero/hero-detail.component';

import { CountdownComponent } from './countdown/countdown.component';
import { CountdownLocalVarParentComponent }  from './countdown/countdown-localvar-parent.component';
import { CountdownViewChildParentComponent } from './countdown/countdown-viewchild-parent.component';
import { CountdownTimerComponent } from './countdown/countdown-timer.component';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    HeroComponent,
    HeroDetailComponent,
    CountdownComponent,
    CountdownLocalVarParentComponent,
    CountdownViewChildParentComponent,
    CountdownTimerComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
