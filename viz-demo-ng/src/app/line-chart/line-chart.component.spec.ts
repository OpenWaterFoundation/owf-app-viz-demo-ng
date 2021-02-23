import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartJsSnodasComponent } from './line-chart.component';

describe('LineChartComponent', () => {
  let component: ChartJsSnodasComponent;
  let fixture: ComponentFixture<ChartJsSnodasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartJsSnodasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartJsSnodasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
