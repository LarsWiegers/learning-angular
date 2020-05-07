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
    new Project("Building project", "1", "Ron", "05/05/2018", "06/12/2019", "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"),
    new Project('Testing project', '2', 'Jan', '05/05/2018', '06/12/2019', "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9https://images.unsplash.com/photo-1567468219153-4b1dea5227ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"),
    new Project('Building project', '1', 'Inge', '05/05/2018', '06/12/2019', "https://images.unsplash.com/photo-1569124589354-615739ae007b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"),
    new Project('Reviewing project', '2', 'Sven', '05/05/2018', '06/12/2019', "https://images.unsplash.com/photo-1511314023197-79bcd4a1bfc4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"),
    new Project('Building project', '1', 'Jesse', '05/05/2018', '06/12/2019', "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"),
    new Project('Project project', '1', 'Victor', '05/05/2018', '06/12/2019', "https://images.unsplash.com/photo-1543764477-646365e11da3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"),
    new Project('Building project', '2', 'Lars', '05/05/2018', '06/12/2019', "https://images.unsplash.com/photo-1537815749002-de6a533c64db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"),
  ];
  filteredProjects = this.allProjects;
  orderedOn = "name";
  onSearch(event: any) {
    let search = this.search;
    search = search.charAt(0).toUpperCase() + search.slice(1);
    this.filteredProjects = this.allProjects.filter(function(project)  {
      return project.filter(search);
    });
  }

  constructor() {
    this.orderBy(this.orderedOn);
  }

  ngOnInit(): void {
  }

  orderBy(property: any) {
    if(typeof property == "string") {
      function compare( a, b ) {
        if ( a[property] < b[property] ){
          return -1;
        }
        if ( a[property] > b[property] ){
          return 1;
        }
        return 0;
      }
      if(this.orderedOn === property) {
        this.filteredProjects.sort(compare).reverse();
        this.orderedOn = "";
      }else {
        this.filteredProjects.sort( compare );
        this.orderedOn = property;
      }


    }
  }
}
