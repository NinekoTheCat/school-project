import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WinnerDialogueComponent } from './winner-dialogue.component';

describe('WinnerDialogueComponent', () => {
  let component: WinnerDialogueComponent;
  let fixture: ComponentFixture<WinnerDialogueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WinnerDialogueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WinnerDialogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
