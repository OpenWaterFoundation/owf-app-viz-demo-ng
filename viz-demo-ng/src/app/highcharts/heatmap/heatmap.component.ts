import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import * as Highcharts from 'highcharts';

import More from 'highcharts/highcharts-more';
import Tree from 'highcharts/modules/treemap';
import Heatmap from 'highcharts/modules/heatmap';

declare var require: any;
let Boost = require('highcharts/modules/boost');
let BoostCanvas = require('highcharts/modules/boost-canvas.js');
let noData = require('highcharts/modules/no-data-to-display');
let accessibility = require('highcharts/modules/accessibility.js');
let exporting = require('highcharts/modules/exporting.js');
let heatmap = require('highcharts/modules/heatmap.js');
let data = require('highcharts/modules/data.js');




// let More = require('highcharts/highcharts-more');

More(Highcharts);
Tree(Highcharts);
Heatmap(Highcharts);
Boost(Highcharts);
BoostCanvas(Highcharts);
noData(Highcharts);
More(Highcharts);
noData(Highcharts);
accessibility(Highcharts);
exporting(Highcharts);
heatmap(Highcharts);
data(Highcharts);


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
    this.heavyHeatmap();
  }

  
  /**
  * Closes the Mat Dialog popup when the Close button is clicked.
  */
  onClose(): void { this.dialogRef.close(); }

  heavyHeatmap(){

    console.log("data", document.getElementById('csv').innerHTML)
    Highcharts.chart('container', {
    
    data: {
      csv: document.getElementById('csv').innerHTML
    },

    chart: {
      type: 'heatmap'
    },

    boost:{
      useGPUTranslations: true
    },

    title: {
        text: 'Highcharts HeatMap',
        align: 'left',
        x: 40
    },
    
    subtitle: {
        text: 'Tempeature variation by day and hour through 2017',
        align: 'left',
        x: 40
    },
    
    yAxis: {
        title: {
            text: null
        },
        labels: {
          format: '{value}:00'
        },
        minPadding:0,
        maxPadding:0,
        startOnTick: false,
        endOnTick: false,
        tickPositions: [ 0, 6, 12, 18, 24], 
        tickWidth: 1, 
        min: 0,
        max: 23, 
        reversed: true
    },
    
    xAxis: {
      type: 'datetime',
      min: Date.UTC(2017, 0, 1),
      max: Date.UTC(2017, 11, 31, 23, 59, 59), 
      labels: {
        align: 'left', 
        x: 5, 
        y: 14, 
        format: '{value:%B}' 
      },
      showLastLabel: false,
      tickLength: 16
    },
    
    colorAxis: {
      stops: [
        [0, '#3060cf'],
        [0.5, '#fffbbc'],
        [0.9, '#c4463a'],
        [1, '#c4463a']
      ],
      min: -15,
        max: 25,
        startOnTick: false,
        endOnTick: false,
        labels: {
            format: '{value}℃'
        }
    },
    series: [{
      type: 'heatmap',
      boostThreshold: 100,
      borderWidth: 0,
      nullColor: '#EFEFEF',
      colsize: 24 * 36e5, // one day
      tooltip: {
          headerFormat: 'Temperature<br/>',
          pointFormat: '{point.x:%e %b, %Y} {point.y}:00: <b>{point.value} ℃</b>'
      },
      turboThreshold: Number.MAX_VALUE // #3404, remove after 4.0.5 release
    }]

    });
  }


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


//   Highcharts.chart('container', {

//     data: {
//         csv: document.getElementById('csv').innerHTML
//     },

//     chart: {
//         type: 'heatmap'
//     },

//     boost: {
//         useGPUTranslations: true
//     },

//     title: {
//         text: 'Highcharts heat map',
//         align: 'left',
//         x: 40
//     },

//     subtitle: {
//         text: 'Temperature variation by day and hour through 2017',
//         align: 'left',
//         x: 40
//     },

//     xAxis: {
//         type: 'datetime',
//         min: Date.UTC(2017, 0, 1),
//         max: Date.UTC(2017, 11, 31, 23, 59, 59),
//         labels: {
//             align: 'left',
//             x: 5,
//             y: 14,
//             format: '{value:%B}' // long month
//         },
//         showLastLabel: false,
//         tickLength: 16
//     },

//     yAxis: {
//         title: {
//             text: null
//         },
//         labels: {
//             format: '{value}:00'
//         },
//         minPadding: 0,
//         maxPadding: 0,
//         startOnTick: false,
//         endOnTick: false,
//         tickPositions: [0, 6, 12, 18, 24],
//         tickWidth: 1,
//         min: 0,
//         max: 23,
//         reversed: true
//     },

//     colorAxis: {
//         stops: [
//             [0, '#3060cf'],
//             [0.5, '#fffbbc'],
//             [0.9, '#c4463a'],
//             [1, '#c4463a']
//         ],
//         min: -15,
//         max: 25,
//         startOnTick: false,
//         endOnTick: false,
//         labels: {
//             format: '{value}℃'
//         }
//     },

//     series: [{
//         boostThreshold: 100,
//         borderWidth: 0,
//         nullColor: '#EFEFEF',
//         colsize: 24 * 36e5, // one day
//         tooltip: {
//             headerFormat: 'Temperature<br/>',
//             pointFormat: '{point.x:%e %b, %Y} {point.y}:00: <b>{point.value} ℃</b>'
//         },
//         turboThreshold: Number.MAX_VALUE // #3404, remove after 4.0.5 release
//     }]

// });




}


