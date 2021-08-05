import {Component, Input, OnInit} from '@angular/core';
import {Iuser} from "../../../models/iuser/iuser";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  @Input()
  user: Iuser
  constructor() { }

  ngOnInit(): void {
  }


}
