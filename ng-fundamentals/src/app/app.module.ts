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
import { EventsAppComponent } from './events-app.component';
import { NavBarComponent } from './nav/navbar.components';
import { RouterModule } from '@angular/router';
import {
  TOASTER_TOKEN,
  IToaster,
  JQ_TOKEN,
  CollapsibleWellComponent,
  SimpleModalComponent,
  ModalTriggerDirective
} from './common/index';
import { appRoutes } from '../routes';
import { AuthService } from "./user/auth.service"
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

let toastr:IToaster = window['toastr'];
let jQuery = window['$'];

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
    DurationPipe,
    SimpleModalComponent,
    ModalTriggerDirective
  ],
  providers: [
    EventService,
    { provide: TOASTER_TOKEN, useValue: toastr },
    { provide: JQ_TOKEN, useValue: jQuery },
    AuthService
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
