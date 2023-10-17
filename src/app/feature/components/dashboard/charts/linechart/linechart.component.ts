import { Component, Input, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
@Component({
  selector: 'app-linechart',
  templateUrl: './linechart.component.html',
  styleUrls: ['./linechart.component.scss'],
})
export class LinechartComponent implements OnInit {
  @Input() linedata: any;
  chart: any = [];
  constructor() {}

  ngOnInit(): void {
    this.chart = new Chart('linechart', {
      type: 'line', //this denotes tha type of chart

      data: {
        // values on X-Axis
        labels: ['Total People', 'Admin', 'Users', 'Viewer', 'Male', 'Female'],
        datasets: [
          {
            label: 'Total',
            data: this.linedata,
            backgroundColor: [
              'red',
              'pink',
              'green',
              'yellow',
              'orange',
              'blue',
            ],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
            // hoverOffset: 4,
          },
        ],
      },
      options: {
        aspectRatio: 2.5,
      },
    });
  }
}
