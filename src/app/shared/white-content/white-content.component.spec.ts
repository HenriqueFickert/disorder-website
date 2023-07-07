import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhiteContentComponent } from './white-content.component';

describe('WhiteContentComponent', () => {
  let component: WhiteContentComponent;
  let fixture: ComponentFixture<WhiteContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WhiteContentComponent]
    });
    fixture = TestBed.createComponent(WhiteContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
