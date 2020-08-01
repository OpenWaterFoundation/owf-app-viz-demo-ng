import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlotlyTsPointLineComponent } from './plotly-ts-point-line.component';

describe('PlotlyTsPointLineComponent', () => {
  let component: PlotlyTsPointLineComponent;
  let fixture: ComponentFixture<PlotlyTsPointLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlotlyTsPointLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlotlyTsPointLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
