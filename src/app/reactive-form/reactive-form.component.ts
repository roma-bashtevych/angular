import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  customValidator(value: AbstractControl){
    if(value.value.includes('duck')){
   return {
     ahtung: 'bad word'
   }

    }
    return null
  }
  username = new FormControl('',[Validators.required, Validators.minLength(3), Validators.maxLength(7), this.customValidator])
  pass = new FormControl('')

  myForm: FormGroup = new FormGroup(
    {
      username: this.username,
      pass: this.pass
    })

  constructor() { }

  ngOnInit(): void {
  }

  save() {
    console.log(this.myForm)
  }
}
