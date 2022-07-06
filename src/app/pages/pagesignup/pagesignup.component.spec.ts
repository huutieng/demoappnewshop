import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesignupComponent } from './pagesignup.component';

describe('PagesignupComponent', () => {
  let component: PagesignupComponent;
  let fixture: ComponentFixture<PagesignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagesignupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagesignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
