import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembersContentComponent } from './members-content.component';

describe('MembersContentComponent', () => {
  let component: MembersContentComponent;
  let fixture: ComponentFixture<MembersContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MembersContentComponent]
    });
    fixture = TestBed.createComponent(MembersContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
