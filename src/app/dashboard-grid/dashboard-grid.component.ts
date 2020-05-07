import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-grid',
  templateUrl: './dashboard-grid.component.html',
  styleUrls: ['./dashboard-grid.component.css']
})
export class DashboardGridComponent implements OnInit {
  fullscreen = false;
  grow() {
    this.fullscreen = !this.fullscreen;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
