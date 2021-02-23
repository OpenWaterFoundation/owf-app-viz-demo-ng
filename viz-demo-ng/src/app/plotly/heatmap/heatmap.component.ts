import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { EventEmitterService } from '../../event-emitter.service';  
import * as $ from "jquery";
import { Papa } from 'ngx-papaparse';  


declare var Plotly: any;

@Component({
  selector: 'app-heatmap',
  // templateUrl: './heatmap.component.html',
  templateUrl: '../../generic-content/generic-content.component.html',
  styleUrls: ['./heatmap.component.css']
})
export class HeatmapComponent implements OnInit {

  constructor(public dialog: MatDialog, private eventEmitterService: EventEmitterService) { }

  ngOnInit(): void {
    this.openHeatmapDialog();
    // if (this.eventEmitterService.subsVar==undefined) { 
    //   console.log("Step3: HeatMap Function call openDialog") 
    //   this.eventEmitterService.subsVar = this.eventEmitterService.    
    //   invokeHeatMapComponentFunction.subscribe(() => {    
    //     this.openHeatmapDialog();    
    //   });    
    // }    
  }

  openHeatmapDialog(): void {
    const dialogRef = this.dialog.open(HeatmapDialog, {
      height: '650px',
      width: '1000px',
     
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     
    });
  }

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
    const element = document.getElementById("heatmap-chart") as HTMLDivElement;

  
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

@Component({
  selector: 'app-heatmap2',
  // templateUrl: './heatmap2.component.html'
  // templateUrl: './heatmap.component.html'
  templateUrl: '../../generic-content/generic-content.component.html'
 
})
export class Heatmap2Component implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.openDialog();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(Heatmap2Dialog, {
      height: '650px',
      width: '1000px',
     
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     
    });
  }

}

@Component({
  selector:'map2-dialog',
  templateUrl: 'heatmap2-dialog.html'
  
})

export class Heatmap2Dialog implements OnInit{

  constructor(private papa: Papa, public dialogRef: MatDialogRef<Heatmap2Dialog>) { }

  onClose(): void { this.dialogRef.close(); }

  ngOnInit() {
    this.basicHeatmap();
  }
  basicHeatmap(){
    
    const element = document.getElementById("chart") as HTMLDivElement;
    var _this = this;
    

    $.ajaxSetup({
      async: false
    });
    $.get("assets/CLAFTCCO-streamflow-day.csv",function(data){
      let streamflow;
      streamflow = _this.papa.parse(data, {dynamicTyping: true, header: true, skipEmptyLines: true});

      let xAxis = [], yAxis = [], zAxis = [];

      for(let i = 0; i < streamflow["data"].length; i++){
          let year = streamflow["data"][i].Date.substr(0,4);
          if(!yAxis.includes(year)){
              yAxis.push(year);
              zAxis.push(new Array());
          }
          let date = "2000-" + streamflow["data"][i].Date.substr(5,5);
          
          if(!xAxis.includes(date)){
              xAxis.push(date);
              // console.log(date);
          }
          let yearIndex = yAxis.indexOf(year);
          let dateIndex = xAxis.indexOf(date);

          zAxis[yearIndex][dateIndex] = Number(streamflow["data"][i]["CLAFTCCO - DISCHRG (cfs)"]);
          if(zAxis[yearIndex][dateIndex] == ""){
              zAxis[yearIndex][dateIndex] = null;
          }
      }


      let dataMerge = yAxis.map(function(x, j){
        return [x, xAxis, zAxis[j]];
      });
      

      let yearData;
      
      let dataMerge2;
      let fulldata;
      for( let i = 0; i < yAxis.length; i++ ){

        yearData = new Array(366).fill(yAxis[i]);

        // use yeardata instead of yAxis
        dataMerge2 = yearData.map(function(x, j){
          return [x, xAxis[j], zAxis[i][j]];
        });

        
      }



      var plotlyData = [
          {
              z: zAxis,
              x: xAxis,
              y: yAxis,
              type: 'heatmap',
              colorscale: 'RdBu',
              hoverongaps: false
          }
      ];

      var layout = {xaxis: {tickformat: '%b %e'}};

      Plotly.newPlot( element, plotlyData, layout);
    });

  }
}
