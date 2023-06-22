import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  chatMessages: any;
  
  constructor() {
    this.chatMessages =[
      {
        "id": 101,
        "userid": 1,
        "name": "James Antony",
        "message": "Hello, how are you?",
        "time": "10:45"
      },
      {
        "id": 102,
        "userid": 2,
        "name": "John Doe",
        "message": "I'm doing great, thanks!",
        "time": "11:30"
      },
      {
        "id": 103,
        "userid": 1,
        "name": "James Antony",
        "message": "What's your plan today?",
        "time": "12:15"
      },
      {
        "id": 104,
        "userid": 2,
        "name": "John Doe",
        "message": "Let's meet for lunch.",
        "time": "13:00"
      },
      {
        "id": 105,
        "userid": 1,
        "name": "James Antony",
        "message": "Can you help me with this?",
        "time": "13:45"
      },
      {
        "id": 106,
        "userid": 2,
        "name": "John Doe",
        "message": "I need some advice, please.",
        "time": "14:30"
      },
      {
        "id": 107,
        "userid": 1,
        "name": "James Antony",
        "message": "Let's go on a road trip!",
        "time": "15:15"
      },
      {
        "id": 108,
        "userid": 2,
        "name": "John Doe",
        "message": "I'm excited for the party!",
        "time": "16:00"
      },
      {
        "id": 109,
        "userid": 1,
        "name": "James Antony",
        "message": "The weather is beautiful today.",
        "time": "16:45"
      },
      {
        "id": 110,
        "userid": 2,
        "name": "John Doe",
        "message": "Let's grab a cup of coffee.",
        "time": "17:30"
      },
      {
        "id": 111,
        "userid": 1,
        "name": "James Antony",
        "message": "I had a wonderful day!",
        "time": "18:15"
      },
      {
        "id": 112,
        "userid": 2,
        "name": "John Doe",
        "message": "Can't wait for the weekend!",
        "time": "19:00"
      },
      {
        "id": 113,
        "userid": 1,
        "name": "James Antony",
        "message": "The concert was amazing!",
        "time": "19:45"
      },
      {
        "id": 114,
        "userid": 2,
        "name": "John Doe",
        "message": "Have a great day ahead!",
        "time": "20:30"
      },
      {
        "id": 115,
        "userid": 1,
        "name": "James Antony",
        "message": "Let's go for a walk.",
        "time": "21:15"
      }
    ];    
  }

}
