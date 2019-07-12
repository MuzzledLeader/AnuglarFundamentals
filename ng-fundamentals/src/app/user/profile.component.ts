import { Component, OnInit, Inject } from '@angular/core'
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from "./auth.service";
import { Router } from '@angular/router';
import { TOASTER_TOKEN, IToaster } from "../common/toastr.service"

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
    private router: Router,
    @Inject(TOASTER_TOKEN)private toaster: IToaster) {
  }

  ngOnInit(): void {
    this.firstname = new FormControl(
      this.authService.currentUser.firstname,
      [
        Validators.required,
        Validators.pattern('[a-zA-Z].*')
      ]);
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

  logout() {
    this.authService.logout().subscribe(() => {
      this.router.navigate(['/user/login']);
    });
  }

  saveProfile(formValues) {
    this.authService.updateCurrentUser(formValues.firstname, formValues.lastname).subscribe(() => {
      this.toaster.success('Profile saved.');
    });
  }

  validateFirstname() {
    return this.firstname.valid || this.firstname.untouched;
  }

  validateLastname() {
    return this.lastname.valid || this.lastname.untouched;
  }
}
