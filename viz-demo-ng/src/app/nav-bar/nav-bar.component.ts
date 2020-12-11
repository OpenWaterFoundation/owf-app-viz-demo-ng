import { Component, OnInit } from '@angular/core';
import { EventEmitterService } from '../event-emitter.service';  
import { 
  MatDialog,
  MatDialogRef,
  MatDialogConfig,
  MAT_DIALOG_DATA } from '@angular/material/dialog'; 

  import { Observable,
    of }         from 'rxjs';

import { DialogShowdownComponent }       from '../dialog-content/dialog-showdown/dialog-showdown.component';

import { HttpClient } from '@angular/common/http';
  
import { catchError,  take } from 'rxjs/operators';

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
  constructor(  public dialog: MatDialog,
                private eventEmitterService: EventEmitterService,
                private http: HttpClient ) { }

  //Step 1: first (plotly) component function call
  genericPlotlyDemoFunction(){  
  // firstComponentFunction(){  
    console.log('Inside firstComponentFunction call: ')  
    // this.eventEmitterService.onFirstComponentButtonClick();   
    this.eventEmitterService.genericPlotlyChartClick();  
  }
  SnodasPlotlyDemoFunction(){  
    console.log("Step 1: Event emitter SNODAS");  
    this.eventEmitterService.SnodasPlotlyChartClick();  
  }

  HeatMapPlotlyDemoFunction(){    
    this.eventEmitterService.HeatMapPlotlyChartClick();  
  }
  TSToolConfigPlotlyDemoFunction(){    
    this.eventEmitterService.TSToolConfigPlotlyChartClick();  
  }
  TSToolPointLineFunction(){    
    this.eventEmitterService.TSToolPointLineClick();  
  }

  genericChartjsDemoFunction(){  
    // firstComponentFunction(){  
      console.log('Inside firstComponentFunction call: ')  
      // this.eventEmitterService.onFirstComponentButtonClick();   
      this.eventEmitterService.genericChartJSClick();  
    }
  SnodasChartjsDemoFunction(){  
    console.log("Step 1: Event emitter SNODAS");  
    this.eventEmitterService.SnodasChartJSClick();  
  }

  TSToolConfigChartjsDemoFunction(){    
    this.eventEmitterService.TSToolConfigChartJSClick();  
  }
  
  showdownTableFunction(){    
    console.log("Step 1: Event emitter Showdown Table"); 
    this.eventEmitterService.showdownTableClick();  
  }

  showdownImgFunction(){
    console.log("Step 1: Event emitter Showdown Img"); 
    this.eventEmitterService.showdownImgClick();
  }

  showdownOptionsFunction(){
    console.log("Step 1: Event emitter Showdown Img"); 
    this.eventEmitterService.showdownOptionsClick();
  }

  showdownCSSFunction(){
    console.log("Step 1: Event emitter Showdown CSS"); 
    this.eventEmitterService.showdownCSSClick();
  }

  genericHighchartsFunction(){
    console.log("Step 1: Event emitter generic highcharts "); 
    this.eventEmitterService.genericHighchartsClick();
  }
  snodasHighchartsFunction(){
    console.log("Step 1: Event emitter snodas highcharts"); 
    this.eventEmitterService.snodasHighchartsClick();
  }
  tstoolHighchartsFunction(){
    console.log("Step 1: Event emitter tstool highcharts"); 
    this.eventEmitterService.tstoolHighchartsClick();
  }

  ngOnInit(): void {
  }


  /**
   * When the info button by the side bar slider is clicked, it will either show a popup or separate tab containing the documentation
   * for the selected geoLayerViewGroup or geoLayerView.
   * @param docPath The string representing the path to the documentation
   * @param 
   */
  public openShowdownDialog(docPath: string): void {

    // var windowID = geoLayerView.geoLayerId + '-dialog-doc';
    // if (this.windowManager.windowExists(windowID)) {
    //   return;
    // }

    var text: boolean, markdown: boolean, html: boolean;
    // Set the type of display the Mat Dialog will show
    if (docPath.includes('.txt')) text = true;
    else if (docPath.includes('.md')) markdown = true;
    else if (docPath.includes('.html')) html = true;

    this.getPlainText(docPath)
    .pipe(take(1))
    .subscribe((doc: any) => {

      const dialogConfig = new MatDialogConfig();
      dialogConfig.data = {
        doc: doc,
        docPath: docPath,
        docText: text,
        docMarkdown: markdown,
        docHtml: html,
        // geoLayerView: geoLayerView,
        // windowID: windowID
      }
        
      var dialogRef: MatDialogRef<DialogShowdownComponent, any> = this.dialog.open(DialogShowdownComponent, {
        data: dialogConfig,
        // hasBackdrop: false,
        panelClass: ['custom-dialog-container', 'mat-elevation-z20'],
        height: "725px",
        width: "700px",
        minHeight: "550px",
        minWidth: "500px",
        maxHeight: "90vh",
        maxWidth: "90vw"
      });
      // this.windowManager.addWindow(windowID, WindowType.DOCS);
    });
  }


    /**
   * 
   * @param path The path to the file to be read, or the URL to send the GET request
   * @param type Optional type of request sent, e.g. PathType.cPP. Used for error handling and messaging
   * @param id Optional app-config id to help determine where exactly an error occurred
   */
  public getPlainText(path: string): Observable<any> {

    const obj: Object = { responseType: 'text' as 'text' }
    return this.http.get<any>(path, obj)
    .pipe(
      catchError(this.handleError<any>(path))
    );
  }


  // public openGapminderDialog(){

  //   // Display a Gapminder Visualization
  //   else if (actionArray[i] === 'displayGapminder') {
  //     let fullResourcePath = _this.appService.buildPath(IM.Path.rP, [resourcePathArray[i]]);

  //     const dialogConfig = new MatDialogConfig();
  //     dialogConfig.data = {
  //       resourcePath: fullResourcePath
  //     }

  //     // Open the dialog WITHOUT any given data for right now.
  //     const dialogRef: MatDialogRef<DialogGapminderComponent, any> = _this.dialog.open(DialogGapminderComponent, {
  //       data: dialogConfig,
  //       hasBackdrop: false,
  //       panelClass: ['custom-dialog-container', 'mat-elevation-z24'],
  //       height: "700px",
  //       width: "910px",
  //       minHeight: "600px",
  //       minWidth: "645px",
  //       maxHeight: "90vh",
  //       maxWidth: "90vw"
  //     });
  //   }
  // }



    /**
   * Handle Http operation that failed, and let the app continue.
   * @param path - Name of the path used that failed
   * @param type - Optional type of the property error. Was it a home page, template, etc.
   * @param result - Optional value to return as the observable result
   */
  private handleError<T> (path: string, result?: T) {
    return (error: any): Observable<T> => {

      // Log the error to console instead
      // If the error message includes a parsing issue, more often than not it is a badly created JSON file. Detect if .json
      // is in the path, and if it is let the user know. If not, the file is somehow incorrect
      // if (error.message.includes('Http failure during parsing')) {
      //   console.error('[' + type + '] error. Info Mapper could not parse a file. Confirm the \'' + path +
      //   '\' file is %s', (path.includes('.json') ? 'valid JSON' : 'created correctly'));
      //   return of(result as T);
      // }
      // // TODO: jpkeahey delete this once all switch options are done
      // if (type) {
      //   console.error('[' + type + '] error. There might have been a problem with the ' + type +
      //     ' path. Confirm the path is correct in the configuration file');
      // }


      // TODO: jpkeahey 2020.07.22 - Don't show a map error no matter what. I'll probably want to in some cases.
      // this.router.navigateByUrl('map-error');
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}


