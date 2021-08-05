import {Component, Input, OnInit} from '@angular/core';
import {Ipost} from "../../../models/ipost";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input()
  post: Ipost
  constructor() { }

  ngOnInit(): void {
  }

}
