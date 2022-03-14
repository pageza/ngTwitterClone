import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {UsersService} from "../../_services/users.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registrationForm = new FormGroup({
    fname: new FormControl(''),
    lname: new FormControl(''),
    uname: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('')
  })

  constructor(
    private _user: UsersService,
    private _router: Router
  ) { }

  ngOnInit(): void {
  }
  onSubmit() {
    this._user.createUser(this.registrationForm.value)
      .subscribe(() => this._router.navigateByUrl('/login'))
  }
  login() {
    this._router.navigateByUrl('/login')
  }
}
