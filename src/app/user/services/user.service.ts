import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Iuser} from "../../models/iuser/iuser";

@Injectable({
  providedIn: 'root'
})
export class UserService {
private url = 'https://jsonplaceholder.typicode.com/users'
  constructor(private httpClient: HttpClient) { }
  getUsers(): Observable<Iuser[]>{
   return this.httpClient.get<Iuser[]>(this.url)
  }
  getUsersDetails(id: number): Observable<Iuser>{
  return this.httpClient.get<Iuser>(this.url + '/' + id)
  }
}
