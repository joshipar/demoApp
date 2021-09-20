import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'alert',
  template: `
  <h1 (click)="alert()">{{type}}</h1>`,
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

@Input() type:string ="success"
  constructor() { }


  alert(){
    console.log("alert")
  }

  ngOnInit(): void {
  }

}
