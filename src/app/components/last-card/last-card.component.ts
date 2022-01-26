import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-last-card',
  templateUrl: './last-card.component.html',
  styleUrls: ['./last-card.component.scss']
})
export class LastCardComponent implements OnInit {

  constructor() { }

  value?: number;
  date?: string;
  unit? : string;

  ngOnInit(): void {
  }

  load(value: number, unit: string, date: string) {
    this.value = value;
    this.unit = unit;
    this.date = date;
  }

}
