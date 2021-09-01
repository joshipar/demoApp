import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Users } from 'src/app/models/users.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  message = ''
  selectedUser:Users = {
    username:'',
    userage:undefined,
    isAdult:false
  }
  constructor(private userservice:UsersService, private route:ActivatedRoute,private router:Router) { }
  ngOnInit(): void {
    this.message = ''
    this.getTutorial(this.route.snapshot.params.id)
  }
  getTutorial(id:number){
    this.userservice.getUser(id)
    .subscribe(
      data =>{
        this.selectedUser = data
        console.log(data)
      },
      error => {console.log(error)}
    )
  }
  updateUser(){
    this.message = ''
    this.userservice.updateUser(this.selectedUser.id,this.selectedUser)
    .subscribe(
      response => {
        //console.log(response)
        this.message = response.message?response.message:'This user is updated successfully'
        alert("user updated successfully")
      },
      error =>{
        console.log(error)
      }
    )
  }

  deleteUser(){
    if(confirm("Do you really want to delete"))
    {
      this.userservice.deleteUser(this.selectedUser.id)
      .subscribe(
        response => { 
          console.log(response)
          this.router.navigate(['/users'])
        }
      )
    }
  }
  
}
