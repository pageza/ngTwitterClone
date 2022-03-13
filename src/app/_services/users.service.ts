import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../models/user";

const API_URL = '//localhost:3030/api/users'
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private _http: HttpClient
  ) { }

  createUser(registrationForm: User) {
    return this._http.post<User>(API_URL+'/create', registrationForm)
  }
}
