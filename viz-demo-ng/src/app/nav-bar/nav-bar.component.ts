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
  genericPlotlyDemoFunction(){  
  // firstComponentFunction(){  
    console.log('Inside firstComponentFunction call: ')  
    // this.eventEmitterService.onFirstComponentButtonClick();   
    this.eventEmitterService.genericPlotlyChartClick();  
  }
  SnodasPlotlyDemoFunction(){  
    console.log("Step 1: Event emitter SNODAS");  
    this.eventEmitterService.SnodasPlotlyChartClick();  
  }

  HeatMapPlotlyDemoFunction(){    
    this.eventEmitterService.HeatMapPlotlyChartClick();  
  }
  TSToolConfigPlotlyDemoFunction(){    
    this.eventEmitterService.TSToolConfigPlotlyChartClick();  
  }
  SnodasChartjsDemoFunction(){  
    console.log("Step 1: Event emitter SNODAS");  
    this.eventEmitterService.SnodasChartjsChartClick();  
  }
  ngOnInit(): void {
  }

}
