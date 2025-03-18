import { Component } from '@angular/core';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-project',
  standalone: false,
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {
//declare a variable to hold projects list
 projects: any;// any is a type in typescript that can hold any type of data
// add a constructor to handle DI of the ProjectService
  constructor(
    private projectService: ProjectService) { }

    // add a method to get all projects from the API and store in a variable to use in the view(html)
    getProjects(){
      // call the getProjects method from the ProjectService
      this.projectService.getProjects().subscribe(
        (data) => {
        this.projects = data;
      }
    );
    }
  //load projects when the component is initialized
  ngOnInit(){
    this.getProjects();
}
}