import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

login(user:string,password:string) :boolean{
  if(user=='admin' && password=='angular'){
    localStorage.setItem('user',user)
    return true
  }
  return false
}  

logout(){
  localStorage.removeItem('user')
}

getUser():any{
  return localStorage.getItem('user')
}

isLoggedin():boolean{
  return localStorage.getItem('user') !== null
}

  constructor() { }
}
