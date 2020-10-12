import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GapminderJsComponent } from './gapminder-js.component';

describe('GapminderJsComponent', () => {
  let component: GapminderJsComponent;
  let fixture: ComponentFixture<GapminderJsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GapminderJsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GapminderJsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
