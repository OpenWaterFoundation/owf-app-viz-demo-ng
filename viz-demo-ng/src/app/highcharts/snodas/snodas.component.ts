import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { EventEmitterService } from '../../event-emitter.service';    

import * as Highcharts from 'highcharts';
import { Papa } from 'ngx-papaparse';
import * as $ from "jquery"

declare var require: any;
let Boost = require('highcharts/modules/boost');
let noData = require('highcharts/modules/no-data-to-display');
let More = require('highcharts/highcharts-more');

Boost(Highcharts);
noData(Highcharts);
More(Highcharts);
noData(Highcharts);

declare var Plotly: any;
var TypeofData; 
@Component({
  selector: 'app-snodas',
  templateUrl: '../../generic-content/generic-content.component.html',  styleUrls: ['./snodas.component.css']
})
export class SnodasComponent implements OnInit {

  constructor(public dialog: MatDialog, private eventEmitterService: EventEmitterService) { }

  ngOnInit(): void {
    this.openDialog('Volume_Graph');
    if (this.eventEmitterService.subsVar==undefined) {  
      this.eventEmitterService.subsVar = this.eventEmitterService.    
      invokeSnodasHCComponentFunction.subscribe(() => {    
        this.openDialog('Volume_Graph');    
      });    
    }
  }


    
  openDialog(DataSpecification): void {
    TypeofData = DataSpecification;

    const dialogRef = this.dialog.open(HighchartsSnodasDialog, {
      height: '650px',
      width: '1000px',

     
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     
    });
  }


}



@Component({
  selector:'genSnodad-highcharts-dialog',
  templateUrl: 'HC-snodas-dialog-content.html'
})

export class HighchartsSnodasDialog {

  constructor( public dialogRef: MatDialogRef<HighchartsSnodasDialog>,private papa: Papa) { }



  
  public chartData;
  public plotChartData;
  public typeOfSnodasChart = '';
  public chartBasinID = 'GMRC2L_F';
  isDataAvaliable:boolean = false;

  public typeOfChart = TypeofData;
  

  ngOnInit() {

    this.plotlychart(this.typeOfChart);
  }
  /**
  * Closes the Mat Dialog popup when the Close button is clicked.
  */
 onClose(): void { this.dialogRef.close(); }

