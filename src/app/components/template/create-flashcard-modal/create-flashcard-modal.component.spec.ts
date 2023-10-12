import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFlashcardModalComponent } from './create-flashcard-modal.component';

describe('CreateFlashcardModalComponent', () => {
  let component: CreateFlashcardModalComponent;
  let fixture: ComponentFixture<CreateFlashcardModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateFlashcardModalComponent]
    });
    fixture = TestBed.createComponent(CreateFlashcardModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
