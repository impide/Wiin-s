import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextStep1sectionComponent } from './next-step1section.component';

describe('NextStep1sectionComponent', () => {
  let component: NextStep1sectionComponent;
  let fixture: ComponentFixture<NextStep1sectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NextStep1sectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NextStep1sectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
