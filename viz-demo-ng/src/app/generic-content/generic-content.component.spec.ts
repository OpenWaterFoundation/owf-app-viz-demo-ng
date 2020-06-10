import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericContentComponent } from './generic-content.component';

describe('GenericContentComponent', () => {
  let component: GenericContentComponent;
  let fixture: ComponentFixture<GenericContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenericContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
