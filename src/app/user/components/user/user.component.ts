import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Iuser} from "../../../models/iuser";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  @Input()
  user: Iuser

  @Output()
  xxx: EventEmitter<Iuser> = new EventEmitter<Iuser>()

  constructor() { }

  ngOnInit(): void {
  }

  selectUser() {
    this.xxx.emit(this.user)
  }
}
