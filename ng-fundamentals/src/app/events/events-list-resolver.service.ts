import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { EventService } from "./shared/event.service";
import { map } from "rxjs/operators"

@Injectable()
export class EventListResolver implements Resolve<any> {
  constructor(private eventService: EventService) {
  }

  resolve() {
    // Resolvers subscribe so don't worry about doing this.
    return this.eventService.getEvents();
  }
}
