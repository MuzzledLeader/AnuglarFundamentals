import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {
  EventThumbnailComponent,
  CreateEventComponent,
  EventDetailsComponent,
  EventService,
  EventsListComponent,
  CreateSessionComponent,
  SessionListComponent,
  DurationPipe
} from "./events/index"
import {
  CollapsibleWellComponent
} from './common/index';
import { EventsAppComponent } from './events-app.component';
import { NavBarComponent } from './nav/navbar.components';
import { RouterModule } from '@angular/router';
import { TOASTER_TOKEN, IToaster } from './common/toastr.service';
import { appRoutes } from '../routes';
import { AuthService } from "./user/auth.service"
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

declare let toastr: IToaster;

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    DurationPipe
  ],
  providers: [
    EventService,
    { provide: TOASTER_TOKEN, useValue: toastr },
    AuthService
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
