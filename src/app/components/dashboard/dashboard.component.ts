import {Component, ViewChild} from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { ActivatedRoute } from "@angular/router";
import { ChartComponent } from "../chart/chart.component";
import * as moment from "moment";
import { DataService } from "../../services/data/data.service";
import { LastCardComponent } from "../last-card/last-card.component";
import { MaxCardComponent } from "../max-card/max-card.component";
import { MinCardComponent } from "../min-card/min-card.component";
import { AvgCardComponent } from "../avg-card/avg-card.component";
import Utils from "../../utils";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  @ViewChild(ChartComponent)
  chart!: ChartComponent;

  @ViewChild(LastCardComponent)
  lastCard!: LastCardComponent;

  @ViewChild(MinCardComponent)
  minCard!: MinCardComponent;

  @ViewChild(MaxCardComponent)
  maxCard!: MaxCardComponent;

  @ViewChild(AvgCardComponent)
  avgCard!: AvgCardComponent;

  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return {
          columns: 1,
          miniCard: { cols: 1, rows: 1 },
          chart: { cols: 1, rows: 2 },
        };
      }

      return {
        columns: 4,
        miniCard: { cols: 1, rows: 1 },
        chart: { cols: 4, rows: 3 },
      };
    })
  );

  title : string | null = '';

  constructor(private breakpointObserver: BreakpointObserver,
              private dataService: DataService,
              private route: ActivatedRoute) {}

  ngOnInit() {
    // Refresh the components data
    this.route.paramMap.subscribe(paramMap => {

      let id = paramMap.get('id');
      if(id != null) {

        let values : any[] = [];
        let dates : any[] = [];
        let rows: any[] = [];

        // Async data service call. If there is no data then hasData is set to false and
        this.dataService.findAllValuesByElement(id).subscribe((response: any) => {
          if(response != null) {
            // Refresh title
            this.title = response.name;
            let formattedUnit = Utils.formatUnit(response.unit);
            let description = response.name;

            // Process data
            for (const [date, value] of Object.entries(response.values)) {
              let formattedDate = moment(new Date(Number(date) * 1000)).format("DD-MM-YYYY");
              values.push(value);
              dates.push(formattedDate);
              rows.push({
                'date': formattedDate,
                'value': Number(value)
              });
            }

            // Refresh cards values
            this.lastCard.load(values[values.length - 1], formattedUnit, dates[values.length - 1]);
            this.minCard.load(Utils.min(values), formattedUnit, dates[0], dates[dates.length - 1]);
            this.maxCard.load(Utils.max(values), formattedUnit, dates[0], dates[dates.length - 1]);
            this.avgCard.load(Utils.avg(values), formattedUnit, dates[0], dates[dates.length - 1]);

            // Refresh Chart
            this.chart.load(description, values, dates);
          }
        });
      }
    });
  }
}
