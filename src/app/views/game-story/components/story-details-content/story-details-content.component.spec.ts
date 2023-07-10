import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryDetailsContentComponent } from './story-details-content.component';

describe('StoryDetailsContentComponent', () => {
  let component: StoryDetailsContentComponent;
  let fixture: ComponentFixture<StoryDetailsContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StoryDetailsContentComponent]
    });
    fixture = TestBed.createComponent(StoryDetailsContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
