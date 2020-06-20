import { Component,Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

declare var Plotly: any;
export interface DialogData {
  animal: string;
  name: string;
}
@Component({
  selector: 'app-general-plotly',
  templateUrl: './general-plotly.component.html',
  styleUrls: ['./general-plotly.component.css']
})
export class GeneralPlotlyComponent implements OnInit {

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
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

    const data = [
      { x: [1, 2, 3, 4, 5],
        y: [1, 2, 4, 8, 16],
        name: "first" 

      },
       
      { x: [2, 2, 6, 4, 5],
        y: [1, 1, 2, 3, 10],
        name: "second"
      
      },

  ];
    // this.chartData = data;

    const style = {
      margin: { t: 0 }
    };

    Plotly.plot( element, data, style);
  }


  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}