import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralChartjsComponent } from './general-chartjs.component';

describe('GeneralChartjsComponent', () => {
  let component: GeneralChartjsComponent;
  let fixture: ComponentFixture<GeneralChartjsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralChartjsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralChartjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
