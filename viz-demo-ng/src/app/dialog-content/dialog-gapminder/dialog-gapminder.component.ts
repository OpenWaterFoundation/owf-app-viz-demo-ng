import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

/* Reference to JS functions */
import * as gapminderv6         from '../../gapminder/gapminder-js/js/gapminder-4.0.0.js';
import * as display             from '../../gapminder/gapminder-js/js/gapminder-util/display-data.js';

// Define gapminder configuration: Will be set using configuration. Hard coded for now 
let configurationFile = "assets/gapminder-data/viz-config.json";

@Component({
  selector: 'app-dialog-gapminder',
  templateUrl: './dialog-gapminder.component.html',
  styleUrls: ['./dialog-gapminder.component.css']
})
export class DialogGapminderComponent  {
  
    // Define gapminder Ref for function calls in template
    public gapminderRef = gapminderv6;
  
    constructor() { 
    }
  
    ngAfterViewInit(): void {
       // Get the element id="defaultOpen" and click for default option to be set
      document.getElementById("defaultOpen").click();
  
      // call gapminder js functionality using path to configuration file
      // gapminderv6.gapminder('assets/gapminder-data/viz-config.json');
      gapminderv6.gapminder(configurationFile);
  
     
  
  
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
  