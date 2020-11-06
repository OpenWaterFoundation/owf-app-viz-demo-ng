import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogShowdownComponent } from './dialog-showdown.component';

describe('DialogShowdownComponent', () => {
  let component: DialogShowdownComponent;
  let fixture: ComponentFixture<DialogShowdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogShowdownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogShowdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
