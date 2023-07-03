import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameStoryComponent } from './game-story.component';

describe('GameStoryComponent', () => {
  let component: GameStoryComponent;
  let fixture: ComponentFixture<GameStoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GameStoryComponent]
    });
    fixture = TestBed.createComponent(GameStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
