import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import * as Highcharts from 'highcharts';

import More from 'highcharts/highcharts-more';
import Tree from 'highcharts/modules/treemap';
import Heatmap from 'highcharts/modules/heatmap';

declare var require: any;
declare var require: any;
let Boost = require('highcharts/modules/boost');
let noData = require('highcharts/modules/no-data-to-display');
// let More = require('highcharts/highcharts-more');

More(Highcharts);
Tree(Highcharts);
Heatmap(Highcharts);
Boost(Highcharts);
noData(Highcharts);
More(Highcharts);
noData(Highcharts);


@Component({
  selector: 'app-heatmap-hc',
  templateUrl: '../../generic-content/generic-content.component.html',
  styleUrls: ['./heatmap.component.css']
})
export class HeatmapHCComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

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
    console.log("Entered openDialog Function")
    const dialogRef = this.dialog.open(HeatmapHCDialogComponent, {
      height: '650px',
      width: '1000px',
      
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     
    });
  }
}



@Component({
  selector: 'app-heatmap-hc-dialog',
  templateUrl: './heatmap.component.html',
  styleUrls: ['./heatmap.component.css']
})
export class HeatmapHCDialogComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<HeatmapHCDialogComponent>) { }
  ngOnInit() {
    
  }

  
  /**
  * Closes the Mat Dialog popup when the Close button is clicked.
  */
  onClose(): void { this.dialogRef.close(); }

  Highcharts = Highcharts;
  chartOptions = {

    colorAxis: {
      minColor: '#FFFFFF',
      maxColor: Highcharts.getOptions().colors[0]
    },
    series: [{
      type: 'treemap',
      layoutAlgorithm: 'squarified',
      data: [{
        name: 'A',
        value: 6,
        colorValue: 1
      }, {
        name: 'B',
        value: 6,
        colorValue: 2
      }, {
        name: 'C',
        value: 4,
        colorValue: 3
      }, {
        name: 'D',
        value: 3,
        colorValue: 4
      }, {
        name: 'E',
        value: 2,
        colorValue: 5
      }]
    }]

  };




}

@Component({
  selector: 'app-heatmapts-hc',
  templateUrl: '../../generic-content/generic-content.component.html',
  styleUrls: ['./heatmap.component.css']
})
export class HeatmapTSHCComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

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
    console.log("Entered openDialog Function")
    const dialogRef = this.dialog.open(HeatmapTSHCDialogComponent, {
      height: '650px',
      width: '1000px',
      
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     
    });
  }
}



@Component({
  selector: 'app-heatmapts-hc-dialog',
  templateUrl: './heatmapts-dialog-content.html',
  styleUrls: ['./heatmap.component.css']
})
export class HeatmapTSHCDialogComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<HeatmapTSHCDialogComponent>) { }
  ngOnInit() {
    
  }

  
  /**
  * Closes the Mat Dialog popup when the Close button is clicked.
  */
  onClose(): void { this.dialogRef.close(); }


  // $.ajaxSetup({
  //   async: false
  // });
  // $.get("assets/CLAFTCCO-streamflow-day.csv",function(data){
  //   let streamflow;
  //   streamflow = _this.papa.parse(data, {dynamicTyping: true, header: true, skipEmptyLines: true});

  //   let xAxis = [], yAxis = [], zAxis = [];

  //   for(let i = 0; i < streamflow["data"].length; i++){
  //       let year = streamflow["data"][i].Date.substr(0,4);
  //       if(!yAxis.includes(year)){
  //           yAxis.push(year);
  //           zAxis.push(new Array());
  //       }
  //       let date = "2000-" + streamflow["data"][i].Date.substr(5,5);
        
  //       if(!xAxis.includes(date)){
  //           xAxis.push(date);
  //           console.log(date);
  //       }
  //       let yearIndex = yAxis.indexOf(year);
  //       let dateIndex = xAxis.indexOf(date);

  //       zAxis[yearIndex][dateIndex] = Number(streamflow["data"][i]["CLAFTCCO - DISCHRG (cfs)"]);
  //       if(zAxis[yearIndex][dateIndex] == ""){
  //           zAxis[yearIndex][dateIndex] = null;
  //       }
  //   }

  //   // var colorscaleValue = [
  //   //     [0, '#e60000'],
  //   //     [.25, '#cc0099'],
  //   //     [.5, '#990073'],
  //   //     // [.6, 'green'],
  //   //     // [.8, 'blue'],
  //   //     [1, '#4747d1']
  //   // ];

  //   var plotlyData = [
  //       {
  //           z: zAxis,
  //           x: xAxis,
  //           y: yAxis,
  //           type: 'heatmap',
  //           colorscale: 'RdBu',
  //           hoverongaps: false
  //       }
  //   ];

   
  // });






  // Highcharts = Highcharts;
  // chartOptions = {

  //   colorAxis: {
  //     minColor: '#FFFFFF',
  //     maxColor: Highcharts.getOptions().colors[0]
  //   },
  //   series: [{
  //     type: 'treemap',
  //     layoutAlgorithm: 'squarified',
  //     data: [{
  //       name: 'A',
  //       value: 6,
  //       colorValue: 1
  //     }, {
  //       name: 'B',
  //       value: 6,
  //       colorValue: 2
  //     }, {
  //       name: 'C',
  //       value: 4,
  //       colorValue: 3
  //     }, {
  //       name: 'D',
  //       value: 3,
  //       colorValue: 4
  //     }, {
  //       name: 'E',
  //       value: 2,
  //       colorValue: 5
  //     }]
  //   }]

  // };

  
  // Highcharts.chart('container', {});


}
