import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatBubbleComponent } from './chat-bubble/chat-bubble.component';
import { ChatBoxComponent } from './chat-box/chat-box.component';
import { ChatModalHelperComponent } from './chat-modal-helper/chat-modal-helper.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatBubbleComponent,
    ChatBoxComponent,
    ChatModalHelperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
