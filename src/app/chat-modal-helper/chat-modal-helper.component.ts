import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-modal-helper',
  templateUrl: './chat-modal-helper.component.html',
  styleUrls: ['./chat-modal-helper.component.css']
})
export class ChatModalHelperComponent implements OnInit {

  isOpen = true;
  constructor() { }

  ngOnInit() {
  }

  close(){
    this.isOpen = !this.isOpen;
  }
}
