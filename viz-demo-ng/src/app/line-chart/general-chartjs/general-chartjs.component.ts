import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';



@Component({
  selector: 'app-general-chartjs',
  templateUrl: './general-chartjs.component.html',
  styleUrls: ['./general-chartjs.component.css']
})
export class GeneralChartjsComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    // this.openDialog();
  }

  // openDialog(): void {
  //   console.log("Entered openDialog Function")
  //   const dialogRef = this.dialog.open(GenChartJSDialog, {
  //     height: '650px',
  //     width: '1000px',
     
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');
     
  //   });
  // }

  // Simple Line chart  Containter [Start]
  
  public lineChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
    // pan and zoom
    plugins: {
      zoom: {
        pan: {
          enabled: true,
          mode: 'x',
          rangeMin: {
            x: '2006'
          },
          rangeMax: {
            x: '2012'
          },
        },
        zoom: {
          enabled: true,
          mode: 'x',
          rangeMin: {
            x: '2006'
          },
          rangeMax: {
            x: '2012'
          },
          speed: .1,
        }
      },
    }
    
  };

  public lineChartLabels = [ '2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public lineChartType = 'line';
  public lineChartLegend = true;

  public lineChartData = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
  ];

  // Container [End]



}

@Component({
  selector:'gen-chartjs-dialog',
  templateUrl: 'gen-chartjs-dialog-content.html'
})

export class GenChartJSDialog {
//   // implements OnInit
//   // ngOnInit() {

//   // }
  
  public lineChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
    // pan and zoom
    plugins: {
      zoom: {
        pan: {
          enabled: true,
          mode: 'x',
          rangeMin: {
            x: '2006'
          },
          rangeMax: {
            x: '2012'
          },
        },
        zoom: {
          enabled: true,
          mode: 'x',
          rangeMin: {
            x: '2006'
          },
          rangeMax: {
            x: '2012'
          },
          speed: .1,
        }
      },
    }
    
  };

  public lineChartLabels = [ '2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public lineChartType = 'line';
  public lineChartLegend = true;

  public lineChartData = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
  ];

}