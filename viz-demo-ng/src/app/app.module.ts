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
    HeatmapDialog, Heatmap2Component, Heatmap2Dialog
    
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
    ShowdownModule,
    CommonModule,
    DragDropModule


  ],
  providers: [EventEmitterService, {provide : LocationStrategy , useClass: HashLocationStrategy}],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
