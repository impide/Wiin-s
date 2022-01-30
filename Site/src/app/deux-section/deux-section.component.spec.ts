import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeuxSectionComponent } from './deux-section.component';

describe('DeuxSectionComponent', () => {
  let component: DeuxSectionComponent;
  let fixture: ComponentFixture<DeuxSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeuxSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeuxSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
