import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameStoryBannerComponent } from './game-story-banner.component';

describe('GameStoryBannerComponent', () => {
  let component: GameStoryBannerComponent;
  let fixture: ComponentFixture<GameStoryBannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GameStoryBannerComponent]
    });
    fixture = TestBed.createComponent(GameStoryBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
