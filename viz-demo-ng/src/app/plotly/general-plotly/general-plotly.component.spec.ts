import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralPlotlyComponent } from './general-plotly.component';

describe('GeneralPlotlyComponent', () => {
  let component: GeneralPlotlyComponent;
  let fixture: ComponentFixture<GeneralPlotlyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralPlotlyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralPlotlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
