import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-graph',
  templateUrl: './dashboard-graph.component.html',
  styleUrls: ['./dashboard-graph.component.css']
})
export class DashboardGraphComponent implements OnInit {
  fullscreen = false;
  grow() {
    this.fullscreen = !this.fullscreen;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
