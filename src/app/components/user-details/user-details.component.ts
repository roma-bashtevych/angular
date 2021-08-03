import {Component, Input, OnInit} from '@angular/core';
import {Iuser} from "../../model/iuser";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  @Input()
  user: Iuser

  constructor(private userService: UserService) {
    // console.log(this.user)
  }

  ngOnInit(): void {

  }

}
