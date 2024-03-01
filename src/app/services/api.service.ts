import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  SERVER_URL:string = "https://dummyjson.com/recipes"

  constructor(private http:HttpClient) { }

  getAllRecipeeAPI(){
    return this.http.get(`${this.SERVER_URL}`)
  }
}
