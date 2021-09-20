import { ViewChild, Component, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { NgModel } from '@angular/forms';
 
@Component({
  selector: 'app-viewchildren2',
  template: `
      <h1>ViewChildren Example</h1>
 
      <input *ngIf="showFirstName" name="firstName" [(ngModel)]="firstName">
      <input *ngIf="showMiddleName" name="midlleName" [(ngModel)]="middleName">
      <input *ngIf="showlastName" name="lastName" [(ngModel)]="lastName">
 
 
      <input type="checkbox" id="showFirstName" name="showFirstName" [(ngModel)]="showFirstName">
      <input type="checkbox" id="showMiddleName" name="showMiddleName" [(ngModel)]="showMiddleName">
      <input type="checkbox" id="showlastName" name="showlastName" [(ngModel)]="showlastName">
 
      <button (click)="show()">Show</button>
  
  `,
 
})
 
export class Viewchildrenexample2Component implements AfterViewInit {
 
  firstName="";
  middleName="";
  lastName="";
 
  showFirstName=true;
  showMiddleName=true;
  showlastName=true;
 
  @ViewChildren(NgModel) modelRefList!: QueryList<NgModel>;
 
  ngAfterViewInit() {
 
    this,this.modelRefList.changes
      .subscribe(data => {
        console.log(data)
      }
    )
  }
  
 
  show() {
    this.modelRefList.forEach(element => {
      //console.log(element)
      console.log(element.value)
    });
 
  }
}
 