import { AfterViewInit, ViewChild } from '@angular/core';
import { Component } from '@angular/core';
import { CountdownTimerComponent } from './countdown-timer.component';

//// View Child version
///If we put bActivateDisplay false, then view child will not work, 
///because child is not counstruct yet.

@Component({
    moduleId: module.id,
    selector: 'countdown-parent-vc',
    template: `
  <h3>Countdown to Liftoff (via ViewChild)</h3>
  <button (click)="start()">Start</button>
  <button (click)="stop()">Stop</button>
  <button (click)="show()">Show</button>
  <div class="seconds">{{ seconds() }}</div>
  <countdown-timer #timer *ngIf="bActivateDisplay"></countdown-timer>
  `,
    styleUrls: ['countdown.css']
})
export class CountdownViewChildParentComponent implements AfterViewInit {

    @ViewChild(CountdownTimerComponent)
    private timerComponent: CountdownTimerComponent;
    //bActivateDisplay = false;
    bActivateDisplay = true;

    seconds() { return 0; }

    ngAfterViewInit() {
        // Redefine `seconds()` to get from the `CountdownTimerComponent.seconds` ...
        // but wait a tick first to avoid one-time devMode
        // unidirectional-data-flow-violation error
        setTimeout(() => this.seconds = () => this.timerComponent.seconds, 0);
    }

    start() {
        this.timerComponent.start();
    }
    stop() {
        this.timerComponent.stop();
    }
    show() {
        this.bActivateDisplay = true;
    }
}
