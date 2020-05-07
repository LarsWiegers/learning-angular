import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-graph',
  templateUrl: './dashboard-graph.component.html',
  styleUrls: ['./dashboard-graph.component.css'],

})
export class DashboardGraphComponent implements OnInit {
  fullscreen = false;
  grow() {
    this.fullscreen = !this.fullscreen;
  }
  data = {
    labels: ['', '', '', '', '', '', '', ''],
    datasets: [
      {
        label: '',
        data: [50, 55, 40, 60, 38, 50, 50, 70],
        fill: false,
        backgroundColor: false,
        pointRadius: 0,
        borderColor: [
          'rgb(34, 107, 69)',
        ],
        borderWidth: 3,
      },
    ],
  };

  options = {
    responsive: true,
    legend: {
      display: false,
    },
    scales: {
      yAxes: [{
        display: false,

        // grid line settings
        gridLines: {
          drawOnChartArea: false, // only want the grid lines for one axis to show up
        },
      }],
      xAxes: [{
        display: false,

        // grid line settings
        gridLines: {
          drawOnChartArea: false, // only want the grid lines for one axis to show up
        },
      }]
    }
  };

  constructor() { }

  ngOnInit(): void {
  }

}
