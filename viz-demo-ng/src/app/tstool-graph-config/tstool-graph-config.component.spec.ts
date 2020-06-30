import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TstoolGraphConfigComponent } from './tstool-graph-config.component';

describe('TstoolGraphConfigComponent', () => {
  let component: TstoolGraphConfigComponent;
  let fixture: ComponentFixture<TstoolGraphConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TstoolGraphConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TstoolGraphConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
