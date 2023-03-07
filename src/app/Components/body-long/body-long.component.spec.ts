import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyLongComponent } from './body-long.component';

describe('BodyLongComponent', () => {
  let component: BodyLongComponent;
  let fixture: ComponentFixture<BodyLongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyLongComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BodyLongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
