import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/models/users.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.css']
})
export class AddUsersComponent implements OnInit {

  user:Users={
    username:'',
    userage:undefined,
    isAdult:false
  }

  submitted = false
  constructor(private userservice:UsersService) { }



  saveUser():void {
    const data = {
      username: this.user.username,
      userage : this.user.userage,
      isAdult : this.user.isAdult
    }
    this.userservice.createUser(data)
    .subscribe(response =>{
      console.log(response)
      this.submitted = true
    },
    error=>{console.log(error)})
  }

  newUser(){
    this.submitted=false
    this.user = {
      username:'',
      userage:undefined,
      isAdult:false
    }
  }

  ngOnInit(): void {
  }

}
