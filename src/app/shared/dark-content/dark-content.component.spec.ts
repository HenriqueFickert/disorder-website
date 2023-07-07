import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DarkContentComponent } from './dark-content.component';

describe('DarkContentComponent', () => {
  let component: DarkContentComponent;
  let fixture: ComponentFixture<DarkContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DarkContentComponent]
    });
    fixture = TestBed.createComponent(DarkContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
