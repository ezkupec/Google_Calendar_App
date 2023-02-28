import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleSharingComponent } from './people-sharing.component';

describe('PeopleSharingComponent', () => {
  let component: PeopleSharingComponent;
  let fixture: ComponentFixture<PeopleSharingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeopleSharingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeopleSharingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
