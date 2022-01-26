import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from "chart.js";

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  label: string = '';
  values: any[] = [];
  dates : any[] = [];
  chart!: Chart;

  constructor() {
    Chart.register(... registerables);
  }

  ngOnInit(): void {

  }

  load(label: string, values : any[], dates: any[]) {

    this.label = label;
    this.values = values;
    this.dates = dates;
    const primaryColor = '#0288D1';
    const primaryLightColor = '#B2DBF1';

    // Update chart
    if(this.chart != null) this.chart.destroy();

    this.chart = new Chart("elementChart", {
      type: 'line',
      data: {
        labels: this.dates,
        datasets: [{
          label: this.label,
          data: this.values,
          fill: {
            target: true,
            above: primaryLightColor,
            below: primaryLightColor
          },
          borderColor: primaryColor,
          borderWidth: 3,
          hoverBackgroundColor: 'rgba(0, 0, 0, 0.85)',
          pointBorderColor: primaryColor,
          pointBackgroundColor: primaryColor,
          pointBorderWidth: 0,
          pointHitRadius: 3,
          pointRadius: 0,
          pointHoverRadius: 1,
          tension: 0
        }],
      },
      options: {
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
            grid: {
              lineWidth: 1
            }
          },
          x: {
            grid: {
              lineWidth: 0
            }
          }
        },
        plugins: {
          legend: {
            display: false,
          }
        }
      }
    });
  }
}
