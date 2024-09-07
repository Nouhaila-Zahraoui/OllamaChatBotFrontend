// chat.component.ts
import { Component } from '@angular/core';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import {ChatService} from '../../services/chat.service';
interface Message {
  author: 'user' | 'bot';
  content: string;
}
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  value: string = ''; // Input field value
  messages = [{ author: 'bot', content: 'Welcome to ChatCat!' }];
  faPaperPlane = faPaperPlane; // Assign the icon to a class property


  constructor(private chatService: ChatService) {}

  sendMessage() {
    if (this.value.trim()) {
      // Add the user's message to the chat
      this.messages.push({ author: 'user', content: this.value });

      // Call the backend API
      this.chatService.generateResponse(this.value).subscribe(
        (response) => {
          // Add the bot's response to the chat
          this.messages.push({ author: 'bot', content: response.generation });
        },
        (error) => {
          console.error('Error fetching response from backend:', error);
        }
      );

      // Clear the input field
      this.value = '';
    }
  }
}
