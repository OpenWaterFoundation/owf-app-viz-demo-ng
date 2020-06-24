import { Injectable, EventEmitter } from '@angular/core';
// import { Subscription } from 'rxjs/internal/Subscription'; 
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventEmitterService {

  invokeFirstComponentFunction = new EventEmitter();    
  subsVar: Subscription;    
    
  constructor() { }    
    
  // Step 2: Method to emit the event and subsVar that will be used later in event subscription
  onFirstComponentButtonClick() { 
    console.log("Inside the onFirtComponentButtonClick function in EventEmitter service")   
    this.invokeFirstComponentFunction.emit();    
  }    
 
}