 public plotlychart(TypeOfData){
   let _this = this;
   // _this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', size: 'xl'});
   let file;
   /* switch statement to determine where to get the data from 
   depending on the type of chart */
   switch(TypeOfData){
     case 'Upstream_Total_Volume_Graph':
       _this.typeOfSnodasChart = 'SWE Upstream Total Volume Graph';
       file = 'assets/SnowpackStatisticsByBasin/SnowpackStatisticsByBasin_UpstreamTotal_'+_this.chartBasinID+'.csv';
       break;
     case 'Volume_Graph':
       _this.typeOfSnodasChart = 'SWE Volume Graph';
       file = 'assets/SnowpackCSVByBasin/'+ this.chartBasinID+'-SWE-Volume.csv';
       break;
     default:
       file = '';
   }

   $.ajaxSetup({
     async: false  // tells ajax functions to wait
   });
   var chartData;
   $.get(file, async function(data) {
     /* waitForParsedData waits for papaparse to parse the csv file */
     const waitForParsedData = async (file) => {
       let parsePromise = function (file) {
           return new Promise(function (complete, error) {
             if(file != undefined)
               complete(_this.papa.parse(file, {comments: '#'}));
             else
               error("Can't get data");
           });
       }
   
       let results
       await parsePromise(file)
           .then(function (parsedData) {
               results = parsedData
           });
       return results
     }
     

     chartData = await waitForParsedData(data);

     // _this.chartType = 'line';
     // _this.chartLegend = true;

     let lineData = [];
     let labelsArray = [];
     let nameLabelsArray = [];
     let datesArray= []
     let min_time, max_time, yAxisLabelString;

     /* switch statement that sets up the data and chart options 
     according to what type of chart is being created */
     switch(TypeOfData){
       case 'Volume_Graph':
         yAxisLabelString = 'SWE Acre-foot'; // label for yAxis of chart
         for(let row = 0; row < chartData['data'].length - 1; row++){
           for(let col = 0; col < chartData['data'][row].length; col++){
             // Add each year ex.('2002', '2003', ...) to the nameLabelsArray. For each year add an empty array to lineData that will be populated later
             if(row == 0 && col != 0){
               nameLabelsArray[col-1] = chartData['data'][row][col].substr(chartData['data'][row][col].indexOf("[")+1, 4);
               lineData[col-1] = new Array();
             }
             // Add each date to the labelsArray
             else if(col == 0){
               labelsArray[row-1] = new Date (chartData['data'][row][col]);
               let ogdate = chartData['data'][row][col];
               // formating date for plotly chart
               let pos1 =  chartData['data'][row][col].indexOf("/");
               let month = chartData['data'][row][col].substr(chartData['data'][row][col], chartData['data'][row][col].indexOf("/"));
               let year = chartData['data'][row][col].substr(chartData['data'][row][col].indexOf("/",pos1 +1)+1, chartData['data'][row][col].length);
               let day = chartData['data'][row][col].substr(chartData['data'][row][col].indexOf("/") +1, chartData['data'][row][col].indexOf("/",pos1 +1));

               if (day.indexOf("/20") > -1){
                 day = day.replace("/20", '');
               }
               if (day.indexOf("/2") > -1){
                 day = day.replace("/2", '');
               }
               let plotlyDate =  year + "-" + month + "-" + day;
               datesArray.push(plotlyDate);
              

             }
             else if(row != 0 && col != 0){
               if(chartData['data'][row][col] == ""){
                 chartData['data'][row][col] = null; // makes empty data points show up as a gap in the line instead of 0
               }
               else{
                 lineData[col-1][row-1] = Number(chartData['data'][row][col]);

               }
             }
           }
         }

         let datesArrayHC= [];
         datesArray.shift();

         datesArray.forEach(function(point){
           point = new Date(point).getTime();
           datesArrayHC.push(point);
         });


         min_time = labelsArray[0];
         max_time = labelsArray[labelsArray.length - 1];
         _this.chartData = [];
         for(let i = 0; i < nameLabelsArray.length; i++){
          let dataMerge = datesArrayHC.map(function(x, j){
            return [x, lineData[i][j]];
          });
           _this.chartData.push({
             name: nameLabelsArray[i], 
             data: dataMerge
        
           })
         }
         
         this.plotChartData = _this.chartData;
         const element = document.getElementById("chart") as HTMLDivElement;
     
         var layout = {
           title: 'SNODAS Volume Graph',
           xaxis: {
             range: ['2019-10-01', '2020-09-30'],
             type: 'date'
           },
           yaxis: {
             text: 'Y axis',
             autorange: true,
             type: 'linear'
           
           }
         };
         
// _________________________________
    // Highcharts.chart('container', {})

      Highcharts.chart('container', {
        title: {
          text: 'SNODAS Volume Graph'
      },
    
      subtitle: {
          text: 'Source: openwaterfoundation.org/'
      },
    
      yAxis: {
          title: {
              text: 'SWE Acre-foot'
          }
      },
    
      xAxis: {
        type: 'datetime',
          // accessibility: {
          //     rangeDescription: 'Range: 2010 to 2017'
          // }
      },
    
      legend: {
          layout: 'vertical',
          align: 'right',
          verticalAlign: 'middle'
      },
    
      // plotOptions: {
      //     series: {
      //         label: {
      //             connectorAllowed: false
      //         },
      //         pointStart: 2010
      //     }
      // },
    
      series: this.plotChartData,

      responsive: {
          rules: [{
              condition: {
                  maxWidth: 500
              },
              chartOptions: {
                  legend: {
                      layout: 'horizontal',
                      align: 'center',
                      verticalAlign: 'bottom'
                  }
              }
          }]
      }
    });


         break;
         
     }
     
     _this.isDataAvaliable = true;
   });

 }
  
}