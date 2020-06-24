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
  public plotChartData;
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
                // formating date for plotly chart
                let pos1 =  chartData['data'][row][col].indexOf("/");
                let month = chartData['data'][row][col].substr(chartData['data'][row][col], chartData['data'][row][col].indexOf("/"));
                let year = chartData['data'][row][col].substr(chartData['data'][row][col].indexOf("/",pos1 +1)+1, chartData['data'][row][col].length);
                let almostday = chartData['data'][row][col].substr(pos1+1, chartData['data'][row][col].indexOf("/",pos1));
                
                let day = almostday;
                if (almostday.indexOf("/")> -1){
                  day = almostday.length-1;
                }
                
                let newdate =  year + "-" + month + "-" + day;
             
                datesArray.push(newdate);
                // console.log("labelsArray", labelsArray);

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
          // console.log("LineData Array: ", lineData);
          // console.log("nameLabels Array: ", nameLabelsArray);
          console.log("DatesArray: ", datesArray);
          min_time = labelsArray[0];
          max_time = labelsArray[labelsArray.length - 1];
          _this.chartData = [];
          for(let i = 0; i < nameLabelsArray.length; i++){
            _this.chartData.push({
              type: "Scatter",
              mode: "lines+markers",
              name: nameLabelsArray[i],
              // x: ['2019-10-1','2019-10-2','2019-10-3','2019-10-4','2019-10-5','2019-10-6','2019-10-7','2019-10-8','2019-10-9','2019-10-10','2019-10-11','2019-10-12','2019-10-13','2019-10-14','2019-10-15','2019-10-16','2019-10-17','2019-10-18','2019-10-19',
              // '2019-10-20','2019-10-21','2019-10-22','2019-10-23','2019-10-24','2019-10-25','2019-10-26','2019-10-27','2019-10-28','2019-10-29','2019-10-30','2019-10-31',
              // '2019-11-1','2019-11-2','2019-11-3','2019-11-4','2019-11-5','2019-11-6','2019-11-7','2019-11-8','2019-11-9','2019-11-10','2019-11-11','2019-11-12','2019-11-13','2019-11-14','2019-11-15','2019-11-16','2019-11-17','2019-11-18','2019-11-19',
              // '2019-11-20','2019-11-21','2019-11-22','2019-11-23','2019-11-24','2019-11-25','2019-11-26','2019-11-27','2019-11-28','2019-11-29','2019-11-30','2019-11-31',
              // '2019-12-1','2019-12-2','2019-12-3','2019-12-4','2019-12-5','2019-12-6','2019-12-7','2019-12-8','2019-12-9','2019-12-10','2019-12-11','2019-12-12','2019-12-13','2019-12-14','2019-12-15','2019-12-16','2019-12-17','2019-12-18','2019-12-19',
              // '2019-12-20','2019-12-21','2019-12-22','2019-12-23','2019-12-24','2019-12-25','2019-12-26','2019-12-27','2019-12-28','2019-12-29','2019-12-30','2019-12-31',
              // '2020-1-1','2020-1-2','2020-1-3','2020-1-4','2020-1-5','2020-1-6','2020-1-7','2020-1-8','2020-11-9','2020-1-10','2020-1-11','2020-1-12','2020-1-13','2020-1-14','2020-1-15','2020-1-16','2020-1-17','2020-1-18','2020-1-19',
              // '2020-1-20','2020-1-21','2020-1-22','2020-1-23','2020-1-24','2020-1-25','2020-1-26','2020-1-27','2020-1-28','2020-1-29','2020-1-30','2020-1-31',
              // '2019-12-1','2019-12-2','2019-12-3','2019-12-4','2019-12-5','2019-12-6','2019-12-7','2019-12-8','2019-12-9','2019-12-10','2019-12-11','2019-12-12','2019-12-13','2019-12-14','2019-12-15','2019-12-16','2019-12-17','2019-12-18','2019-12-19',
              // '2019-12-20','2019-12-21','2019-12-22','2019-12-23','2019-12-24','2019-12-25','2019-12-26','2019-12-27','2019-12-28','2019-12-29','2019-12-30','2019-12-31'],
              x: datesArray,
              y: lineData[i]
         
            })
          }
          this.plotChartData = _this.chartData;
          console.log("ChartData: ", _this.chartData);
          const element = document.getElementById("chart") as HTMLDivElement;
          console.log("Element: ", element);
      
          var layout = {
            title: 'SNODAS Volume Graph',
            xaxis: {
              range: ['2019-10-01', '2020-09-30'],
              type: 'date'
            },
            yaxis: {
              autorange: true,
              type: 'linear'
            }
          };
          
          console.log("Right befor plotting plotChartData: ", this.plotChartData );

          Plotly.plot( element, this.plotChartData, layout);
          break;
          
      }
      
      _this.isDataAvaliable = true;
    });

  }

 

  constructor(private modalService: NgbModal,private papa: Papa) { }

  ngOnInit() {
    // this.basicChart();
  }

  // basicChart(){
  //   const element = document.getElementById("chart") as HTMLDivElement;
  //   console.log("Element: ", element);

  //   var layout = {
  //     title: 'SNODAS Volume Graph',
  //     xaxis: {
  //       range: ['2019-10-01', '2020-09-30'],
  //       type: 'date'
  //     },
  //     yaxis: {
  //       autorange: true,
  //       type: 'linear'
  //     }
  //   };
  //     // console.log("Right befor plotting plotChartData: ", this.plotChartData );
  //   // Plotly.plot( element, this.plotChartData, layout);
  // }

}
