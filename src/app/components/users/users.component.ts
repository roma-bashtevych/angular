import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user.service";
import {Iuser} from "../../models/iuser";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: Iuser[]
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getShowAllUsers().subscribe(value => this.users = value)
  }

}
