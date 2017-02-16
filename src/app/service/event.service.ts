import { Injectable, EventEmitter } from '@angular/core';

export class EventArgs {
    public name: string;
    public context: Object;
}

@Injectable()
export class EventService {
    public event: EventEmitter<EventArgs>;

    constructor() {
        this.event = new EventEmitter<EventArgs>();
    }

    public FireEvent(arg: EventArgs): void {
        console.log('Event fired: ' + JSON.stringify(arg));
        this.event.emit(arg);
    }
}
