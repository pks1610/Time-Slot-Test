import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { SlotObjects } from '../app.component';
import { SlotService } from '../service/slot.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  slotId: any;
  selectedSlot: SlotObjects[] = [];
  allSlots: SlotObjects[] = [];
  firstName: string;
  lastName: string;
  mob: any;

  constructor(
    private slotService: SlotService,
    private router: Router
  ) {
    // Getting all slots
    this.allSlots = JSON.parse(localStorage.getItem('slots'));

    // Getting selected slot id
    this.slotService.selectedId.subscribe(value => {
      this.slotId = value;
    }); 

    // Getting Selected slot
    this.selectedSlot = this.allSlots.filter(item => {
      if(item.id == this.slotId){
        return item;
      }
    })
  }

  ngOnInit(): void {
    this.setData();
  }

  setData(){
    if(this.selectedSlot[0].user){
      this.firstName = this.selectedSlot[0].user['fName'];
      this.lastName = this.selectedSlot[0].user['lName'];
      this.mob = this.selectedSlot[0].user['mobile'];
    }
    
  }

  saveSlot(form: NgForm){
    let fN, lN, mob;
    if(form.controls['fName'].value){
      fN = form.controls['fName'].value;
    }else{
      fN = this.firstName;
    }
    if(form.controls['lName'].value){
      lN = form.controls['lName'].value;
    }else{
      lN = this.lastName;
    }
    if(form.controls['mobile'].value){
      mob = form.controls['mobile'].value;
    }else{
      mob = this.mob;
    }
    let data = {
      fName: fN,
      lName: lN,
      mobile: mob
    }
    this.selectedSlot[0].user = data;
    this.selectedSlot[0].isBooked = true;
    let newSlots = this.allSlots.map(item => {
      if(item.id == this.slotId){
        return this.selectedSlot[0];
      }else{
        return item;
      }
    });
    localStorage.setItem('slots', JSON.stringify(newSlots));
    this.router.navigate(['/']);
  }

  cancel(){
    this.router.navigate(['/']);
  }
}
