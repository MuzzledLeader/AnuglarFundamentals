import { Component } from '@angular/core'

@Component({
  selector: 'events-list',
  template: `
<div>
    <h1>Upcoming Angular Events</h1>
    <hr />
    <event-thumbnail (eventClick)="handleEventClicked($event)" [event]="event1"></event-thumbnail>
  </div>
`
})

export class EventsListComponent {
  event1 = {
    id: 1,
    name: 'Stratec Footie',
    date: '9/25/2018',
    time: '10:00 am',
    price: 99.98,
    imageUrl: '/assets/images/angularconnect-shield.png',
    location: {
      address: 'The green',
      city: 'BOT',
      country: 'England'
    }
  }

  handleEventClicked(event) {
    console.log(event);
  }
}
