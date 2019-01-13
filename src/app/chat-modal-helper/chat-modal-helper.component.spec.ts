import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatModalHelperComponent } from './chat-modal-helper.component';

describe('ChatModalHelperComponent', () => {
  let component: ChatModalHelperComponent;
  let fixture: ComponentFixture<ChatModalHelperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatModalHelperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatModalHelperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
