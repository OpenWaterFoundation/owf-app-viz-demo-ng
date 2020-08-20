import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnodasComponent } from './snodas.component';

describe('SnodasComponent', () => {
  let component: SnodasComponent;
  let fixture: ComponentFixture<SnodasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnodasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnodasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
