import { Injectable, EventEmitter } from '@angular/core';
// import { Subscription } from 'rxjs/internal/Subscription'; 
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventEmitterService {

  // invokeFirstComponentFunction = new EventEmitter();    
  invokeComponentFunction = new EventEmitter();    
  invokeSnodasComponentFunction = new EventEmitter();    
  invokeHeatMapComponentFunction = new EventEmitter();    
  invokeTSToolComponentFunction = new EventEmitter(); 

  invokeChartjsGenericComponentFunction = new EventEmitter(); 
  invokeChartjsSnodasComponentFunction = new EventEmitter();    
  invokeChartjsTSToolComponentFunction = new EventEmitter(); 


  subsVar: Subscription;    
    
  constructor() { }    
    
  // Step 2: Method to emit the event and subsVar that will be used later in event subscription
  genericPlotlyChartClick() { 
    console.log("Inside the onFirtComponentButtonClick function in EventEmitter service")   
    this.invokeComponentFunction.emit();    
    // this.invokegenericPlotlyDemoFunction.emit();    

  }    
 
  SnodasPlotlyChartClick() { 
    console.log("Step 2 Snodas--> should invokeSnodasComponent function")   
    this.invokeSnodasComponentFunction.emit();    
    // this.invokegenericPlotlyDemoFunction.emit();    

  }    
  HeatMapPlotlyChartClick() { 
    console.log("Step 2 HeatMap--> should invokeHeatMapComponent function")   
    this.invokeHeatMapComponentFunction.emit();    
    // this.invokegenericPlotlyDemoFunction.emit();    

  }    
  TSToolConfigPlotlyChartClick() { 
    console.log("Step 2 Plotly TSTool--> should invokeTSToolComponent function")   
    this.invokeTSToolComponentFunction.emit();    
    // this.invokegenericPlotlyDemoFunction.emit();    

  } 
  
  genericChartJSClick() { 
    console.log("Inside the onFirtComponentButtonClick function in EventEmitter service")   
    this.invokeChartjsGenericComponentFunction.emit();    
    // this.invokegenericPlotlyDemoFunction.emit();    

  }    
  SnodasChartJSClick() { 
    console.log("Step 2 Snodas chartjs--> should invokeSnodasComponent function")   
    this.invokeChartjsSnodasComponentFunction.emit();    
    // this.invokegenericPlotlyDemoFunction.emit();    

  } 

  TSToolConfigChartJSClick() { 
    console.log("Step 2 Plotly TSTool--> should invokeTSToolComponent function")   
    this.invokeChartjsTSToolComponentFunction.emit();    
    // this.invokegenericPlotlyDemoFunction.emit();    

  }    
}
