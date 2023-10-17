import { Component, Input, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.scss'],
})
export class BarchartComponent implements OnInit {
  constructor() {}
  chart: any = [];
  @Input() bardata:any;
  ngOnInit(): void {
    this.chart = new Chart('barchart', {
      type: 'bar',
      data: {
        labels: ['Total People', 'Admin', 'Users', 'Viewer', 'Male', 'Female'],
        datasets: [
          {
            label: 'Total',
            data: this.bardata,
            borderWidth: 5,
            // barPercentage: 1,
            // categoryPercentage: 1,
            backgroundColor: [
              '#eec137',
              '#1da750',
              '#295bac',
              '#f06bac',
              '#b32b23',
              '#d46213',
            ],
          },
        ],
      },
      options: {
        scales: {
          // y: {
          //   beginAtZero: true,
          // },
        },
      },
    });
  }
}
