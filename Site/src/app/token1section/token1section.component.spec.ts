import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Token1sectionComponent } from './token1section.component';

describe('Token1sectionComponent', () => {
  let component: Token1sectionComponent;
  let fixture: ComponentFixture<Token1sectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Token1sectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Token1sectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
