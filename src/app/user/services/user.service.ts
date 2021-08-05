import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Iuser} from "../../models/iuser";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }
  getUsers(): Observable<Iuser[]>{
    return this.httpClient.get<Iuser[]>('https://jsonplaceholder.typicode.com/users')
  }
}
