import { Component } from '@angular/core'
import { EventService } from '../shared/event.service';
import { ActivatedRoute, Params } from '@angular/router';
import { ISession } from '../index'
import { IEvent } from "../shared/event.model";

@Component({
  templateUrl: 'event-details.component.html',
  styles: [`
    .container { padding-left: 20px; padding-right: 20px; }
    .event-image { height: 100px; }
    a { cursor: pointer; }
  `]
})

export class EventDetailsComponent {
  addMode: boolean;
 
  event: any;

  filterBy: string = 'all';
  sortBy: string = 'votes';

  constructor(
    private eventService:EventService,
    private route:ActivatedRoute) {
  }

  ngOnInit() {
    // This now will subscribe to route parameters to dynamically change route
    // on the same page as oppose to using the initial snapshot.
    this.route.data.forEach((data) => {
      // Using the event service
      //this.eventService.getEvent(+params['id']).subscribe((event: IEvent) => {
      //  this.event = event;

      //  // Reset state
      //  this.addMode = false;
      //});

      // Using the resolver
      this.event = data['event'];
      this.addMode = false;
    });
  }

  addSession() {
    this.addMode = true;
  }

  saveNewSession(session: ISession) {
    const nextId = Math.max.apply(0, this.event.sessions.map(s => s.id));

    session.id = nextId + 1;
    this.event.sessions.push(session);
    this.eventService.saveEvent(this.event).subscribe();
    this.addMode = false;
  }

  cancelAddSession() {
    this.addMode = false;
  }
}
