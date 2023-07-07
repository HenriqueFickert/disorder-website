import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamBannerComponent } from './team-banner.component';

describe('TeamBannerComponent', () => {
  let component: TeamBannerComponent;
  let fixture: ComponentFixture<TeamBannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeamBannerComponent]
    });
    fixture = TestBed.createComponent(TeamBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
