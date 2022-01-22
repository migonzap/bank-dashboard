import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return {
          columns: 1,
          miniCard: { cols: 1, rows: 1 },
          table: { cols: 1, rows: 2 },
          chart: { cols: 1, rows: 2 },
        };
      }

      return {
        columns: 4,
        miniCard: { cols: 1, rows: 1 },
        table: { cols: 2, rows: 3 },
        chart: { cols: 2, rows: 3 },
      };
    })
  );

  title : string | null = '';

  constructor(private breakpointObserver: BreakpointObserver,
              private route: ActivatedRoute) {}

  ngOnInit() {
    // Load the components from the selected Element
    this.route.paramMap.subscribe(paramMap => {
      this.load(paramMap.get('id'));
    });
  }

  private load(id: string | null) {
    this.title = id;
  }
}
