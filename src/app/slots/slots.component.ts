import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SlotObjects } from '../app.component';
import { SlotService } from '../service/slot.service'

@Component({
  selector: 'app-slots',
  templateUrl: './slots.component.html',
  styleUrls: ['./slots.component.css']
})
export class SlotsComponent implements OnInit {
  slots: SlotObjects[] = [];

  constructor(
    private slotService: SlotService,
    private router: Router
  ) {
    this.slots = JSON.parse(this.getSlots());
  }

  ngOnInit(): void {

  }

  // Getting Slot Objects in Component
  getSlots(){
    return localStorage.getItem('slots');
  }

  // Route to User-detail form screen with slot id
  bookSlot(id){
    this.slotService.selectedId.next(id);
    localStorage.setItem('id', id);
    this.router.navigate(['/user']);
  }
}

