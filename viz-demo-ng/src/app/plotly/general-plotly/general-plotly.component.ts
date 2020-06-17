import { Component, OnInit } from '@angular/core';
declare var Plotly: any;
@Component({
  selector: 'app-general-plotly',
  templateUrl: './general-plotly.component.html',
  styleUrls: ['./general-plotly.component.css']
})
export class GeneralPlotlyComponent implements OnInit {

  constructor() { }

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

    Plotly.plot( element, data, style);
  }

}
