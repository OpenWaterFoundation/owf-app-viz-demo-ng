import { Component, OnInit, ViewChild, ElementRef, TemplateRef, inject, Inject } from '@angular/core';
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Papa } from 'ngx-papaparse';
import * as $ from "jquery";
import { NativeDateAdapter } from '@angular/material/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig} from '@angular/material/dialog';
import { EventEmitterService } from './../event-emitter.service';    



declare var Plotly: any;
var TypeofData; 
@Component({
  selector: 'app-plotly',
  templateUrl: './plotly.component.html',
  styleUrls: ['./plotly.component.css']
})
export class PlotlyComponent implements OnInit{
  constructor(public dialog: MatDialog, private eventEmitterService: EventEmitterService ) {}
  ngOnInit() {
    this.openDialog('Volume_Graph');

    if (this.eventEmitterService.subsVar==undefined) {  
      this.eventEmitterService.subsVar = this.eventEmitterService.    
      invokeSnodasComponentFunction.subscribe((name:string) => {  
        console.log("Step3: Snodas Function call openDialog()");   
        this.openDialog('Volume_Graph');    
      });    
    }  
  }

  
  openDialog(DataSpecification): void {
    TypeofData = DataSpecification;
    
    console.log("Entered openDialog Function")
    const dialogRef = this.dialog.open(SnodasPlotlyDialog, {
      height: '650px',
      width: '1000px',
    });

    
 
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     
    });
  }

 
 
}


@Component({
  selector: 'snodas-plotly-dialog',
  templateUrl: 'snodas-plotly-modal-content.html'
})

export class SnodasPlotlyDialog implements OnInit{

  constructor(private modalService: NgbModal,private papa: Papa,
    public dialogRef: MatDialogRef<SnodasPlotlyDialog>) { }

  // console.log('Inside SnodasPlotlyDialog component');

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
      // console.log("Inside Get function");
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
              text: 'Y axis',
              autorange: true,
              type: 'linear'
            
            }
          };
          
          console.log("Right befor plotting plotChartData: ", this.plotChartData );

          Plotly.plot( element, this.plotChartData, layout);
          console.log("Chart is ploted")
          break;
          
      }
      
      _this.isDataAvaliable = true;
    });

  }



 

}


