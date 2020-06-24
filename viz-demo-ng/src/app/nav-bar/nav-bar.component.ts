import { Component, OnInit } from '@angular/core';
import { GeneralPlotlyComponent } from '../plotly/general-plotly/general-plotly.component';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  // constructor(private gplotly: GeneralPlotlyComponent) { }

  // navbarOpen(): void{
  //   this.gplotly.openDialog();
  // }
  constructor() { }

 

  ngOnInit(): void {
  }

}
