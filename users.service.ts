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


  createUser(data:any):Observable<any>{
    console.log(data)
    return this.http.post(baseUrl,data)
  }

}
