import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

interface user {
  Name:string,
  PhoneNumber:string
}

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  httpOptions = {
    headers: new HttpHeaders({'Content-Type' : 'application/json'})
  }
  constructor(private http : HttpClient) { }

  postUser(data: user)
  {
    return this.http.post<user>("https://localhost:7173/api/Users/CreateUser" , data)
  }
}
