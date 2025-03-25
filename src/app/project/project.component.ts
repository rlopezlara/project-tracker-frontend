import { Component } from '@angular/core';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-project',
  standalone: false,
  templateUrl: './project.component.html',
  styleUrl: './project.component.css',
})
export class ProjectComponent {
  //declare a variable to hold projects list
  projects: any; // any is a type in typescript that can hold any type of data
  // add a constructor to handle DI of the ProjectService

  //Declare variables to hold project details
  _id!: string; //!means the variable is nullable
  name!: string;
  dueDate!: string;
  course!: string;

  constructor(private projectService: ProjectService) {}

  // add a method to get all projects from the API and store in a variable to use in the view(html)
  getProjects() {
    // call the getProjects method from the ProjectService
    this.projectService.getProjects().subscribe((data) => {
      this.projects = data;
    });
  }

  addProject() {
    let newProject = {
      name: this.name,
      dueDate: this.dueDate,
      course: this.course,
    };
    this.projectService.addProject(newProject).subscribe((data) => {
      this.getProjects();
      this.clearForm();
    });
  }

  deleteProject(_id: string) {
    if (confirm('Are you sure you want to delete this project?')) {
      this.projectService.deleteProject(_id).subscribe((data) => {
        this.getProjects();
      });
    }
  }
  selectProject(project: any) {
    this._id = project._id;
    this.name = project.name;
    this.dueDate = project.dueDate;
    this.course = project.course;
  }

  updateProject() {
    let updatedProject = {
      _id: this._id,
      name: this.name,
      dueDate: this.dueDate,
      course: this.course,
    };
    this.projectService.updateProject(updatedProject).subscribe((date) => {
      this.getProjects();
      this.clearForm();
    });
  }

  clearForm() {
    this._id = '';
    this.name = '';
    this.dueDate = '';
    this.course = '';
  }
  //load projects when the component is initialized
  ngOnInit() {
    this.getProjects();
  }
}
