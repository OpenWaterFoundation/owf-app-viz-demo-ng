import { Component, OnInit } from '@angular/core';
import { EventEmitterService } from '../event-emitter.service';  
import { 
  MatDialog,
  MatDialogRef,
  MatDialogConfig,
  MAT_DIALOG_DATA } from '@angular/material/dialog'; 

  import { DialogShowdownComponent }       from '../dialog-content/dialog-showdown/dialog-showdown.component';



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
  constructor(  public dialog: MatDialog,
                private eventEmitterService: EventEmitterService ) { }

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
  TSToolPointLineFunction(){    
    this.eventEmitterService.TSToolPointLineClick();  
  }

  genericChartjsDemoFunction(){  
    // firstComponentFunction(){  
      console.log('Inside firstComponentFunction call: ')  
      // this.eventEmitterService.onFirstComponentButtonClick();   
      this.eventEmitterService.genericChartJSClick();  
    }
  SnodasChartjsDemoFunction(){  
    console.log("Step 1: Event emitter SNODAS");  
    this.eventEmitterService.SnodasChartJSClick();  
  }

  TSToolConfigChartjsDemoFunction(){    
    this.eventEmitterService.TSToolConfigChartJSClick();  
  }
  
  showdownTableFunction(){    
    console.log("Step 1: Event emitter Showdown Table"); 
    this.eventEmitterService.showdownTableClick();  
  }

  showdownImgFunction(){
    console.log("Step 1: Event emitter Showdown Img"); 
    this.eventEmitterService.showdownImgClick();
  }

  showdownOptionsFunction(){
    console.log("Step 1: Event emitter Showdown Img"); 
    this.eventEmitterService.showdownOptionsClick();
  }

  showdownCSSFunction(){
    console.log("Step 1: Event emitter Showdown CSS"); 
    this.eventEmitterService.showdownCSSClick();
  }

  genericHighchartsFunction(){
    console.log("Step 1: Event emitter generic highcharts "); 
    this.eventEmitterService.genericHighchartsClick();
  }
  snodasHighchartsFunction(){
    console.log("Step 1: Event emitter snodas highcharts"); 
    this.eventEmitterService.snodasHighchartsClick();
  }
  tstoolHighchartsFunction(){
    console.log("Step 1: Event emitter tstool highcharts"); 
    this.eventEmitterService.tstoolHighchartsClick();
  }

  ngOnInit(): void {
  }


  openShowdownDialog(dialog: any, text: any, resourcePath: string){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      text: text,
      resourcePath: resourcePath
    }

    const dialogRef: MatDialogRef<DialogShowdownComponent, any> = dialog.open(DialogShowdownComponent, {
      data: dialogConfig,
      // This stops the dialog from containing a backdrop, which means the background opacity is set to 0, and the
      // entire Info Mapper is still navigable while having the dialog open. This way, you can have multiple dialogs
      // open at the same time.
      hasBackdrop: false,
      panelClass: ['custom-dialog-container', 'mat-elevation-z20'],
      height: "750px",
      width: "900px",
      minHeight: "600px",
      minWidth: "410px",
      maxHeight: "90vh",
      maxWidth: "90vw"
    });

  }

}
