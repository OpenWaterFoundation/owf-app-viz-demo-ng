import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { EventEmitterService } from '../../event-emitter.service';    


declare var Plotly: any;

@Component({
  selector: 'app-heatmap',
  templateUrl: './heatmap.component.html',
  styleUrls: ['./heatmap.component.css']
})
export class HeatmapComponent implements OnInit {

  constructor(public dialog: MatDialog, private eventEmitterService: EventEmitterService) { }

  ngOnInit(): void {
    this.openDialog();
    if (this.eventEmitterService.subsVar==undefined) { 
      console.log("Step3: HeatMap Function call openDialog") 
      this.eventEmitterService.subsVar = this.eventEmitterService.    
      invokeHeatMapComponentFunction.subscribe((name:string) => {    
        this.openDialog();    
      });    
    }    
  }

  openDialog(): void {
    console.log("Entered openDialog Function")
    const dialogRef = this.dialog.open(HeatmapDialog, {
      height: '650px',
      width: '1000px',
     
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     
    });
  }
//   basicHeatmap(){
//     const element = document.getElementById("chart") as HTMLDivElement;

//     // var data = [
//     //   {
//     //     z: [[1, null, 30, 50, 1], [20, 1, 60, 80, 30], [30, 60, 1, -10, 20]],
//     //     x: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
//     //     y: ['Morning', 'Afternoon', 'Evening'],
//     //     type: 'heatmap',
//     //     hoverongaps: false
//     //   }
//     // ];
//     var xValues = ['A', 'B', 'C', 'D', 'E'];

// var yValues = ['W', 'X', 'Y', 'Z'];

// var zValues = [
//   [0.00, 0.00, 0.75, 0.75, 0.00],
//   [0.00, 0.00, 0.75, 0.75, 0.00],
//   [0.75, 0.75, 0.75, 0.75, 0.75],
//   [0.00, 0.00, 0.00, 0.75, 0.00]
// ];

// var colorscaleValue = [
//   [0, '#3D9970'],
//   [1, '#001f3f']
// ];

// var data = [{
//   x: xValues,
//   y: yValues,
//   z: zValues,
//   type: 'heatmap',
//   colorscale: colorscaleValue,
//   showscale: false
// }];

// var layout = {
//   title: 'Annotated Heatmap',
//   annotations: [],
//   xaxis: {
//     ticks: '',
//     side: 'top'
//   },
//   yaxis: {
//     ticks: '',
//     ticksuffix: ' ',
//     width: 700,
//     height: 700,
//     autosize: false
//   }
// };

// for ( var i = 0; i < yValues.length; i++ ) {
//   for ( var j = 0; j < xValues.length; j++ ) {
//     var currentValue = zValues[i][j];
//     if (currentValue != 0.0) {
//       var textColor = 'white';
//     }else{
//       var textColor = 'black';
//     }
//     var result = {
//       xref: 'x1',
//       yref: 'y1',
//       x: xValues[j],
//       y: yValues[i],
//       text: zValues[i][j],
//       font: {
//         family: 'Arial',
//         size: 12,
//         color: 'rgb(50, 171, 96)'
//       },
//       showarrow: false,
//       // font: {
//       //   color: textColor
//       // }
//     };
//     layout.annotations.push(result);
//   }
// }

// // Plotly.newPlot('myDiv', data, layout);
    
//     Plotly.newPlot(element, data, layout);
//   }
}

@Component({
  selector:'heatmap-dialog',
  templateUrl: 'heatmap-dialog-content.html'
})

export class HeatmapDialog implements OnInit{

  constructor( public dialogRef: MatDialogRef<HeatmapDialog>) { }
  ngOnInit() {
    this.basicHeatmap();
  }

  /**
  * Closes the Mat Dialog popup when the Close button is clicked.
  */
 onClose(): void { this.dialogRef.close(); }

  basicHeatmap(){
    const element = document.getElementById("chart") as HTMLDivElement;
    console.log('Element: ', element);

    // var data = [
    //   {
    //     z: [[1, null, 30, 50, 1], [20, 1, 60, 80, 30], [30, 60, 1, -10, 20]],
    //     x: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    //     y: ['Morning', 'Afternoon', 'Evening'],
    //     type: 'heatmap',
    //     hoverongaps: false
    //   }
    // ];
    var xValues = ['A', 'B', 'C', 'D', 'E'];

    var yValues = ['W', 'X', 'Y', 'Z'];

    var zValues = [
      [0.00, 0.00, 0.75, 0.75, 0.00],
      [0.00, 0.00, 0.75, 0.75, 0.00],
      [0.75, 0.75, 0.75, 0.75, 0.75],
      [0.00, 0.00, 0.00, 0.75, 0.00]
    ];

    var colorscaleValue = [
      [0, '#3D9970'],
      [1, '#001f3f']
    ];

    var data = [{
      x: xValues,
      y: yValues,
      z: zValues,
      type: 'heatmap',
      colorscale: colorscaleValue,
      showscale: false
    }];

    var layout = {
      title: 'Annotated Heatmap',
      annotations: [],
      xaxis: {
        ticks: '',
        side: 'top'
      },
      yaxis: {
        ticks: '',
        ticksuffix: ' ',
        width: 700,
        height: 700,
        autosize: false
      }
    };

    for ( var i = 0; i < yValues.length; i++ ) {
      for ( var j = 0; j < xValues.length; j++ ) {
        var currentValue = zValues[i][j];
        if (currentValue != 0.0) {
          var textColor = 'white';
        }else{
          var textColor = 'black';
        }
        var result = {
          xref: 'x1',
          yref: 'y1',
          x: xValues[j],
          y: yValues[i],
          text: zValues[i][j],
          font: {
            family: 'Arial',
            size: 12,
            color: 'rgb(50, 171, 96)'
          },
          showarrow: false,
          // font: {
          //   color: textColor
          // }
        };
        layout.annotations.push(result);
      }
    } 
    Plotly.newPlot(element, data, layout);
  }
}