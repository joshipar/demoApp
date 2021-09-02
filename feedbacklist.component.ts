  import { Component, OnInit } from '@angular/core';
import { Feedback } from '../feedback';

@Component({
  selector: 'feedbacklist',
  template: `
  <feedback-form (feedbackCreated)="addFeedback($event)"></feedback-form>
  <app-feedback *ngFor="let f of feedbacks;let i=index" [feedback]="f">
  <span class="sno"> Question No: {{i+1}}</span>
  <h2 style="background-color:red;color:white"  class="question">{{f.question}}?</h2>
  <h2 class="answer">{{f.answer}}</h2>
  </app-feedback>
  `,
  styleUrls: ['./feedbacklist.component.css']
})
export class FeedbacklistComponent implements OnInit {


  feedbacks:Feedback[] = []

  constructor() {
    this.feedbacks = [
      new Feedback("How is the design of our website","Wow ! Attractive"),
      new Feedback("Are you satisfied with our service","Yes 5* Rating"),
      new Feedback("What you would like to see better","User Experience")
    ]
   }

  addFeedback(feedback:Feedback){
     this.feedbacks.unshift(feedback)
   }

  ngOnInit(): void {
  }

}
