import { LayoutModule } from '@angular/cdk/layout';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { DashboardComponent } from './dashboard.component';
import {of} from "rxjs";
import Utils from "../../utils";
import { RouterTestingModule } from "@angular/router/testing";
import { RestDataService } from "../../services/data/rest-data.service";
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardComponent],
      imports: [
        NoopAnimationsModule,
        LayoutModule,
        MatButtonModule,
        MatCardModule,
        MatGridListModule,
        MatIconModule,
        MatMenuModule,
        HttpClientTestingModule,
        RouterTestingModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });

  // TODO Implement this unit tests
  /*it('should when data is retrieved and no errors', () => {
    // given
    const dataService = TestBed.inject(RestDataService);
    const response = {
      "key": "cobre",
      "name": "Precio del Cobre, dólares por libra",
      "unit": "dolar",
      "values": {
        "1546387200": 2.71,
        "1546473600": 2.7,
        "1546560000": 2.64,
        "1546819200": 2.59,
      }
    }
    const dates = [
      Utils.formatDate('1546387200'),
      Utils.formatDate('1546473600'),
      Utils.formatDate('1546560000'),
      Utils.formatDate('1546819200')
    ];
    const values = [2.71, 2.7, 2.64, 2.59];
    spyOn(dataService,'findAllValuesByElement').and.callFake(() => {
      return of(response);
    })

    // when
    component.ngOnInit();

    // then
    expect(component.lastCard.value).toBe(2.59);
    expect(component.lastCard.date).toBe(Utils.formatDate('1546819200'))
    expect(component.minCard.value).toBe(2.59);
    expect(component.minCard.startDate).toBe(Utils.formatDate('1546387200'))
    expect(component.minCard.endDate).toBe(Utils.formatDate('1546819200'))
    expect(component.maxCard.value).toBe(2.64);
    expect(component.maxCard.startDate).toBe(Utils.formatDate('1546387200'))
    expect(component.maxCard.endDate).toBe(Utils.formatDate('1546819200'))
    expect(component.avgCard.value).toBe(2.66);
    expect(component.avgCard.startDate).toBe(Utils.formatDate('1546387200'))
    expect(component.avgCard.endDate).toBe(Utils.formatDate('1546819200'))
    expect(component.chart.values).toBe(values);
    expect(component.chart.dates).toBe(dates);
  });*/
});
