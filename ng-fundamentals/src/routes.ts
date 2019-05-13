import { Routes } from '@angular/router';

import { EventsListComponent } from "./app/events/events-list.component";
import { EventDetailsComponent } from "./app/events/event-details/event-details.component";
import { CreateEventComponent } from './app/events/create-event.component';

export const appRoutes:Routes = [
  { path: 'events', component: EventsListComponent },
  { path: 'events/new', component: CreateEventComponent },
  { path: 'events/:id', component: EventDetailsComponent },
  { path: '', redirectTo: '/events', pathMatch: 'full' }
];
