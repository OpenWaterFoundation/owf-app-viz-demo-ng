import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
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

  constructor(public dialog: MatDialog,) { }

  ngOnInit(): void {
    this.openDialog('Volume_Graph');
  }


    
  openDialog(DataSpecification): void {
    TypeofData = DataSpecification;

    console.log("Entered openDialog Function")
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
    console.log(this.typeOfChart);

    this.plotlychart(this.typeOfChart);
  }
  /**
  * Closes the Mat Dialog popup when the Close button is clicked.
  */
 onClose(): void { this.dialogRef.close(); }

 public plotlychart(TypeOfData){
   console.log('Inside SnodasPlotlyDialog component');
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
       // console.log("Entered Volume Graph case");
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
     console.log("Inside Get function, data: ", data);
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
          //  console.log("Results: ", results);
       return results
     }
     

     chartData = await waitForParsedData(data);
     // console.log("chartData 78: ", chartData);

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
         console.log("Inside Second case: ");
         yAxisLabelString = 'SWE Acre-foot'; // label for yAxis of chart
         for(let row = 0; row < chartData['data'].length - 1; row++){
           for(let col = 0; col < chartData['data'][row].length; col++){
             // Add each year ex.('2002', '2003', ...) to the nameLabelsArray. For each year add an empty array to lineData that will be populated later
             if(row == 0 && col != 0){
               nameLabelsArray[col-1] = chartData['data'][row][col].substr(chartData['data'][row][col].indexOf("[")+1, 4);
               lineData[col-1] = new Array();
               // console.log("line data", lineData);
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
                //  console.log(lineData[3]);

               }
             }
           }
         }

         let datesArrayHC= [];
         // console.log("LineData Array: ", lineData);
         // console.log("nameLabels Array: ", nameLabelsArray);
         datesArray.shift();

         datesArray.forEach(function(point){
          //  console.log("in foreach point1: ", point);
           point = new Date(point).getTime();
          //  console.log("point2:", point);
           datesArrayHC.push(point);
         });

         console.log("DatesArray: ", datesArray);
         console.log("DatesArrayHC: ", datesArrayHC);

         min_time = labelsArray[0];
         max_time = labelsArray[labelsArray.length - 1];
         _this.chartData = [];
         for(let i = 0; i < nameLabelsArray.length; i++){
          let dataMerge = datesArrayHC.map(function(x, j){
            return [x, lineData[i][j]];
          });
          console.log("DataMerge:", dataMerge);
          console.log("LineData[i][0], ", lineData[i][0]);
           _this.chartData.push({
             name: nameLabelsArray[i], 
             data: dataMerge
            //  x: datesArrayHC,
            //  y: lineData[i]
        
           })
         }
         
         this.plotChartData = _this.chartData;
         console.log("ChartData!: ", _this.chartData);
         const element = document.getElementById("chart") as HTMLDivElement;
         console.log("Element: ", element);
     
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
         
         console.log("Right befor plotting plotChartData: ", this.plotChartData );

        //  Plotly.plot( element, this.plotChartData, layout);
         console.log("Chart is ploted")

// _________________________________

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
    
      // series: [{
      //     name: 'Installation',
      //     data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
      // }, {
      //     name: 'Manufacturing',
      //     data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
      // }, {
      //     name: 'Sales & Distribution',
      //     data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
      // }, {
      //     name: 'Project Development',
      //     data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227]
      // }, {
      //     name: 'Other',
      //     data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
      // }],
    
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


// _______________________________________________________


$.get('assets/SnowpackCSVByBasin/'+ this.chartBasinID+'-SWE-Volume.csv', function(csv) {
  console.log("data: csv: ", csv);

  
});

// Highcharts.stockChart('container', {
//   chart: {
//       zoomType: 'x',  // describes what axis to zoom in on when a user decides to zoom on certain data
//   },
//   title: {
//       text: 'Precipitation' // title of chart
//   },
//   xAxis: {
//       type: 'datetime', // datatype of x axis (YYYY-MM-DD, MM-DD-YYYY, etc.)
//       title: {
//           text: 'Date'    // x axis title
//       },
//       gridLineWidth: 1    // line width of grid
//   },
//   yAxis: {
//       title: {
//           text: 'inches'  // y axis title
//       }
//   },
//   tooltip: { // control what the tooltip displays when a user hovers over a data point
//       pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b>',
//       valueDecimals: 2, // how many decimals to show
//       split: true
//   },
//   legend: {
//       enabled: true   // show legend
//   },
//   data: {
//       csv: csv    // data to be plotted
//   },
//   navigator: {
//       adapToUpdatedData: true,
//       enabled: true
//   },
// });



         break;
         
     }
     
     _this.isDataAvaliable = true;
   });

 }
  
}