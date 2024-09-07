import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ChatComponent } from './components/chat/chat.component';
import {ChatService} from './services/chat.service';
import { FormsModule } from '@angular/forms';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { CatChatComponent } from './components/catchat/catchat.component';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';  // Import FormsModule



@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    CatChatComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FontAwesomeModule,
    AppRoutingModule,
    HttpClientModule // Add HttpClientModule to imports

  ],
  exports: [
    ChatComponent
  ],
  providers: [
    ChatService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
