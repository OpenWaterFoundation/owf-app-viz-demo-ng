import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LineChartComponent } from './line-chart/line-chart.component';
import { PlotlyComponent } from './plotly/plotly.component';
import { GeneralChartjsComponent } from './line-chart/general-chartjs/general-chartjs.component';
import { GenericContentComponent, LinksComponent, NGXShowdownComponent } from './generic-content/generic-content.component';
import { GeneralPlotlyComponent } from './plotly/general-plotly/general-plotly.component';
import { HeatmapComponent } from './plotly/heatmap/heatmap.component';
import { TstoolGraphConfigComponent } from './tstool-graph-config/tstool-graph-config.component';
import { PlotlyTstoolGraphComponent } from './tstool-graph-config/plotly-tstool-graph/plotly-tstool-graph.component';




const routes: Routes = [

  {path: 'angular-visualization-demos', component: GenericContentComponent},
  {path: 'home', component: GenericContentComponent},
  {path: 'resources', component: LinksComponent},
  {path: 'showdown-demo', component: NGXShowdownComponent},

  {path: 'chartjs/generic-month-line-demo', component: GeneralChartjsComponent},
  {path: 'chartjs/snodas-day-line-demo', component: LineChartComponent},
  {path: 'chartjs/tstool-month-line-demo', component: TstoolGraphConfigComponent},

  
  {path: 'plotly/generic-month-line-demo', component: GeneralPlotlyComponent},
  {path: 'plotly/snodas-day-line-demo', component: PlotlyComponent},
  {path: 'plotly/heatmap-demo', component: HeatmapComponent},
  {path: 'plotly/tstool-month-line-demo', component: PlotlyTstoolGraphComponent},
  
  { path: '**', component: GenericContentComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
