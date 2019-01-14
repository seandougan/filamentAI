import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-chat-bubble',
  templateUrl: './chat-bubble.component.html',
  styleUrls: ['./chat-bubble.component.css']
})

export class ChatBubbleComponent implements OnInit {

  constructor() { }

  isCollapsed = true;

  @Output() viewState: EventEmitter<boolean> = new EventEmitter<boolean>();

  ngOnInit() {
  }
  viewStateOutput() {
    this.viewState.emit(this.isCollapsed);
  }

 public toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
    this.viewStateOutput();
  }
}
