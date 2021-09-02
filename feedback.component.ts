import { Component, OnInit ,Input} from '@angular/core';
import { Feedback } from '../feedback';

@Component({
  selector: 'app-feedback',
  template: `
  <div class="card card-block">
    
     
    <h4 class="card-title"> 
    <ng-content select=".sno"></ng-content> 
    <ng-content select=".question"></ng-content>  
    </h4>
    <p [hidden]="data.hide"> 
      <ng-content select=".answer"></ng-content>      
    </p>
    <a class="btn btn-primary" (click)="data.toggle()"> View Answer </a>
  </div>
  `,
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

@Input('feedback')
data! : Feedback

  constructor() { }

  ngOnInit(): void {
  }

}
