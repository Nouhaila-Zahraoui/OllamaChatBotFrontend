import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http';
export class Message {
  constructor(public author: string, public content: string) {}
}
@Injectable({
  providedIn: 'root',  // This makes the service available application-wide
})
export class ChatService {
  audioFile = new Audio(
    'https://s3-us-west-2.amazonaws.com/s.cdpn.io/3/success.mp3'
  );
  private apiUrl = 'http://localhost:8080/ai/generate'; // Update this to your backend URL

  constructor(private http: HttpClient) {}

  conversation = new Subject<Message[]>();

  messageMap = {
    Hi: 'Hello',
    default: 'I can not understand. Can you please repeat'
  };

  generateResponse(message: string): Observable<any> {
    let params = new HttpParams().set('message', message);
    return this.http.get<any>(this.apiUrl, { params });
  }

  playFile() {
    this.audioFile.play();
  }


}
