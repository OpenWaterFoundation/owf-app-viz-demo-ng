import { Component, OnInit } from '@angular/core';
// import * as gapminderv6         from './js/gapminder-6.0.0.js';
import * as display             from './js/gapminder-util/display-data.js';

let configurationFile = "./data/viz-config.json";

@Component({
  selector: 'app-gapminder',
  templateUrl: './gapminder.component.html',
  styleUrls: ['./gapminder.component.css']
})
export class GapminderComponent implements OnInit {
  // // Define gapminder configuration: Will be set by providing path to openDialog function
  // public configurationFile;
  // // Define gapminder Ref for function calls in template
  // public gapminderRef = gapminderv6;

  constructor() { }

  ngOnInit(): void {
  }
 
 
public dataLoaded = false;

public gapminderSelected = true;
  /*Opens and displays div selected by tabs*/
  openTab(evt, name) {

    if(name == "Gapminder"){
      this.gapminderSelected = true;
    }else{
      this.gapminderSelected = false;
    }
    if(name == "Data" && !this.dataLoaded){
      display.displayData(configurationFile);
      this.dataLoaded = true;
    }
      var i, tabcontent, tablinks;
      tabcontent = document.getElementsByClassName("tabcontent");
      for (i = 0; i < tabcontent.length; i++) {
          tabcontent[i].style.display = "none";
      }
      tablinks = document.getElementsByClassName("tablinks");
      for (i = 0; i < tablinks.length; i++) {
          tablinks[i].className = tablinks[i].className.replace(" active", "");
      }
      document.getElementById(name).style.display = "block";
      evt.currentTarget.className += " active";

  }



}
