import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-general-chartjs',
  templateUrl: './general-chartjs.component.html',
  styleUrls: ['./general-chartjs.component.css']
})
export class GeneralChartjsComponent implements OnInit {

 

  ngOnInit(): void {
  }

  // Simple Line chart  Containter [Start]
  
  public lineChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
    // pan and zoom
    plugins: {
      zoom: {
        pan: {
          enabled: true,
          mode: 'x',
          rangeMin: {
            x: '2006'
          },
          rangeMax: {
            x: '2012'
          },
        },
        zoom: {
          enabled: true,
          mode: 'x',
          rangeMin: {
            x: '2006'
          },
          rangeMax: {
            x: '2012'
          },
          speed: .1,
        }
      },
    }
    
  };

  public lineChartLabels = [ '2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public lineChartType = 'line';
  public lineChartLegend = true;

  public lineChartData = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
  ];

  // Container [End]

  constructor() { }

}
