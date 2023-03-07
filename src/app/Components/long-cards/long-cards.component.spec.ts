import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LongCardsComponent } from './long-cards.component';

describe('LongCardsComponent', () => {
  let component: LongCardsComponent;
  let fixture: ComponentFixture<LongCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LongCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LongCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
