import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowdownNgDemoComponent } from './showdown-ng-demo.component';

describe('ShowdownNgDemoComponent', () => {
  let component: ShowdownNgDemoComponent;
  let fixture: ComponentFixture<ShowdownNgDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowdownNgDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowdownNgDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
