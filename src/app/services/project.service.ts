import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
//declare variable to store base api url
  baseUrl = 'http://localhost:3000'; // this makes it configurable later if we deploy to render
  // use DI to receive an instance of HttpClient object
  // declare a private variable named http of type HttpClient to use in the class
  constructor(
    private http: HttpClient
  ) { }
  // method to get all projects from the API
  getProjects(){
    return this.http.get(`${this.baseUrl}/api/projects`);
  }

}
