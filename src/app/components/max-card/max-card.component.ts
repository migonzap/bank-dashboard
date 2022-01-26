import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-max-card',
  templateUrl: './max-card.component.html',
  styleUrls: ['./max-card.component.scss']
})
export class MaxCardComponent implements OnInit {

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
