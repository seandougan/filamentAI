import {Component, OnInit} from '@angular/core';
import * as $ from 'jquery';


@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.css']
})
export class ChatBoxComponent implements OnInit {
  constructor() {
  }
  ngOnInit() {
  }

  writeMessage(message: string) {
    $('.chat-history').append('<h5>Rob Minford</h5>' + message + '</br></br>');
    setTimeout(function() {
      $('.chat-history').append('<div class="chat-message clearfix"><h5>Bat-Mate</h5><img src="./assets/img/batman_avatar.svg"' +
        'class="avatar" float="left"><p class="bat_paragraph"> Ok, Great!</p></div></div></br></br></br>');
      $('img.avatar').css({'background-color': 'skyblue',
        'height' : '50px', 'width' : '50px', 'border-radius' : '100%', 'border' : 'solid 5px #1f63d1' });
      $('p.bat_paragraph').css({'background-color': '#1f63d1', 'color': 'white', 'font-weight': 'bold',
      'font-family': 'helvetica', 'font-size': '1.2em', 'float': 'right'});
    }, 1000);
    $('#MessengerInput').val('');
  }
}
