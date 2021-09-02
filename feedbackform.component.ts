import { Component, OnInit,Output,EventEmitter ,ViewEncapsulation} from '@angular/core';
import { Feedback } from '../feedback';

@Component({
  selector: 'feedback-form',
  templateUrl: './feedbackform.component.html',
  styles: [
    `
    .card {
      background-color:tomato;
      color:darkblue
    }
    `
  ],
  encapsulation:ViewEncapsulation.Emulated
 // encapsulation:ViewEncapsulation.ShadowDom
 //encapsulation:ViewEncapsulation.None
})
export class FeedbackformComponent implements OnInit {

@Output() feedbackCreated = new EventEmitter<Feedback>()

createFeedback(question:string,answer:string){

 this.feedbackCreated.emit(new Feedback(question,answer))
 //console.log(question,answer)
}

  constructor() { }

  ngOnInit(): void {
  }

}
