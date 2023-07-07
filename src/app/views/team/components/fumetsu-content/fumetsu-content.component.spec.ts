import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FumetsuContentComponent } from './fumetsu-content.component';

describe('FumetsuContentComponent', () => {
  let component: FumetsuContentComponent;
  let fixture: ComponentFixture<FumetsuContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FumetsuContentComponent]
    });
    fixture = TestBed.createComponent(FumetsuContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
