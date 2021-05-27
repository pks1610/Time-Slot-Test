import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SlotService {


  selectedId = new BehaviorSubject(localStorage.getItem('id'));

  constructor() { }
}
