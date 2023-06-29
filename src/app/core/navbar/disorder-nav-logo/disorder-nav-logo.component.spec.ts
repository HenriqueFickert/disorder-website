import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisorderNavLogoComponent } from './disorder-nav-logo.component';

describe('DisorderNavLogoComponent', () => {
  let component: DisorderNavLogoComponent;
  let fixture: ComponentFixture<DisorderNavLogoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisorderNavLogoComponent]
    });
    fixture = TestBed.createComponent(DisorderNavLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
