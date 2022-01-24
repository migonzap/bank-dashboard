import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-avg-card',
  templateUrl: './avg-card.component.html',
  styleUrls: ['./avg-card.component.scss']
})
export class AvgCardComponent implements OnInit {

  constructor() { }

  value?: number;
  unit? : string;
  startDate?: string;
  endDate?: string;

  ngOnInit(): void {
  }

  load(value: number, unit: string, startDate: string, endDate: string) {
    this.value = value;
    this.unit = unit;
    this.startDate = startDate;
    this.endDate = endDate;
  }
}
