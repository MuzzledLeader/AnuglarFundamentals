import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {
  EventThumbnailComponent,
  CreateEventComponent,
  EventDetailsComponent,
  EventService,
  EventsListComponent,
  CreateSessionComponent,
  SessionListComponent
} from "./events/index"
import { EventsAppComponent } from './events-app.component';
import { NavBarComponent } from './nav/navbar.components';
import { ToastrService } from './common/toastr.service';
import { RouterModule } from '@angular/router';
import { appRoutes } from '../routes';
import { AuthService } from "./user/auth.service"
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
      SessionListComponent
  ],
  providers: [
    EventService,
    ToastrService,
    AuthService
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
