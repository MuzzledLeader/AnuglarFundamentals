import { Component, OnInit } from '@angular/core'
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from "./auth.service";
import { Router } from '@angular/router';

@Component({
  templateUrl: './profile.component.html',
  styles: [`
    em {float:right; color:#E05C65; padding-left: 10px;}
    .error input {background-color:#E3C3C5;}
    .error ::-webkit-input-placeholder {color: #999;}
    .error ::-mox-placeholder {color: #999;}
    .error :-moz-placeholder {color: #999;}
    .error :m-input-placeholder {color: #999;}
`]
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;
  firstname: FormControl;
  lastname: FormControl;

  constructor(
    private authService: AuthService,
    private router: Router) {
  }

  ngOnInit(): void {
    this.firstname = new FormControl(
      this.authService.currentUser.firstname,
      Validators.required);
    this.lastname = new FormControl(
      this.authService.currentUser.lastname,
      Validators.required);
    this.profileForm = new FormGroup({
      firstname: this.firstname,
      lastname: this.lastname
    });
  }

  cancel() {
    this.router.navigate(['events']);
  }

  saveProfile(formValues) {
    this.authService.updateCurrentUser(formValues.firstname, formValues.lastname);
    this.router.navigate(['events']);
  }

  validateFirstname() {
    return this.firstname.valid || this.firstname.untouched;
  }

  validateLastname() {
    return this.lastname.valid || this.lastname.untouched;
  }
}
