import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Token2sectionComponent } from './token2section.component';

describe('Token2sectionComponent', () => {
  let component: Token2sectionComponent;
  let fixture: ComponentFixture<Token2sectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Token2sectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Token2sectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
