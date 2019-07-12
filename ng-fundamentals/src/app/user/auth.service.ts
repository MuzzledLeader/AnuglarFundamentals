import { Injectable } from "@angular/core"
import { IUser } from "./user.model"
import { Observable, of } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class AuthService {
  currentUser: IUser;

  private defaultHttpOptions: any;

  constructor(private http: HttpClient) {
    this.defaultHttpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
  }

  loginUser(username: string, password: string) {
    return this.http.post(
        '/api/login',
        {
          username: username,
          password: password
        },
        this.defaultHttpOptions)
      .pipe(tap(data => { // Allows the caller to subscribe but we can tap in our own callback.
        this.currentUser = <IUser>data['user'];
      }))
      .pipe(catchError(err => {
        return of(false);
      }));
  }

  logout() {
    return this.http.post('/api/logout', {}, this.defaultHttpOptions)
      .pipe(tap(() => {
        this.currentUser = null;
      }));
  }

  isAuthenticated() {
    return !!this.currentUser;
  }

  checkAuthenticationStatus() {
    this.http.get('/api/currentIdentity').subscribe(data => {
      if (data instanceof Object) {
        // Because my classes didn't match I had to copy over the data.
        this.currentUser = new User(data);
      }
    });
  }

  updateCurrentUser(firstname: string, lastname: string) {
    this.currentUser.firstname = firstname;
    this.currentUser.lastname = lastname;

    return this.http.put(`/api/users/${this.currentUser.id}`, (<User>this.currentUser).toJSON(), this.defaultHttpOptions);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    }
  }
}

class User implements IUser {
  id: number;
  username: string;
  firstname: string;
  lastname: string;

  constructor(json: any) {
    this.id = json.id;
    this.username = json.userName;
    this.firstname = json.firstName;
    this.lastname = json.lastName;
  }

  toJSON(): any {
    return {
      id: this.id,
      userName: this.username,
      firstName: this.firstname,
      lastName: this.lastname
    };
  }
}
