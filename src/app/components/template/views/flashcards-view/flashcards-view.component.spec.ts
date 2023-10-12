import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlashcardsViewComponent } from './flashcards-view.component';

describe('FlashcardsViewComponent', () => {
  let component: FlashcardsViewComponent;
  let fixture: ComponentFixture<FlashcardsViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FlashcardsViewComponent]
    });
    fixture = TestBed.createComponent(FlashcardsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
