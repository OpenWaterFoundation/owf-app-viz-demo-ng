import { Component, OnInit } from '@angular/core';
declare var Plotly: any;

@Component({
  selector: 'app-heatmap',
  templateUrl: './heatmap.component.html',
  styleUrls: ['./heatmap.component.css']
})
export class HeatmapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.basicHeatmap();
  }

  basicHeatmap(){
    const element = document.getElementById("chart") as HTMLDivElement;

    var data = [
      {
        z: [[1, null, 30, 50, 1], [20, 1, 60, 80, 30], [30, 60, 1, -10, 20]],
        x: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        y: ['Morning', 'Afternoon', 'Evening'],
        type: 'heatmap',
        hoverongaps: false
      }
    ];
    
    Plotly.newPlot(element, data);
  }
}

