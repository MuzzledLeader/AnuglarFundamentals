import { Injectable } from '@angular/core';
import { ISession } from '../shared/event.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable()
export class VoterService {
  private defaultHttpOptions: any;

  constructor(private http: HttpClient) {
    this.defaultHttpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
  }

  deleteVoter(eventId: number, session: ISession, voterName: string) {
    session.voters = session.voters.filter(voter => voter !== voterName);

    this.http.delete(
      `/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`)
      .pipe(catchError(this.handleError('deleteVoter')))
      .subscribe();
  }

  addVoter(eventId: number, session: ISession, voterName: string) {
    session.voters.push(voterName);

    this.http.post(
      `/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`,
      {},
      this.defaultHttpOptions)
      .pipe(catchError(this.handleError('addVoter')))
      .subscribe();
  }

  userHasVoted(session: ISession, voterName: string) {
    return session.voters.some(voter => voter === voterName);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    }
  }
}
