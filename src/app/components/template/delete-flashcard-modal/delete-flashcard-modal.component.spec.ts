import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteFlashcardModalComponent } from './delete-flashcard-modal.component';

describe('DeleteFlashcardModalComponent', () => {
  let component: DeleteFlashcardModalComponent;
  let fixture: ComponentFixture<DeleteFlashcardModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteFlashcardModalComponent]
    });
    fixture = TestBed.createComponent(DeleteFlashcardModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
