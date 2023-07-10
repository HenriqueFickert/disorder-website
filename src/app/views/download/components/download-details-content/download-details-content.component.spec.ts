import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadDetailsContentComponent } from './download-details-content.component';

describe('DownloadDetailsContentComponent', () => {
  let component: DownloadDetailsContentComponent;
  let fixture: ComponentFixture<DownloadDetailsContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DownloadDetailsContentComponent]
    });
    fixture = TestBed.createComponent(DownloadDetailsContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
