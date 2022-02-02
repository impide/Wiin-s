import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextStep2sectionComponent } from './next-step2section.component';

describe('NextStep2sectionComponent', () => {
  let component: NextStep2sectionComponent;
  let fixture: ComponentFixture<NextStep2sectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NextStep2sectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NextStep2sectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
