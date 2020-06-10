import { Component, OnInit, ViewChild, ElementRef  } from '@angular/core';
import { viewClassName } from '@angular/compiler';

declare var Plotly: any;

@Component({
  selector: 'app-plotly',
  templateUrl: './plotly.component.html',
  styleUrls: ['./plotly.component.css']
})
export class PlotlyComponent implements OnInit {

  constructor() { }

  @ViewChild('chart') el: ElementRef;

  ngOnInit() {
    this.basicChart();
  }

  ngAfterViewInit(){
    this.basicChart();
  }

  basicChart(){
    const element = this.el.nativeElement;

    const data = [{
      x: [1, 2, 3, 4, 5],
      y: [1, 2, 4, 8, 16]
    }];

    const style = {
      margin: { t: 0 }
    };

    Plotly.plot( element, data, style);
  }



}
