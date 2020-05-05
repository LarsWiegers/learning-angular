import { Component, OnInit } from '@angular/core';
import {Project} from '../project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  search = "";
  allProjects = [
    new Project("Building project", "1", "Ron", "05/05/2018", "06/12/2019"),
    new Project("Testing project", "2", "Jan", "05/05/2018", "06/12/2019"),
    new Project("Building project", "1", "Inge", "05/05/2018", "06/12/2019"),
    new Project("Reviewing project", "2", "Sven", "05/05/2018", "06/12/2019"),
    new Project("Building project", "1", "Jesse", "05/05/2018", "06/12/2019"),
    new Project("project project", "1", "Victor", "05/05/2018", "06/12/2019"),
    new Project("Building project", "2", "Lars", "05/05/2018", "06/12/2019"),
  ];
  filteredProjects = [];

  onSearch(event: any) {
    let search = this.search;
    console.log(search);
    search = search.charAt(0).toUpperCase() + search.slice(1);
    console.log(this.allProjects.filter(function(project)  {
      return project.filter(search);
    }));
    this.filteredProjects = this.allProjects.filter(function(project)  {
      return project.filter(search);
    });
  }

  constructor() { }

  ngOnInit(): void {
  }

}
