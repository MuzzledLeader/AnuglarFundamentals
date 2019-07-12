import { Component } from '@angular/core'
import { AuthService } from "./auth.service";
import { Router } from '@angular/router';

@Component({
  templateUrl: './login.component.html'
})
export class LoginComponent {
  username;
  password;
  loginInvalid: true;

  constructor(
    private authService: AuthService,
    private router: Router) {
  }

  login(formValues) {
    this.authService.loginUser(formValues.username, formValues.password).subscribe(response => {
      if (!response) {
        this.loginInvalid = true;
      } else {
        this.router.navigate(['events']);
      };
    });
  }

  cancel() {
    this.router.navigate(['events']);
  }
}
