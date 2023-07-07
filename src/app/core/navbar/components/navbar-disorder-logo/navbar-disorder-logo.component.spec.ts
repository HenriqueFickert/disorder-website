import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarDisorderLogo } from './navbar-disorder-logo.component';

describe('NavbarDisorderLogo', () => {
  let component: NavbarDisorderLogo;
  let fixture: ComponentFixture<NavbarDisorderLogo>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarDisorderLogo]
    });
    fixture = TestBed.createComponent(NavbarDisorderLogo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
