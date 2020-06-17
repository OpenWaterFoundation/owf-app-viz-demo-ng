import { Component, OnInit, ViewChild, ElementRef, TemplateRef  } from '@angular/core';
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Papa } from 'ngx-papaparse';
import * as $ from "jquery";

declare var Plotly: any;

@Component({
  selector: 'app-plotly',
  templateUrl: './plotly.component.html',
  styleUrls: ['./plotly.component.css']
})
export class PlotlyComponent implements OnInit {

  public chartData;
  public typeOfSnodasChart = '';
  public chartBasinID = 'GMRC2L_F';
  isDataAvaliable:boolean = false;



  public open(content, TypeOfData){
    let _this = this;
    _this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', size: 'xl'});
    let file;
    /* switch statement to determine where to get the data from 
    depending on the type of chart */
    switch(TypeOfData){
      case 'Upstream_Total_Volume_Graph':
        _this.typeOfSnodasChart = 'SWE Upstream Total Volume Graph';
        file = 'assets/SnowpackStatisticsByBasin/SnowpackStatisticsByBasin_UpstreamTotal_'+_this.chartBasinID+'.csv';
        break;
      case 'Volume_Graph':
        console.log("Entered Volume Graph case");
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
      console.log("Inside Get function");
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
      console.log("chartData 78: ", chartData);

      // _this.chartType = 'line';
      // _this.chartLegend = true;

      let lineData = [];
      let labelsArray = [];
      let nameLabelsArray = [];
      let min_time, max_time, yAxisLabelString;

      /* switch statement that sets up the data and chart options 
      according to what type of chart is being created */
      switch(TypeOfData){
        case 'Upstream_Total_Volume_Graph':
          yAxisLabelString = 'SWE Acre-foot'; // label for yAxis of chart
          for(let i = 1; i < chartData['data'].length; i++){ //add dashes to the dates
            let date = chartData['data'][i][0].substring(0,4) + '-' + chartData['data'][i][0].substring(4,6) + '-' + chartData['data'][i][0].substring(6);
            labelsArray[i-1] = new Date(date);
            lineData[i-1] = chartData['data'][i][3];
          }
          min_time = labelsArray[0]; // minimum date on the xAxis
          max_time = labelsArray[labelsArray.length - 2]; // maximum date on the xAxis
          _this.chartData = [ // data object for the chart
            {
              fill: false,
              label: 'Upstream Total Volume',
              data: lineData,
              borderColor: '#800080',
              // backgroundColor: '#800080',
              lineTension: 0
            }
          ]
          break;
        case 'Volume_Graph':
          console.log("Inside Second case: ");
          yAxisLabelString = 'SWE Acre-foot'; // label for yAxis of chart
          for(let row = 0; row < chartData['data'].length - 1; row++){
            for(let col = 0; col < chartData['data'][row].length; col++){
              // Add each year ex.('2002', '2003', ...) to the nameLabelsArray. For each year add an empty array to lineData that will be populated later
              if(row == 0 && col != 0){
                nameLabelsArray[col-1] = chartData['data'][row][col].substr(chartData['data'][row][col].indexOf("[")+1, 4);
                lineData[col-1] = new Array();
                console.log("line data", lineData);
              }
              // Add each date to the labelsArray
              else if(col == 0){
                labelsArray[row-1] = new Date (chartData['data'][row][col]);
                console.log("labelsArray", labelsArray);

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
          min_time = labelsArray[0];
          max_time = labelsArray[labelsArray.length - 1];
          _this.chartData = [];
          for(let i = 0; i < nameLabelsArray.length; i++){
            _this.chartData.push({
              // fill: false,
              // label: nameLabelsArray[i],
              x: lineData[i]
              // borderColor: '#800080',
              // backgroundColor: '#800080',
              // lineTension: 0,
              // borderWidth: 1.5
            })
          }
          break;
      }
      /* Dates for the xAxis */
      // _this.chartLabels = labelsArray;

      // _this.chartOptions = {
      //   plugins: {
      //     zoom: {
      //       pan: {
      //         enabled: true,
      //         mode: 'x',
      //         rangeMin: {
      //           x: min_time
      //         },
      //         rangeMax: {
      //           x: max_time
      //         },
      //         // onPan: function({chart}) {}
      //       },
      //       zoom: {
      //         enabled: true,
      //         mode: 'x',
      //         rangeMin: {
      //           x: min_time
      //         },
      //         rangeMax: {
      //           x: max_time
      //         },
      //         speed: .1,
      //         // onZoom: function({chart}) {},
      //         // drag: true
      //       }
      //     },
      //   },
      //   responsive: true,
      //   scales: {
      //     xAxes: [{
      //       type: 'time',
      //       time: {
      //         tooltipFormat: "MMM D",
      //         displayFormats: {
      //           month: 'MMM',
      //         }
      //       },
      //       distribution: 'linear',
      //       ticks:{
      //         min: min_time,
      //         max: max_time,
      //         // tooltipFormat: 'MM/DD'
      //       },
      //       display: true,
      //       scaleLabel: {
      //         display: true,
      //         labelString: "Date",
      //       }
      //   }],
      //     yAxes: [{
      //       display: true,
      //       scaleLabel: {
      //         display: true,
      //         labelString: yAxisLabelString
      //       },
      //       ticks: {
      //         userCallback: function(value, index, values) {
      //           return value.toLocaleString(); // Adds commas to numbers in the yAxis
      //         }
      //       }
      //     }]
      //   },
      //   elements: {
      //     point: {
      //       // radius: 1
      //     }
      //   }
      // };

      _this.isDataAvaliable = true;
    });

  }

  constructor(private modalService: NgbModal,private papa: Papa) { }

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

    Plotly.plot( element, this.chartData, style);
  }

}
