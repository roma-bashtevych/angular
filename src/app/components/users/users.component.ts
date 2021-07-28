import {Component, OnInit} from '@angular/core';
import {IUser} from "../../models/IUser";
import {UserService} from "../../servise/user.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

users: IUser[]

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
  this.userService.getAllUsers().subscribe(value =>  this.users = value)
  }

}
