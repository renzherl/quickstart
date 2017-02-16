import { Component, OnDestroy, OnInit } from '@angular/core';


@Component({
    moduleId: module.id,
    selector: 'countdown',
    templateUrl: 'countdown.component.html'
})
export class CountdownComponent implements OnInit, OnDestroy {
    intervalId = 0;
    bActivateDisplay = false;
    seconds = 59;

    constructor() {
        console.log('Parent constructor');
    }

    ngOnInit() {
        console.log('Parent ngOnInit');
        this.clearTimer();
        this.intervalId = window.setInterval(() => {
            this.seconds -= 1;
            if (this.seconds === 45) {
                this.bActivateDisplay = true;
            }
            if (this.seconds < 0) {
                this.seconds = 59;
            } // reset
        }, 1000);
    }

    ngOnDestroy() {
        this.clearTimer();
        console.log('Parent ngOnDestroy');
    }

    private clearTimer() {
        clearInterval(this.intervalId);
    }

}
