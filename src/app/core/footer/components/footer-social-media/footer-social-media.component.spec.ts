import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterSocialMedia } from './footer-social-media.component';

describe('SocialMediaComponent', () => {
  let component: FooterSocialMedia;
  let fixture: ComponentFixture<FooterSocialMedia>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooterSocialMedia]
    });
    fixture = TestBed.createComponent(FooterSocialMedia);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
