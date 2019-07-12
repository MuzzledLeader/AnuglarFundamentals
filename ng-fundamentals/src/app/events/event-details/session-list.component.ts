import { Component, Input, OnChanges, SimpleChanges } from '@angular/core'
import { ISession } from '../index'
import { AuthService } from "../../user/auth.service";
import { VoterService } from "./voter.service";

@Component({
  selector: 'session-list',
  templateUrl: './session-list.component.html'
})
export class SessionListComponent implements OnChanges {
  @Input() sessions: ISession[];
  @Input() filterBy: string;
  @Input() sortBy: string;
  @Input() eventId: number;

  visibleSessions: ISession[];

  constructor(
    private authService: AuthService,
    private voterService: VoterService) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.sessions) {
      this.filterSessions(this.filterBy);
      if (this.sortBy === 'name') {
        this.visibleSessions.sort((s1, s2) => s1.name < s2.name ? -1 : (s1.name > s2.name ? 1 : 0));
      }
      else {
        this.visibleSessions.sort((s1, s2) => (s2.voters == null ? 0 : s2.voters.length) - (s1.voters == null ? 0 : s1.voters.length));
      };
    }
  }

  toggleVote(session: ISession) {
    if (this.userHasVoted(session)) {
      this.voterService.deleteVoter(this.eventId, session, this.authService.currentUser.username);
    } else {
      this.voterService.addVoter(this.eventId, session, this.authService.currentUser.username);
    }

    // TODO :(
    //if (this.sortBy === 'votes') {
    //  this.visibleSessions.sort(sortByVotesDesc);
    //}
  }

  userHasVoted(session) {
    return session.voters.some(voter => voter === this.authService.currentUser.username);
  }

  filterSessions(filterBy: string) {
    if (filterBy === 'all') {
      this.visibleSessions = this.sessions.slice(0);
    } else {
      this.visibleSessions = this.sessions.filter(s => s.level.toLocaleLowerCase() === filterBy);
    }
  }
}
