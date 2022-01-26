import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaxCardComponent } from './max-card.component';

describe('MaxCardComponent', () => {
  let component: MaxCardComponent;
  let fixture: ComponentFixture<MaxCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaxCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaxCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
