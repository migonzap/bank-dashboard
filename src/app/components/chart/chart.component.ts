import { Component, OnInit } from '@angular/core';
import { DataService } from "../../services/data/data.service";
import { ActivatedRoute } from "@angular/router";
import * as moment from 'moment';
import { Chart, registerables } from "chart.js";

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  values: any[] = [];
  dates : any[] = [];
  chart?: Chart;

  constructor(private route: ActivatedRoute,
              private dataService: DataService) {
    Chart.register(... registerables);
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      let id = paramMap.get('id');
      if(id != null) this.load(id);
    });
  }

  private load(id: string) {

    this.values = [];
    this.dates = [];

    this.dataService.findAllValuesByElement(id).subscribe((response: any) => {
      for (const [date, value] of Object.entries(response.values)) {
        this.dates.push(moment(new Date(Number(date) * 1000)).format("DD-MM-YYYY"));
        this.values.push(value);
      }

      if(this.chart != null) this.chart.destroy();
      this.chart = new Chart("elementChart", {
        type: 'line',
        data: {
          labels: this.dates,
          datasets: [{
            label: '# of Votes',
            data: this.values,
            fill: true,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
          }],

        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
      this.chart.draw();
    });
  }
}
