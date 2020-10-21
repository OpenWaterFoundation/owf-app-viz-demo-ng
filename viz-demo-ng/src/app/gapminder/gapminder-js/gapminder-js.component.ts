import { Component, OnInit } from '@angular/core';
// import { Event } from @angular/router;
import *  as custom from 'src/assets/js/custom-test.js';



  import * as gapminderv4 from 'src/assets/js/gapminder-4.0.0.js';


import *  as display from 'src/assets/js/gapminder-util/display-data.js';
// import 'src/assets/js/gapminder-util/properties.js';

import  { Properties } from 'src/assets/js/gapminder-util/properties.js';
import * as $ from "jquery";


// reference to JS functions

// assets/gapminderjs/display-data.js
// declare function displayData();

// test
// declare function doSomething();

// declare var Properties: any;

let configurationFile = "assets/gapminder-data/viz-config.json";

@Component({
  selector: 'app-gapminder-js',
  templateUrl: './gapminder-js.component.html',
  styleUrls: ['./gapminder-js.component.css']
})
export class GapminderJsComponent implements OnInit {


  public varOne = gapminderv4;
  constructor() { 
    // console.log("varOne: ", this.varOne);
  }
  // declare const displayData: any;
  ngOnInit(): void {

    // setTimeout(() => {
      
    // }, 1000);

    console.log("Gapminder component created!");
     // // Get the element with id="defaultOpen" and click on it
    document.getElementById("defaultOpen").click();
    gapminderv4.gapminder();

  }

  

  // public configurationFile = "./data/viz-config.json";
  public dataLoaded = false;

  
  public gapminderSelected = true;
  /*Opens and displays div selected by tabs*/
  openTab(evt, name) {
    // custom
    // custom.doSomething();
    // var properties = new Properties(configurationFile);

    // console.log("Properties: ", properties);

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


      // Get the element with id="defaultOpen" and click on it
      // document.getElementById("defaultOpen").click();

  }

  // // // Get the element with id="defaultOpen" and click on it
  // document.getElementById("defaultOpen").click();


 
}
