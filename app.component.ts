import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Observable } from 'rxjs';
import {Store} from '@ngrx/store'
import { CourseItem } from './store/models/courseItem.model';
import {AppState} from '../app/store/models/app-state.model'
import {NgForm} from '@angular/forms'
import { AddItemAction } from './store/actions/course.action';
import { AlertComponent } from './alert/alert.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChildren(AlertComponent) alerts!:QueryList<AlertComponent>

  title = 'course-list';
  courseItem$! : Observable<Array<CourseItem>>
  constructor(private store:Store<AppState>){}
  ngOnInit(){
    this.courseItem$ = this.store.select((store)=>store.course)
  }
  
  ngAfterViewInit(){
    this.alerts.forEach(a=>console.log(a))
  }

  addCourse(form:NgForm){
    this.store.dispatch(new AddItemAction(form.value))
    form.reset()
  }
}
