import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  //declare variable to store base api url
  baseUrl = 'http://localhost:3000'; // this makes it configurable later if we deploy to render
  // use DI to receive an instance of HttpClient object
  // declare a private variable named http of type HttpClient to use in the class
  constructor(private http: HttpClient) {}
  // method to get all projects from the API
  getProjects() {
    return this.http.get(`${this.baseUrl}/api/projects`);
  }
  // Method to add a project calling the API
  addProject(newProject: any) {
    return this.http.post(`${this.baseUrl}/api/projects`, newProject);
  }

  deleteProject(_id: string) {
    return this.http.delete(`${this.baseUrl}/api/projects/${_id}`);
  }

  updateProject(updatedProject: any) {
    //Make PUT request to backend API and send updated project date
    //updatedProject is an object and contains all the fields of the project including ID
    return this.http.put(`${this.baseUrl}/api/projects`, updatedProject);
  }
}
