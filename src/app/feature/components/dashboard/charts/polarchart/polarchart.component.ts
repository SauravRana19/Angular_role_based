import { Component, Input, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
@Component({
  selector: 'app-polarchart',
  templateUrl: './polarchart.component.html',
  styleUrls: ['./polarchart.component.scss'],
})
export class PolarchartComponent implements OnInit {
  constructor() {}
  chart: any = [];
  @Input() polardata: any;

  ngOnInit(): void {
    this.chart = new Chart('polarchart', {
      type: 'polarArea', //this denotes tha type of chart

      data: {
        // values on X-Axis
        labels: ['Total People', 'Admin', 'Users', 'Viewer', 'Male', 'Female'],
        datasets: [
          {
            label: 'Total',
            data: this.polardata,
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
