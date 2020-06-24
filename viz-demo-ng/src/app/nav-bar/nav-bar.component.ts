import { Component, OnInit } from '@angular/core';
import { EventEmitterService } from '../event-emitter.service';    


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  // constructor(private gplotly: GeneralPlotlyComponent) { }

  // navbarOpen(): void{
  //   this.gplotly.openDialog();
  // }
  constructor( private eventEmitterService: EventEmitterService ) { }

  //Step 1: first (plotly) component function call
  firstComponentFunction(){  
    console.log('Inside firstComponentFunction call: ')  
    this.eventEmitterService.onFirstComponentButtonClick();    
  }

  ngOnInit(): void {
  }

}
