import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
    selector: 'countdown-timer',
    template: '<p>{{message}}</p>'
})
export class CountdownTimerComponent implements OnInit, OnDestroy {

    intervalId = 0;
    message = '';
    seconds = 11;

    constructor() {
        console.log('Child constructor');
    }

    ngOnInit() {
        //this.start();
        console.log('Child ngOnInit');
    }

    ngOnDestroy() {
        this.clearTimer();
        console.log('Child ngOnDestroy');
    }

    start() {
        this.countDown();
        console.log('Child start');
    }

    stop() {
        this.clearTimer();
        this.message = `Holding at T-${this.seconds} seconds`;
        console.log('Child stop');
    }

    private clearTimer() {
        clearInterval(this.intervalId);
    }

    private countDown() {
        this.clearTimer();
        this.intervalId = window.setInterval(() => {
            this.seconds -= 1;
            if (this.seconds === 0) {
                this.message = 'Blast off!';
            } else {
                if (this.seconds < 0) { this.seconds = 10; } // reset
                this.message = `T-${this.seconds} seconds and counting`;
            }
        }, 1000);
    }
}
