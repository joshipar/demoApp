import { Component } from '@angular/core';
import { observable, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Application';
   today = new Date()
   price:number = 23.1
   value = "Good Morning"
   lucky_winners = ["Parag","Prashant","Tushar","Vicky","Prajakta"]
   amount = 1000.23
   basicsalary = 10000
  
   constructor(){
      
   }
   
}
