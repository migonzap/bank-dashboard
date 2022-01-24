import { LayoutModule } from '@angular/cdk/layout';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { DashboardComponent } from './dashboard.component';
import Utils from "../../utils";
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { ActivatedRoute } from "@angular/router";
import { LastCardComponent } from "../last-card/last-card.component";
import { MinCardComponent } from "../min-card/min-card.component";
import { MaxCardComponent } from "../max-card/max-card.component";
import { AvgCardComponent } from "../avg-card/avg-card.component";
import { ChartComponent } from "../chart/chart.component";
import { By } from "@angular/platform-browser";
import { RestDataService } from "../../services/data/rest-data.service";
import {of} from "rxjs";
import {DataService} from "../../services/data/data.service";
import {CardComponent} from "../card/card.component";

describe('DashboardComponent', () => {

  // Params
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let dataService = jasmine.createSpyObj<RestDataService>('RestDataService',
    ['findAllValuesByElement']);

  // Data
  const key = 'cobre';
  const paramMap = new Map();
  paramMap.set('id', key);

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

  const emptyResponse = {
    "key": "cobre",
    "name": "Precio del Cobre, dólares por libra",
    "unit": "dolar",
    "values": {}
  }

  const dates = [
    Utils.formatDate('1546387200'),
    Utils.formatDate('1546473600'),
    Utils.formatDate('1546560000'),
    Utils.formatDate('1546819200')
  ];

  const values = [2.71, 2.7, 2.64, 2.59];

  const noValue = '--';
  const noData = 'No hay datos';

  // Before each
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: DataService, useValue: dataService },
        { provide: ActivatedRoute, useValue: { paramMap: of(paramMap) }}
        ],
      declarations: [
        DashboardComponent,
        ChartComponent,
        LastCardComponent,
        MinCardComponent,
        MaxCardComponent,
        AvgCardComponent,
        CardComponent
      ],
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

  it('should fill dashboard components when data is successfully retrieved', () => {
    // given
    let lastCard = getLastCardDebugElement();
    let minCard = getMinCardDebugElement();
    let maxCard = getMaxCardDebugElement();
    let avgCard = getAvgCardDebugElement();
    let chart = getChartDebugElement();

    dataService.findAllValuesByElement = jasmine.createSpy().and.returnValue(of(response));

    // when
    component.ngOnInit();

    // then
    expect(lastCard).toBeDefined();
    expect(component.lastCard.value).toEqual(2.59);
    expect(component.lastCard.date).toEqual(Utils.formatDate('1546819200'));

    expect(minCard).toBeDefined();
    expect(component.minCard.value).toEqual(2.59);
    expect(component.minCard.startDate).toEqual(Utils.formatDate('1546387200'));
    expect(component.minCard.endDate).toEqual(Utils.formatDate('1546819200'));

    expect(maxCard).toBeDefined();
    expect(component.maxCard.value).toEqual(2.71);
    expect(component.maxCard.startDate).toEqual(Utils.formatDate('1546387200'));
    expect(component.maxCard.endDate).toEqual(Utils.formatDate('1546819200'));

    expect(avgCard).toBeDefined();
    expect(component.avgCard.value).toEqual(2.66);
    expect(component.avgCard.startDate).toEqual(Utils.formatDate('1546387200'));
    expect(component.avgCard.endDate).toEqual(Utils.formatDate('1546819200'));

    expect(chart).toBeDefined();
    expect(component.chart.values).toEqual(values);
    expect(component.chart.dates).toEqual(dates);
  });

  it('should not fill dashboard components when no data found', () => {
    // given
    let lastCard = getLastCardDebugElement();
    let minCard = getMinCardDebugElement();
    let maxCard = getMaxCardDebugElement();
    let avgCard = getAvgCardDebugElement();

    let lastCardValue = fixture.debugElement.query(By.css('#last-value-label'));
    let lastCardDate = fixture.debugElement.query(By.css('#last-date-label'));
    let minCardValue = fixture.debugElement.query(By.css('#min-value-label'));
    let minCardDate = fixture.debugElement.query(By.css('#min-date-label'));
    let maxCardValue = fixture.debugElement.query(By.css('#max-value-label'));
    let maxCardDate = fixture.debugElement.query(By.css('#max-date-label'));
    let avgCardValue = fixture.debugElement.query(By.css('#avg-value-label'));
    let avgCardDate = fixture.debugElement.query(By.css('#avg-date-label'));

    dataService.findAllValuesByElement = jasmine.createSpy().and.returnValue(of(emptyResponse));

    // when
    component.ngOnInit();

    // then
    expect(lastCard).toBeDefined();
    expect(lastCardValue.nativeElement.outerText).toEqual(noValue);
    expect(lastCardDate.nativeElement.outerText).toEqual(noData);

    expect(minCard).toBeDefined();
    expect(minCardValue.nativeElement.outerText).toEqual(noValue);
    expect(minCardDate.nativeElement.outerText).toEqual(noData);

    expect(maxCard).toBeDefined();
    expect(maxCardValue.nativeElement.outerText).toEqual(noValue);
    expect(maxCardDate.nativeElement.outerText).toEqual(noData);

    expect(avgCard).toBeDefined();
    expect(avgCardValue.nativeElement.outerText).toEqual(noValue);
    expect(avgCardDate.nativeElement.outerText).toEqual(noData);
  });

  function getLastCardDebugElement() {
    return fixture.debugElement.query(By.directive(LastCardComponent));
  }

  function getMinCardDebugElement() {
    return fixture.debugElement.query(By.directive(MinCardComponent));
  }

  function getMaxCardDebugElement() {
    return fixture.debugElement.query(By.directive(MaxCardComponent));
  }

  function getAvgCardDebugElement() {
    return fixture.debugElement.query(By.directive(AvgCardComponent));
  }

  function getChartDebugElement() {
    return fixture.debugElement.query(By.directive(ChartComponent));
  }
});
