import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

// reference to JS functions
// reference to JS functions
import * as gapminderv4         from '../gapminder-js/js/gapminder-4.0.0.js';
import * as display             from '../gapminder-js/js/gapminder-util/display-data.js';
// import * as gapminderv4 from 'src/assets/js/gapminder-4.0.0.js';
// import *  as display from 'src/assets/js/gapminder-util/display-data.js';


// Define gapminder configuration 
let configurationFile = "assets/gapminder-data/viz-config.json";
// '../gapminder-js/gapminder-data/viz-config.json';


@Component({
  selector: 'app-gapminder',
  templateUrl: '../../generic-content/generic-content.component.html',
  styleUrls: ['./gapminder-js.component.css']
})
export class GapminderJsComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.openDialog();

    // tab reopen event emitter
    // if (this.eventEmitterService.subsVar==undefined) {  
    //   this.eventEmitterService.subsVar = this.eventEmitterService.    
    //   invokeChartjsGenericComponentFunction.subscribe((name:string) => {    
    //     this.openDialog();  
    //   });    
    // }  
  }

  openDialog(): void {
    console.log("Entered openDialog Function")
    const dialogRef = this.dialog.open(GeneralGapminderJSComponent, {
      height: '650px',
      width: '1000px',
     
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     
    });
  }


}

@Component({
  selector: 'app-gapminder-js',
  templateUrl: './gapminder-js.component.html',
  styleUrls: ['./gapminder-js.component.css']
})
export class  GeneralGapminderJSComponent {

  // Define gapminder Ref for function calls in template
  public gapminderRef = gapminderv4;

  constructor() { 
  }

  ngAfterViewInit(): void {
     // Get the element id="defaultOpen" and click for default option 
    document.getElementById("defaultOpen").click();

    // // set configuration file 
    // gapminderv4.setGapminderConfig("assets/gapminder-data/viz-config.json")

    // call gapminder js functionality 
    gapminderv4.gapminder('assets/gapminder-data/viz-config.json');
    // gapminderv4.gapminder('./gapminder-data/viz-config.json');


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
