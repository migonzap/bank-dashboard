import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvgCardComponent } from './avg-card.component';

describe('AvgCardComponent', () => {
  let component: AvgCardComponent;
  let fixture: ComponentFixture<AvgCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvgCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvgCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
