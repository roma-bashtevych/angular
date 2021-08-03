import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Iuser} from "../model/iuser";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = 'https://jsonplaceholder.typicode.com/users'

  constructor(private httpClient: HttpClient) { }
  getAllUser(): Observable<Iuser[]>{
    return this.httpClient.get<Iuser[]>(this.url)
  }
  getUsersDet(id: string): Observable<Iuser>{
    return this.httpClient.get<Iuser>(this.url + '/' + id)
  }
}
