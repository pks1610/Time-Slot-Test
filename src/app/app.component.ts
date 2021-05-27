import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'time-slot-test';

  slots: SlotObjects[] = [];

  constructor(){
    // Initial Slot objects
    this.slots = [
      {
        id: 1,
        slot: '9:00 AM',
        isBooked: false,
        user: {}
      },
      {
        id: 2,
        slot: '10:00 AM',
        isBooked: false,
        user: {}
      },
      {
        id: 3,
        slot: '11:00 AM',
        isBooked: false,
        user: {}
      },
      {
        id: 4,
        slot: '12:00 PM',
        isBooked: false,
        user: {}
      },
      {
        id: 5,
        slot: '1:00 PM',
        isBooked: false,
        user: {}
      },
      {
        id: 6,
        slot: '2:00 PM',
        isBooked: false,
        user: {}
      },
      {
        id: 7,
        slot: '3:00 PM',
        isBooked: false,
        user: {}
      },
      {
        id: 8,
        slot: '4:00 PM',
        isBooked: false,
        user: {}
      },
      {
        id: 9,
        slot: '5:00 PM',
        isBooked: false,
        user: {}
      },
    ]

    // Setting slots to localstorage
    if(localStorage.getItem('slots')){
      console.log('slots have');
    }else{
      localStorage.setItem('slots', JSON.stringify(this.slots));
    }
  }

}

export class SlotObjects{
  id: number;
  slot: string;
  isBooked: boolean;
  user: {}
}