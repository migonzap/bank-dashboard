import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { ConfigurationService } from "../../services/configuration/configuration.service";
import { Configuration } from "../../models/configuration";

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.scss']
})
export class NavigatorComponent implements OnInit{

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  configuration!: Configuration;

  constructor(private breakpointObserver: BreakpointObserver,
              private configurationService: ConfigurationService) {
  }

  ngOnInit(): void {
    this.configurationService.getConfiguration()
      .subscribe(config => {
        this.configuration = config;
      })
  }
}
