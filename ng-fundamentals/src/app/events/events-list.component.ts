import { Component, OnInit } from '@angular/core'
import { EventService } from './shared/event.service';
import { ToastrService } from '../common/toastr.service';
import { IEvent } from "./index";

@Component({
  template: `
<div>
    <h1>Upcoming Angular Events</h1>
    <hr />
    <div class="row">
      <div *ngFor="let event of events" class="col-md-5">
        <event-thumbnail (click)="handleThumbnailClick(event.name)" [event]="event"></event-thumbnail>
      </div>
    </div>
  </div>
`
})
export class EventsListComponent implements OnInit {
  events: IEvent[];
  
  constructor(
    private eventService: EventService,
    private toastrService: ToastrService) {
  }

  ngOnInit() {
    this.eventService.getEvents().subscribe(events => {
      this.events = events;
    });
  }

  handleEventClicked(event) {
    console.log(event);
  }

  handleThumbnailClick(eventName) {
    this.toastrService.success(eventName);
  }
}
