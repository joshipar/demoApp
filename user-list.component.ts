import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/models/users.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users?:Users[]
  username:string=""
  constructor(private userservice:UsersService) { }

    selectedUser: Users = {}
    currentIndex = -1
    ngOnInit(): void {
      this.getUsers()
    }

  searchByName(){
    this.selectedUser = {}
    this.currentIndex = -1
    console.log(this.username)
    this.userservice.searchByName(this.username)
     .subscribe(
      data=>{
        this.users = data
        console.log(data)
      },
      error=>{console.log(error)}
    )
  }

  setActiveUser(user:Users,index:number){
    this.selectedUser = user
    this.currentIndex = index    
  }



  getUsers(){
    this.userservice.getAllUsers()
    .subscribe(data=>{
      this.users =data
      console.log(data)
    },
    error=>{
      console.log(error)
    })
  }

}
