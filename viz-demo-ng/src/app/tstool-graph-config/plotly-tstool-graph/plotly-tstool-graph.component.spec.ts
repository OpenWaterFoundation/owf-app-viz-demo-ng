import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlotlyTstoolGraphComponent } from './plotly-tstool-graph.component';

describe('PlotlyTstoolGraphComponent', () => {
  let component: PlotlyTstoolGraphComponent;
  let fixture: ComponentFixture<PlotlyTstoolGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlotlyTstoolGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlotlyTstoolGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
