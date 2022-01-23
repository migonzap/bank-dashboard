import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-min-card',
  templateUrl: './min-card.component.html',
  styleUrls: ['./min-card.component.scss']
})
export class MinCardComponent implements OnInit {

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
