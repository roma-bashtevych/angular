import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-td-form',
  templateUrl: './td-form.component.html',
  styleUrls: ['./td-form.component.scss']
})
export class TdFormComponent implements OnInit {
 user = {
   username: 'vasya',
   pass: '1111',
   status: true,
   gender: 'male',
   level: ''
 }


  constructor() { }

  ngOnInit(): void {
  }


  save(tref: HTMLFormElement) {
    // console.log(tref.username.value)
    console.log(this.user)
  }
}
