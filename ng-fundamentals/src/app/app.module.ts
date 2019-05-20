import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {
  EventThumbnailComponent,
  CreateEventComponent,
  EventDetailsComponent,
  EventService,
  EventsListComponent
} from "./events/index"
import { EventsAppComponent } from './events-app.component';
import { NavBarComponent } from './nav/navbar.components';
import { ToastrService } from './common/toastr.service';
import { RouterModule } from '@angular/router';
import { appRoutes } from '../routes';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
      EventsAppComponent,
      EventsListComponent,
      EventThumbnailComponent,
      NavBarComponent,
      EventDetailsComponent,
      CreateEventComponent
  ],
  providers: [
    EventService,
    ToastrService
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
