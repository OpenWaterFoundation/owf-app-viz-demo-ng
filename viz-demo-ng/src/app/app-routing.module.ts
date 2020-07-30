import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LineChartComponent } from './line-chart/line-chart.component';
import { PlotlyComponent } from './plotly/plotly.component';
import { GeneralChartjsComponent } from './line-chart/general-chartjs/general-chartjs.component';
import { GenericContentComponent, LinksComponent, NGXShowdownComponent } from './generic-content/generic-content.component';
import { GeneralPlotlyComponent } from './plotly/general-plotly/general-plotly.component';
import { HeatmapComponent, HeatmapDialog, Heatmap2Component, Heatmap2Dialog } from './plotly/heatmap/heatmap.component';
import { TstoolGraphConfigComponent } from './tstool-graph-config/tstool-graph-config.component';
import { PlotlyTstoolGraphComponent } from './tstool-graph-config/plotly-tstool-graph/plotly-tstool-graph.component';
import { ShowdownNgDemoComponent } from './generic-content/showdown-ng-demo/showdown-ng-demo.component';




const routes: Routes = [

  {path: 'angular-visualization-demos', component: GenericContentComponent},
  {path: 'home', component: GenericContentComponent},
  {path: 'resources', component: LinksComponent},

  {path: 'showdown/demo-file', component: NGXShowdownComponent},
  {path: 'showdown/table-formatting', component: ShowdownNgDemoComponent},



  {path: 'chartjs/generic-month-line', component: GeneralChartjsComponent},
  {path: 'chartjs/snodas-day-line', component: LineChartComponent},
  {path: 'chartjs/tstool-month-line', component: TstoolGraphConfigComponent},

  
  {path: 'plotly/generic-month-line', component: GeneralPlotlyComponent},
  {path: 'plotly/snodas-day-line', component: PlotlyComponent},
  {path: 'plotly/tstool-month-line', component: PlotlyTstoolGraphComponent},
  {path: 'plotly/heatmap-generic', component: HeatmapComponent},
  {path: 'plotly/heatmap-ts', component: Heatmap2Component},

  
  { path: '**', component: GenericContentComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
