import {AfterViewInit, Component, DoCheck, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {TestComponent} from "./test/test.component";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnChanges, OnInit, DoCheck, AfterViewInit{
  title = 'angular';

  @ViewChild(TestComponent)
  testCommand: TestComponent

  constructor() {
    console.log('constructor')
    console.log(this.testCommand)
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)

  }

  ngOnInit(): void {
    console.log('ngOnInit')
    console.log(this.testCommand)
  }

  ngDoCheck(): void {
    console.log('doChek')

  }
  ngAfterViewInit(): void {
    console.log(this.testCommand)
  }

}


