import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TstoolConfigComponent } from './tstool-config.component';

describe('TstoolConfigComponent', () => {
  let component: TstoolConfigComponent;
  let fixture: ComponentFixture<TstoolConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TstoolConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TstoolConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
