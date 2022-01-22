import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementSummaryComponent } from './element-summary.component';

describe('ElementSummaryComponent', () => {
  let component: ElementSummaryComponent;
  let fixture: ComponentFixture<ElementSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElementSummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
