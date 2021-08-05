import {Component, OnDestroy, OnInit} from '@angular/core';
import {DataService} from "../../../services/data.service";
import {UserService} from "../../services/user.service";
import {Iuser} from "../../../models/iuser";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit, OnDestroy {

users: Iuser[]
selectedUser: Iuser

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  this.userService.getUsers().subscribe(value => this.users = value)
  }


  catchEE(obj: any) {
  this.selectedUser = obj
  }
  ngOnDestroy(): void {

  }
}
