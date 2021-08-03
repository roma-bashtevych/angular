import {Component, Input, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {Iuser} from "../../model/iuser";
import {Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  @Input()
  user: Iuser
  users: Iuser[]
  myForm: FormGroup = new FormGroup({usersReactForm: new FormControl(1)})


  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.userService.getAllUser().subscribe(value => this.users = value)
  }

  show(tref: HTMLFormElement) {
    // console.log(tref.users.value)
    this.userService.getUsersDet(tref.users.value).subscribe(value => this.user = value)
    // console.log(this.user)
  }

  showReactUsers() {
    // console.log(this.myForm.value.usersReactForm)
    this.userService.getUsersDet(this.myForm.value.usersReactForm).subscribe(value => this.user = value)
  }
}
