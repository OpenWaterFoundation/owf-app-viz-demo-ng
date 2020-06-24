import { Component,Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { EventEmitterService } from '../../event-emitter.service';    


declare var Plotly: any;

@Component({
  selector: 'app-general-plotly',
  templateUrl: './general-plotly.component.html',
  styleUrls: ['./general-plotly.component.css']
})
export class GeneralPlotlyComponent implements OnInit {

  constructor(public dialog: MatDialog, private eventEmitterService: EventEmitterService ) {}
  // Step 3: Subscrived the "invoceFirstComponentFunction" event emitter serves and called firstFunction method
  ngOnInit() { 
    console.log("Inside ngOnInit:")   
    if (this.eventEmitterService.subsVar==undefined) {  
      console.log("Inside if statement: ")  
      this.eventEmitterService.subsVar = this.eventEmitterService.    
      invokeFirstComponentFunction.subscribe((name:string) => {    
        this.openDialog();    
      });    
    }    
  }    
    

  openDialog(): void {
    console.log("Entered openDialog Function")
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      height: '650px',
      width: '1000px',
     
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     
    });
  }
 
  

}
@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'modal-content.html',
})
export class DialogOverviewExampleDialog implements OnInit  {

  ngOnInit() {
    this.basicChart();
  }

  basicChart(){
    const element = document.getElementById("chart") as HTMLDivElement;
    console.log("Element: ", element);

 

    Plotly.d3.csv("https://raw.githubusercontent.com/plotly/datasets/master/finance-charts-apple.csv", function(err, rows){

    function unpack(rows, key) {
    return rows.map(function(row) { return row[key]; });
    }


    var trace1 = {
      type: "scatter",
      mode: "lines",
      x: unpack(rows, 'Date'),
      y: unpack(rows, 'AAPL.High'),
      line: {color: '#17BECF'}
    }

    var trace2 = {
      type: "scatter",
      mode: "lines",
      x: unpack(rows, 'Date'),
      y: unpack(rows, 'AAPL.Low'),
      line: {color: '#7F7F7F'}
    }

    var data = [trace1,trace2];

    var layout = {
      title: 'Custom Range',
      xaxis: {
        range: ['2016-07-01', '2016-12-31'],
        type: 'date'
      },
      yaxis: {
        autorange: true,
        range: [86.8700008333, 138.870004167],
        type: 'linear'
      }
    };

    Plotly.plot( element, data, layout);
    })


        
  }


  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>
   ) {}

 

}