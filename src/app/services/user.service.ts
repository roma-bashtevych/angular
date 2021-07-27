import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IUser} from "../models/IUser";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = 'https://jsonplaceholder.typicode.com/users'

  constructor(private httpClient: HttpClient) { }
  getAllUsers() :Observable<IUser[]>{
    return this.httpClient.get<IUser[]>(this.url)
  }

  getUserId(id: number): Observable<IUser> {
    return this.httpClient.get<IUser>(this.url + '/' + id)
  }
}
