import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from '../models/users.model';

const baseUrl = "http://localhost:8080/users"

@Injectable({
  providedIn: 'root'
})


export class UsersService {

  constructor(private http : HttpClient) { }

  getAllUsers():Observable<Users[]>{
    return this.http.get<Users[]>(baseUrl)
  }

  getUser(id:any):Observable<Users>{
    return this.http.get(`${baseUrl}/${id}`)
  }

  updateUser(id:any,data:any):Observable<any>{
    return this.http.put(`${baseUrl}/${id}`,data)
  }

  createUser(data:any):Observable<any>{
    console.log(data)
    return this.http.post(baseUrl,data)
  }

  deleteUser(id:any) : Observable<any>{
    return this.http.delete(`${baseUrl}/${id}`)
  }

  searchByName(username:string):Observable<Users[]>{
    console.log(`${baseUrl}?username=${username}`)
    return this.http.get<Users[]>(`${baseUrl}?username=${username}`)
  }

  // deleteAll(data:any):Observable<any>{
  //   data.forEach(data.id => {
  //     datat
  
  //   });
  //     }

}
