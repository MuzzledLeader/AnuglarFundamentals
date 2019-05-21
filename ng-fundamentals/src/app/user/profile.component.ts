import { Component, OnInit } from '@angular/core'
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from "./auth.service";
import { Router } from '@angular/router';

@Component({
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router) {
  }

  ngOnInit(): void {
    let firstname = new FormControl(this.authService.currentUser.firstname);
    let lastname = new FormControl(this.authService.currentUser.lastname);
    this.profileForm = new FormGroup({
      firstname: firstname,
      lastname: lastname
    });
  }

  cancel() {
    this.router.navigate(['events']);
  }

  saveProfile(formValues) {
    this.authService.updateCurrentUser(formValues.firstname, formValues.lastname);
    this.router.navigate(['events']);
  }
}
