import { ViewChild, Component, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { NgModel } from '@angular/forms';
 
@Component({
  selector: 'app-viewchildren1',
  template: `
      <h1>ViewChildren Example</h1>
 
      <input name="firstName" [(ngModel)]="firstName">
      <input name="midlleName" [(ngModel)]="middleName">
      <input name="lastName" [(ngModel)]="lastName">
 
      <button (click)="show()">Show</button>
      <div *ngFor="let l of itemlist"> {{l}} </div> 
  `,
})
 
export class ViewChildrenExample1Component {
 
  firstName:string="";
  middleName:string="";
  lastName="";
  itemlist:string[] = []
 
  @ViewChildren(NgModel) modelRefList!: QueryList<NgModel>;
  
  show() {
 
    this.modelRefList.forEach(element => {
      this.itemlist.push(element.value)
      //console.log(element.value)
    });
  }
}