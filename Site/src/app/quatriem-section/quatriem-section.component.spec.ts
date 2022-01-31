import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuatriemSectionComponent } from './quatriem-section.component';

describe('QuatriemSectionComponent', () => {
  let component: QuatriemSectionComponent;
  let fixture: ComponentFixture<QuatriemSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuatriemSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuatriemSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
