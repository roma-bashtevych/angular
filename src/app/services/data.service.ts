import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  dataCell: BehaviorSubject<any> = new BehaviorSubject<any>(0)

  constructor() {
  }
}
