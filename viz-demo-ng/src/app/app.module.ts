import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HashLocationStrategy, LocationStrategy  } from '@angular/common';
import { CommonModule } from '@angular/common';

import { ChartsModule } from 'ng2-charts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalModule } from 'ngx-bootstrap/modal';
import {MatDialogModule } from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ShowdownModule } from 'ngx-showdown';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { HighchartsChartModule } from 'highcharts-angular';




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { from, fromEventPattern } from 'rxjs';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LineChartComponent, SnodasChartJSDialog } from './line-chart/line-chart.component';
import { PlotlyComponent } from './plotly/plotly.component';
import { GeneralChartjsComponent, GenChartJSDialog } from './line-chart/general-chartjs/general-chartjs.component';
import { GenericContentComponent, LinksComponent, NGXShowdownComponent } from './generic-content/generic-content.component';
import { GeneralPlotlyComponent } from './plotly/general-plotly/general-plotly.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EventEmitterService } from './event-emitter.service';
import { HeatmapComponent, HeatmapDialog, Heatmap2Component, Heatmap2Dialog } from './plotly/heatmap/heatmap.component';
import { TstoolGraphConfigComponent } from './tstool-graph-config/tstool-graph-config.component';
import { PlotlyTstoolGraphComponent } from './tstool-graph-config/plotly-tstool-graph/plotly-tstool-graph.component';
import { ShowdownNgDemoComponent, ShowdownTableDialog,ShowdownIMGComponent, ShowdownIMGDialog,
   ShowdownOptionsComponent, ShowdownOptionsDialog, ShowdownCustomCSSComponent, ShowdownCustomCSSDialog } from './generic-content/showdown-ng-demo/showdown-ng-demo.component';
import { PlotlyTsPointLineComponent, TSDialogContent } from './plotly/plotly-ts-point-line/plotly-ts-point-line.component';
import { HighchartsComponent } from './highcharts/highcharts.component';
import { SnodasComponent } from './highcharts/snodas/snodas.component';
import { TstoolConfigComponent } from './highcharts/tstool-config/tstool-config.component';
import { HeatmapHCComponent, HeatmapHCDialogComponent, HeatmapHCStreamflow, HeatmapTSHCComponent, HeatmapTSHCDialogComponent } from './highcharts/heatmap/heatmap.component';
import { GenericD3Component } from './D3/generic/generic.component';
import { GenericTestComponent } from './D3/generic-test/generic-test.component';
import { GapminderComponent } from './gapminder/gapminder.component';
import { GapminderJsComponent } from './gapminder/gapminder-js/gapminder-js.component';
// import { TstoolConfigComponent } from './highcharts/tstool-config/tstool-config.component';
declare var require: any
const showdown = require('showdown');

const classMap = {
  h1: 'showdown_h1',
  h2: 'showdown_h2',
  ul: 'ui list',
  li: 'ui item',
  table: 'showdown_table',
  td: 'showdown_td',
  th: 'showdown_th',
  tr: 'showdown_tr',
  p: 'showdown_p',
  pre: 'showdown_pre'
}

const bindings = Object.keys(classMap)
  .map(key => ({
    type: 'output',
    regex: new RegExp(`(<${key}>|<${key} (.*?)>)`, 'g'),
    replace: `<${key} class="${classMap[key]}">`
  }));

const conv = new showdown.Converter({
  extensions: [bindings]
});




@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LineChartComponent,
    PlotlyComponent,
    GeneralChartjsComponent,
    GenericContentComponent,
    GeneralPlotlyComponent,
    HeatmapComponent,
    TstoolGraphConfigComponent,
    PlotlyTstoolGraphComponent,
    LinksComponent, NGXShowdownComponent,
    GenChartJSDialog,
    SnodasChartJSDialog,
    HeatmapDialog, Heatmap2Component, Heatmap2Dialog, ShowdownNgDemoComponent,
    ShowdownTableDialog, ShowdownNgDemoComponent, ShowdownIMGComponent, ShowdownIMGDialog,
    ShowdownOptionsComponent, ShowdownOptionsDialog,
    PlotlyTsPointLineComponent,
    HighchartsComponent,
    SnodasComponent,
    // TstoolConfigComponent
    ShowdownCustomCSSComponent,
    ShowdownCustomCSSDialog,
    TstoolConfigComponent,
    TSDialogContent,
    HeatmapHCComponent,
    HeatmapHCDialogComponent,
    HeatmapTSHCComponent,
    HeatmapTSHCDialogComponent,
    GenericD3Component,
    GenericTestComponent,
    GenericContentComponent,
    HeatmapHCStreamflow,
    GapminderComponent,
    GapminderJsComponent

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    NgbModule,
    ModalModule.forRoot(),
    BrowserAnimationsModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule, 
    MatCardModule,
    MatFormFieldModule,
    HttpClientModule,
    ShowdownModule.forRoot({emoji: true, noHeaderId: true, extensions: [bindings], openLinksInNewWindow: true, smartIndentationFix: true,simpleLineBreaks: false ,  flavor: 'github'}),
    CommonModule,
    DragDropModule,
    HighchartsChartModule
    


  ],
  providers: [EventEmitterService, {provide : LocationStrategy , useClass: HashLocationStrategy}],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
