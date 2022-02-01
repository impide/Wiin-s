import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TroisiemSectionComponent } from './troisiem-section.component';

describe('TroisiemSectionComponent', () => {
  let component: TroisiemSectionComponent;
  let fixture: ComponentFixture<TroisiemSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TroisiemSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TroisiemSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
