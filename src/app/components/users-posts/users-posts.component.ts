import {Component, Input, OnInit} from '@angular/core';
import {IPost} from "../../models/IPost";
import {UserService} from "../../servise/user.service";

@Component({
  selector: 'app-users-posts',
  templateUrl: './users-posts.component.html',
  styleUrls: ['./users-posts.component.scss']
})
export class UsersPostsComponent implements OnInit {

  @Input()
  id:number

  posts:IPost[]

  constructor(private userService: UserService) { }


  ngOnInit(): void {
    this.userService.getPostUsers(this.id).subscribe(value => this.posts = value)
  }
}
