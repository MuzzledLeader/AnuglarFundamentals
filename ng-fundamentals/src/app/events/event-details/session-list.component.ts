import { Component, Input, OnChanges, SimpleChanges } from '@angular/core'
import { ISession } from '../index'

@Component({
  selector: 'session-list',
  templateUrl: './session-list.component.html'
})
export class SessionListComponent implements OnChanges {
  @Input() sessions: ISession[];
  @Input() filterBy: string;
  @Input() sortBy: string;

  visibleSessions: ISession[];

  ngOnChanges(changes: SimpleChanges): void {
    if (this.sessions) {
      this.filterSessions(this.filterBy);
      if (this.sortBy === 'name') {
        this.visibleSessions.sort((s1, s2) => s1.name < s2.name ? -1 : (s1.name > s2.name ? 1 : 0));
      }
      else {
        this.visibleSessions.sort((s1, s2) => s2.voters.length - s1.voters.length);
      };
    }
  }

  filterSessions(filterBy: string) {
    if (filterBy === 'all') {
      this.visibleSessions = this.sessions.slice(0);
    } else {
      this.visibleSessions = this.sessions.filter(s => s.level.toLocaleLowerCase() === filterBy);
    }
  }
}
