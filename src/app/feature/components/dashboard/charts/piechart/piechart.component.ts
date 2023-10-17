import { Component, Input, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.scss'],
})
export class PiechartComponent implements OnInit {
  constructor() {}
  chart: any = [];
  @Input() piedata: any;
  ngOnInit(): void {
    this.chart = new Chart('piechart', {
      type: 'pie', //this denotes tha type of chart

      data: {
        // values on X-Axis
        labels: ['Total People', 'Admin', 'Users', 'Viewer', 'Male', 'Female'],
        datasets: [
          {
            label: 'Total',
            data: this.piedata,
            backgroundColor: [
              'red',
              'pink',
              'green',
              'yellow',
              'orange',
              'blue',
            ],
            hoverOffset: 4,
          },
        ],
      },
      options: {
        aspectRatio: 2.5,
      },
    });
  }
}
