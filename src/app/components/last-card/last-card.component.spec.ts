import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastCardComponent } from './last-card.component';

describe('LastCardComponent', () => {
  let component: LastCardComponent;
  let fixture: ComponentFixture<LastCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LastCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LastCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
